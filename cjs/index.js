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

Object.defineProperty(exports, '__esModule', {value: true}).default = fn => {
  let index;
  const counter = [];
  const stack = [];
  const reset = () => {
    const i = index.current;
    if (0 < i) {
      if (stack.length < i) {
        stack.splice(i);
        counter.splice(i);
      }
      index.current = 0;
    }
  };
  const effect = () => reset;
  return augmentor(function () {
    index = useRef(0);
    const {current} = index;
    useEffect(effect);
    if (current === stack.length) {
      const cb = augmentor(fn);
      stack.push(cb);
      counter.push(cb);
    }
    if (stack[current] !== counter[current])
      stack[current] = counter[current] = augmentor(fn);
    return stack[index.current++].apply(this, arguments);
  });
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
