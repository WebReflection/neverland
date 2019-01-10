'use strict';
const {
  Component,
  bind,
  define,
  observe,
  wire
} = require('hyperhtml');

const augmentor = (m => m.__esModule ? m.default : m)(require('augmentor'));
const {
  useCallback,
  useEffect: effect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} = require('augmentor');

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
  const node = wire.nodeType === 1 ? wire : find(wire);
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
  return dom && !('nodeType' in result) ?
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

Object.defineProperty(exports, '__esModule', {value: true}).default = fn => augmentor(function ref() {
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

function html() {
  return new Template('html', arguments);
}
exports.html = html

function svg() {
  return new Template('svg', arguments);
}
exports.svg = svg

exports.Component = Component;
exports.bind = bind;
exports.define = define;
exports.observe = observe;
exports.wire = wire;
exports.useCallback = useCallback;
exports.useEffect = useEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;

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
