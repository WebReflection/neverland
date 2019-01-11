'use strict';
const CustomEvent = (m => m.__esModule ? m.default : m)(require('@ungap/custom-event'));
const WeakSet = (m => m.__esModule ? m.default : m)(require('@ungap/weakset'));
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
const disconnected = (m => m.__esModule ? m.default : m)(require('disconnected'));
const {render, html, svg} = require('lighterhtml');

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

const observe = disconnected({Event: CustomEvent, WeakSet});

const observer = ($, wire) => {
  const node = wire.nodeType === 1 ? wire : find(wire);
  observe(node);
  const handler = {handleEvent, onconnected, ondisconnected, $, _: null};
  node.addEventListener('connected', handler);
  node.addEventListener('disconnected', handler);
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

Object.defineProperty(exports, '__esModule', {value: true}).default = fn => {
  const wrap = {
    appendChild,
    fragment: null,
    textContent: ''
  };
  return augmentor(function () {
    const args = [this];
    args.push.apply(args, arguments);
    return render(wrap, fn.bind.apply(fn, args)).fragment;
  });
};

exports.render = render;
exports.html = html;
exports.svg = svg;
exports.useCallback = useCallback;
exports.useEffect = useEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;

// wrapper method
function appendChild(fragment) {
  this.fragment = fragment;
}

// handlers methods
function handleEvent(e) {
  this['on' + e.type]();
}

function onconnected() {
  ondisconnected.call(this);
  this._ = this.$();
}

function ondisconnected() {
  const {_} = this;
  this._ = null;
  if (_)
    _();
}
