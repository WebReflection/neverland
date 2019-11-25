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

const neverland = fn => (...args) => new Hook(fn, args);
exports.neverland = neverland;

const html = (...args) => new Template('html', args);
exports.html = html;
html.for = createFor($html);

const svg = (...args) => new Template('svg', args);
exports.svg = svg;
svg.for = createFor($svg);

const render = (where, what) => {
  const hook = typeof what === 'function' ? what() : what;
  return $render(
    where,
    hook instanceof Hook ?
      retrieve(cache.get(where) || setCache(where), hook) :
      templateAsHole(newInfo(), hook)
  );
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

const {isArray} = Array;
const {create} = Object;

const cache = new WeakMap;

const cleanUp = ({sub, stack}, {a, i, aLength, iLength}) => {
  if ((a + 1) < aLength)
    sub.splice(a + 1);
  if ((i + 1) < iLength)
    stack.splice(i + 1);
};

const createCounter = ({sub, stack}) => ({
  a: 0, aLength: sub.length,
  i: 0, iLength: stack.length
});

const createHook = (info, entry) => augmentor(function () {
  const template = entry.fn.apply(null, arguments);
  if (template instanceof Template) {
    const counter = createCounter(info);
    unrollArray(info, template.args, counter);
    cleanUp(info, counter);
    return view(entry, template);
  }
  return template;
});

const newInfo = () => ({sub: [], stack: []});

const retrieve = (info, hook) => unroll(info, hook, {
  i: 0,
  iLength: info.stack.length
});

const setCache = where => {
  const info = {stack: []};
  cache.set(where, info);
  return info;
};

const templateAsHole = (info, {type, args}) => {
  const hole = new Hole(type, tta.apply(null, args));
  unrollArray(info, hole.args, createCounter(info));
  return hole;
};

const unroll = ({stack}, {fn, args}, counter) => {
  const {i, iLength} = counter;
  const unknown = i === iLength;
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
      if (hook instanceof Hook) {
        counter.i++;
        args[i] = unroll(info, hook, counter);
      }
      else if (hook instanceof Template) {
        unrollArray(info, hook.args, counter);
        args[i] = new Hole(hook.type, tta.apply(null, hook.args));
      }
      else if (isArray(hook)) {
        for (let i = 0, {length} = hook; i < length; i++) {
          const inner = hook[i];
          if (typeof inner === 'object' && inner) {
            if (inner instanceof Hook) {
              const {sub} = info;
              const {a, aLength} = counter;
              if (a === aLength)
                counter.aLength = sub.push(newInfo());
              counter.a++;
              hook[i] = retrieve(sub[a], inner);
            }
            else if (inner instanceof Template) {
              unrollArray(info, inner.args, counter);
              hook[i] = new Hole(inner.type, tta.apply(null, inner.args));
            }
          }
        }
      }
    }
  }
};

const view = (entry, {type, args}) => {
  const lighter = type === 'html' ? $html : $svg;
  return lighter.for(entry, type).apply(null, args);
};

function Hook(fn, args) {
  this.fn = fn;
  this.args = args;
}

function Template(type, args) {
  this.type = type;
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
