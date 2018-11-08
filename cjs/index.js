'use strict';
const $ = (m => m.__esModule ? m.default : m)(require('hyperhtml'));
const { Component, bind, define, wire } = require('hyperhtml');

const { global, WeakMap } = $._;

const details = new WeakMap;

const clear = global.cancelAnimationFrame || clearTimeout;
const request = clear == clearTimeout ? setTimeout : requestAnimationFrame;

let info = null;

const circus = (fn, $, init) => {
  const previously = info;
  if (init)
    details.set($, info = {
      $,
      fn,
      html: null,
      svg: null,
      i: index(),
      timer: 0,
      effect: [],
      reducer: [],
      ref: [],
      state: [],
    });
  else {
    info = details.get($);
    info.i = index();
  }
  const node = fn($).valueOf(false);
  if (info.i.effect) {
    clear(info.timer);
    info.timer = request(invoke(info.effect.splice(0)));
  }
  info = previously;
  return node;
};

const createReducer = (i, callback, value) => {
  const {reducer, fn, $} = info;
  return reducer[i] = [value, action => {
    value = callback(value, action);
    reducer[i][0] = value;
    circus(fn, $, false);
  }];
};

const createState = (i, value) => {
  const {state, fn, $} = info;
  return state[i] = [value, value => {
    state[i][0] = value;
    circus(fn, $, false);
  }];
};

const lazyWire = type => {
  return (...args) => {
    const hyper = (info[type] || (info[type] = wire(info.$, type)));
    return hyper(...args);
  };
};

const index = () => ({
  effect: 0,
  reducer: 0,
  ref: 0,
  state: 0,
});

const invoke = fns => () => {
  fns.forEach(fn => fn());
};

// exports
const neverland = fn => ($ = {}) => circus(fn, $, true);

const html = lazyWire('html');

const svg = lazyWire('svg');

const useEffect = callback => {
  const i = info.i.effect++;
  return info.effect[i] || (info.effect[i] = callback);
};

const useReducer = (callback, value) => {
  const i = info.i.reducer++;
  return info.reducer[i] || createReducer(i, callback, value);
};

const useRef = value => {
  const i = info.i.ref++;
  return info.ref[i] || (info.ref[i] = {current: value});
};

const useState = value => {
  const i = info.i.state++;
  return info.state[i] || createState(i, value);
};

Object.defineProperty(exports, '__esModule', {value: true}).default = neverland;
exports.Component = Component;
exports.bind = bind;
exports.define = define;
exports.wire = wire;
exports.neverland = neverland;
exports.html = html;
exports.svg = svg;
exports.useEffect = useEffect;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
