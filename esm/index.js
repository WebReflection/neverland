import {augmentor, useRef} from 'dom-augmentor';

import {html as holedhtml, svg as holedsvg} from 'lighterhtml';

export function html() {
  return holedhtml.for(useRef(null), '').apply(null, arguments);
};

export function svg() {
  return holedsvg.for(useRef(null), '').apply(null, arguments);
};

export const neverland = fn => function () {
  return augmentor(fn).apply(null, arguments);
};

export const inner = {html, svg};

export {render} from 'lighterhtml';

export {
  useState,
  useEffect,
  useContext, createContext,
  useRef,
  useReducer,
  useCallback,
  useMemo,
  useLayoutEffect
} from 'augmentor';
