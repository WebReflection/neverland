import augmentor, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} from 'dom-augmentor';

import {render, hook} from 'lighterhtml';
const {html, svg} = hook(useRef);

export default fn => {
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

export {
  render, html, svg,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState
};
