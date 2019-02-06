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

Object.defineProperty(exports, '__esModule', {value: true}).default = fn => augmentor(function () {
  const {current: info} = useRef({i: 0, $: []});
  const {i, $} = info;
  useEffect(() => {
    const {i, $} = info;
    if (i > $.length)
      $.splice(i);
    info.i = 0;
  });
  info.i++;
  if (i === $.length)
    $.push(augmentor(fn));
  return $[i].apply(this, arguments);
});

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
