import {augmentor, useRef} from 'dom-augmentor';

import {render, hook} from 'lighterhtml';
const {html, svg, inner} = hook(useRef);

export const neverland = fn => function () {
  return augmentor(fn).apply(null, arguments);
};

export {render, html, svg, inner, useRef};

export {
  useState,
  useEffect,
  useContext, createContext,
  useReducer,
  useCallback,
  useMemo,
  useLayoutEffect
} from 'augmentor';
