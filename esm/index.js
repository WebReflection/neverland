import augmentor, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} from 'dom-augmentor';

import {render, hook} from 'lighterhtml';
const {html, svg} = hook(useRef);

export default fn => augmentor(function () {
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

export {
  render, html, svg,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState
};
