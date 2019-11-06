import {augmentor, useRef} from 'dom-augmentor';

import {render, hook} from 'lighterhtml';
const {html, svg} = hook(useRef);

export const neverland = fn => function () {
  return augmentor(fn).apply(null, arguments);
};

export {render, html, svg, useRef};

export {
  useState,
  useEffect,
  useReducer,
  useCallback,
  useMemo,
  useLayoutEffect
} from 'augmentor';
