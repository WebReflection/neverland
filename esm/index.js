import {
  Component,
  bind,
  define,
  observe,
  wire
} from 'hyperhtml';

import augmentor, {
  useCallback,
  useEffect as effect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} from 'augmentor';

let id = 0;

const find = node => {
  const {childNodes} = node;
  const {length} = childNodes;
  let i = 0;
  while (i < length) {
    const child = childNodes[i++];
    if (child.nodeType === 1)
      return child;
  }
  throw 'unobservable';
};

const observer = ($, wire) => {
  const node = wire.wireType === 1 ? wire : find(wire);
  observe(node);
  const handler = {connected, disconnected, handleEvent, $, _: null};
  node.addEventListener('connected', handler);
  node.addEventListener('disconnected', handler);
};

// every html`...` and svg`...` will be unrolled after
const unroll = (dom, ref, template) => {
  const {$, _} = template;
  const {length} = _;
  for (let i = 1; i < length; i++) {
    const interpolation = _[i];
    if (interpolation) {
      if (interpolation instanceof Template)
        _[i] = unroll(false, ref, interpolation);
      else if (interpolation instanceof Array)
        interpolation.forEach(deepUnroll, ref);
    }
  }
  const result = wire(ref, $ + ':' + id++).apply(null, _);
  return dom && !('ELEMENT_NODE' in result) ?
    result.valueOf(!result.first.parentNode) :
    result;
};

const useEffect = (fn, inputs) => {
  const args = [fn];
  if (inputs)
    // if the inputs is an empty array
    // observe the returned wire for connect/disconnect events
    // and invoke effects/cleanup on these events only
    args.push(inputs.length ? inputs : observer);
  return effect.apply(null, args);
};

export default fn => augmentor(function ref() {
  const prev = id;
  id = 0;
  try {
    return unroll(true, ref, fn.apply(this, arguments));
  }
  catch (o_O) {
    console.error(o_O);
  }
  finally {
    id = prev;
  }
});

export function html() {
  return new Template('html', arguments);
}

export function svg() {
  return new Template('svg', arguments);
}

export {
  // from hyperHTML
  Component,
  bind,
  define,
  observe,
  wire,

  // from augmentor (with overwritten useEffect)
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState
};

// the mighty Template class \o/
function Template($, _) {
  this.$ = $;
  this._ = _;
}

function deepUnroll(value, i, array) {
  if (value instanceof Template)
    array[i] = unroll(false, this, value);
}

// handlers methods
function connected() {
  disconnected.call(this);
  this._ = this.$();
}

function disconnected() {
  const {_} = this;
  this._ = null;
  if (_)
    _();
}

function handleEvent(e) {
  this[e.type]();
}
