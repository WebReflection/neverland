'use strict';
const {augmentor, useRef} = require('dom-augmentor');

const {html: holedhtml, svg: holedsvg} = require('lighterhtml');

function html() {
  return holedhtml.for(useRef(null), '').apply(null, arguments);
}
exports.html = html;

function svg() {
  return holedsvg.for(useRef(null), '').apply(null, arguments);
}
exports.svg = svg;

const neverland = fn => function () {
  return augmentor(fn).apply(null, arguments);
};
exports.neverland = neverland;

const inner = {html, svg};
exports.inner = inner;

(m => {
  exports.render = m.render;
})(require('lighterhtml'));

(m => {
  exports.useState = m.useState;
  exports.useEffect = m.useEffect;
  exports.useContext = m.useContext;
  exports.createContext = m.createContext;
  exports.useRef = m.useRef;
  exports.useReducer = m.useReducer;
  exports.useCallback = m.useCallback;
  exports.useMemo = m.useMemo;
  exports.useLayoutEffect = m.useLayoutEffect;
})(require('augmentor'));
