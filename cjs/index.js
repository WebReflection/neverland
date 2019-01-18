'use strict';
const augmentor = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('dom-augmentor'));
const {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} = require('dom-augmentor');

const {render, hook} = require('lighterhtml');
const {html, svg} = hook(useRef);

Object.defineProperty(exports, '__esModule', {value: true}).default = fn => function () {		
  return augmentor(fn).apply(this, arguments);
};

exports.render = render;
exports.html = html;
exports.svg = svg;
exports.createContext = createContext;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useEffect = useEffect;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
