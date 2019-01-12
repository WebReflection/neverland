'use strict';
const augmentor = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('dom-augmentor'));
const {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} = require('dom-augmentor');

const {render, hook} = require('lighterhtml');

const {html, svg} = hook(useRef);
Object.defineProperty(exports, '__esModule', {value: true}).default = fn => augmentor(fn);

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
