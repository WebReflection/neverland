'use strict';
const WeakMap = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/weakmap'));
const tta = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/template-tag-arguments'));
const {augmentor} = require('dom-augmentor');

const {
  Hole,
  html: $html,
  svg: $svg,
  render: $render
} = require('lighterhtml');

const {create} = Object;
const {isArray} = Array;

const neverland = fn => (...args) => new Hook(fn, args);
exports.neverland = neverland;

html.for = createFor($html);
function html() {
  return new Hole('html', tta.apply(null, arguments));
}
exports.html = html;

svg.for = createFor($svg);
function svg() {
  return new Hole('svg', tta.apply(null, arguments));
}
exports.svg = svg;

const hooks = new WeakMap;
const holes = new WeakMap;
const cache = (wm, key, value) => {
  wm.set(key, value);
  return value;
};

const render = (where, what) => {
  const hook = typeof what === 'function' ? what() : what;
  if (hook instanceof Hook) {
    const info = hooks.get(where) || cache(hooks, where, {stack: []});
    return $render(where, retrieve(info, hook));
  }
  else {
    const info = holes.get(where) || cache(holes, where, newInfo());
    const counter = createCounter(info);
    unrollArray(info, hook.args, counter);
    cleanUp(info, counter);
    return $render(where, hook);
  }
};
exports.render = render;

(m => {
  exports.contextual = m.contextual;
  exports.useState = m.useState;
  exports.useEffect = m.useEffect;
  exports.useContext = m.useContext;
  exports.createContext = m.createContext;
  exports.useRef = m.useRef;
  exports.useReducer = m.useReducer;
  exports.useCallback = m.useCallback;
  exports.useMemo = m.useMemo;
  exports.useLayoutEffect = m.useLayoutEffect;
})(require('dom-augmentor'));

const cleanUp = ({sub, stack}, {a, i, aLength, iLength}) => {
  if (a < aLength)
    sub.splice(a);
  if (i < iLength)
    stack.splice(i);
};

const createCounter = ({sub, stack}) => ({
  a: 0, aLength: sub.length,
  i: 0, iLength: stack.length
});

const createHook = (info, entry) => augmentor(function () {
  const hole = entry.fn.apply(null, arguments);
  if (hole instanceof Hole) {
    const counter = createCounter(info);
    unrollArray(info, hole.args, counter);
    cleanUp(info, counter);
    return view(entry, hole);
  }
  return hole;
});

const newInfo = () => ({sub: [], stack: []});

const retrieve = (info, hook) => unroll(info, hook, {
  i: 0,
  iLength: info.stack.length
});

const unroll = ({stack}, {fn, args}, counter) => {
  const i = counter.i++;
  const unknown = i === counter.iLength;
  if (unknown)
    counter.iLength = stack.push({fn, hook: null});
  const entry = stack[i];
  if (unknown || entry.fn !== fn) {
    entry.fn = fn;
    entry.hook = createHook(newInfo(), entry);
  }
  return entry.hook.apply(null, args);
};

const unrollArray = (info, args, counter) => {
  for (let i = 1, {length} = args; i < length; i++) {
    const hook = args[i];
    if (typeof hook === 'object' && hook) {
      if (hook instanceof Hook)
        args[i] = unroll(info, hook, counter);
      else if (hook instanceof Hole)
        unrollArray(info, hook.args, counter);
      else if (isArray(hook)) {
        for (let i = 0, {length} = hook; i < length; i++) {
          const inner = hook[i];
          if (typeof inner === 'object' && inner) {
            if (inner instanceof Hook) {
              const {sub} = info;
              const a = counter.a++;
              if (a === counter.aLength)
                counter.aLength = sub.push(newInfo());
              hook[i] = retrieve(sub[a], inner);
            }
            else if (inner instanceof Hole)
              unrollArray(info, inner.args, counter);
          }
        }
      }
    }
  }
};

const view = (entry, {type, args}) =>
              (type === 'svg' ? $svg : $html)
                .for(entry, type)
                .apply(null, args);

function Hook(fn, args) {
  this.fn = fn;
  this.args = args;
}

function createFor(lighter) {
  const cache = new WeakMap;
  const setCache = entry => {
    const store = create(null);
    cache.set(entry, store);
    return store;
  };
  return (entry, id) => {
    const store = cache.get(entry) || setCache(entry);
    const info = store[id] || (store[id] = newInfo());
    return (...args) => {
      const counter = createCounter(info);
      unrollArray(info, args, counter);
      cleanUp(info, counter);
      return lighter.for(entry, id).apply(null, args);
    };
  };
}
