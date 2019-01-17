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

Object.defineProperty(exports, '__esModule', {value: true}).default = fn => {
  let index;
  const stack = [];
  const effect = () => {
    const i = index.current;
    if (0 < i) {
      if (stack.length < i)
        stack.splice(i);
      index.current = 0;
    }
  };
  return augmentor(function () {
    index = useRef(0);
    useEffect(effect);
    if (index.current === stack.length)
      stack.push(augmentor(fn));
    return stack[index.current++].apply(this, arguments);
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
