'use strict';
const {augmentor, useRef} = require('dom-augmentor');

const {render, hook} = require('lighterhtml');
const {html, svg, inner} = hook(useRef);

const neverland = fn => function () {
  return augmentor(fn).apply(null, arguments);
};
exports.neverland = neverland;

exports.render = render;
exports.html = html;
exports.svg = svg;
exports.inner = inner;
exports.useRef = useRef;

(m => {
  exports.useState = m.useState;
  exports.useEffect = m.useEffect;
  exports.useContext = m.useContext;
  exports.createContext = m.createContext;
  exports.useReducer = m.useReducer;
  exports.useCallback = m.useCallback;
  exports.useMemo = m.useMemo;
  exports.useLayoutEffect = m.useLayoutEffect;
})(require('augmentor'));
