'use strict';
// @ts-check
const WeakMap = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/weakmap'));
const tta = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/template-tag-arguments'));
const {augmentor} = require('dom-augmentor');

const {
  Hole,
  html: $html,
  svg: $svg,
  render: $render
} = require('lighterhtml');

/**
 * @typedef {<K>(template: TemplateStringsArray, ...values: any[]) => K} ITagFunction
 */

/**
 * An interface describing hooks counter
 * @typedef ICounter
 * @prop {number} a
 * @prop {number} aLength
 * @prop {number} i
 * @prop {number} iLength
 */

/**
 * An interface describing hooks info
 * @typedef IInfo
 * @prop {IInfo[]} [sub]
 * @prop {IEntry[]} stack
 */

/**
 * @typedef IEntry
 * @prop {any} hook
 * @prop {*} fn
 */

/**
 * @typedef {<T>(wm: WeakMap<object, T>, key: any, value: T) => T} CacheFn
 */

const {create} = Object;
const {isArray} = Array;

/**
 * @template Args
 * @param {(...args: Args[]) => unknown} fn
 * @returns {(...args: Args[]) => Hook}
 */
const neverland = fn => (...args) => new Hook(fn, args);
exports.neverland = neverland;

/**
 * @typedef {{
 *  (...args: any[]): Hole;
 *  for: (entry: IEntry, id?: string) => (...args: any[]) => any
 * }} IRenderer
 */

/**
 * @type {IRenderer}
 */
function html() {
  return new Hole('html', tta.apply(null, arguments));
}
exports.html = html;
html.for = createFor($html);

/**
 * @type {IRenderer}
 */
function svg() {
  return new Hole('svg', tta.apply(null, arguments));
}
exports.svg = svg;
svg.for = createFor($svg);

/**
 * @type {WeakMap<object, IInfo>}
 */
const hooks = new WeakMap;
const holes = new WeakMap;

/**
 * @type {CacheFn}
 */
const cache = (wm, key, value) => {
  wm.set(key, value);
  return value;
};

/**
 * @param {Node} where
 * @param {any} what
 */
const render = (where, what) => {
  const hook = typeof what === 'function' ? what() : what;
  if (hook instanceof Hook) {
    const info = hooks.get(where) || cache(hooks, where, {stack: []}); // no sub?
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

/**
 * todo: describe cleanup
 * @param {IInfo} param0
 * @param {ICounter} param1
 */
const cleanUp = ({sub, stack}, {a, i, aLength, iLength}) => {
  if (a < aLength)
    sub.splice(a);
  if (i < iLength)
    stack.splice(i);
};

/**
 * todo: describe create counter
 * @param {IInfo} param0
 * @returns {ICounter}
 */
const createCounter = ({sub, stack}) => ({
  a: 0, aLength: sub.length,
  i: 0, iLength: stack.length
});

/**
 * @param {IInfo} info
 * @param {IEntry} entry
 */
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

/**
 * @returns {IInfo}
 */
const newInfo = () => ({sub: [], stack: []});

/**
 * @param {IInfo} info
 * @param {Hook} hook
 */
const retrieve = (info, hook) => unroll(info, hook, {
  i: 0,
  iLength: info.stack.length
});

/**
 * @param {IInfo} param0
 * @param {Hook} param1
 * @param {Pick<ICounter, 'i' | 'iLength'>} counter why partial ICounter?
 */
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

/**
 * @param {IInfo} info
 * @param {any} args
 * @param {ICounter} counter
 */
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

/**
 * @param {IEntry} entry
 * @param {Hole} param1
 */
const view = (entry, {type, args}) =>
              (type === 'svg' ? $svg : $html)
                .for(entry, type)
                .apply(null, args);

/**
 * @class
 * @param {Function} fn
 * @param {any[]} args
 */
function Hook(fn, args) {
  this.fn = fn;
  this.args = args;
}

/**
 * @param {import('lighterhtml').Tag<HTMLElement | SVGElement>} lighter 
 */
function createFor(lighter) {
  /**
   * @type {WeakMap<IEntry, Record<string, IInfo>>}
   */
  const cache = new WeakMap;
  /**
   * @returns {Record<string, IInfo>}
   */
  const setCache = entry => {
    const store = create(null);
    cache.set(entry, store);
    return store;
  };
  
  return (
    /**
     * @param {IEntry} entry
     * @param {string} [id]
     */
    (entry, id) => {
      const store = cache.get(entry) || setCache(entry);
      const info = store[id] || (store[id] = newInfo());
      return (
        /**
         * @param {any[]} args
         */
        (...args) => {
          const counter = createCounter(info);
          unrollArray(info, args, counter);
          cleanUp(info, counter);
          return lighter.for(entry, id).apply(null, args);
        }
      );
    }
  );
}
