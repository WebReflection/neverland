# Neverland 🌈🦄

[![Build Status](https://travis-ci.com/WebReflection/neverland.svg?branch=master)](https://travis-ci.com/WebReflection/neverland) [![Greenkeeper badge](https://badges.greenkeeper.io/WebReflection/neverland.svg)](https://greenkeeper.io/)

![Cosmic Timetraveler](img/cosmic-timetraveler-unsplash-1080.jpg)
<sup>**Photo by [Cosmic Timetraveler](https://unsplash.com/photos/1rmtbFGjIBs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/island?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)**</sup>

- - -

## Hooks via lighterhtml

```js
import {neverland as $, render, html, useState} from 'neverland';

const Counter = $((initialState) => {
  const [count, setCount] = useState(initialState);
  return html`
  <button onclick=${() => setCount(count + 1)}>
    Count: ${count}
  </button>`;
});

// basic example, show two independent counters
render(document.body, html`
  <div>
    A bounce of counters.<hr>
    ${Counter(0)} ${Counter(1)}
  </div>
`);
```


### Concept

As [React Hooks](https://reactjs.org/docs/hooks-intro.html) were born to simplify some framework pattern, _Neverland_ goal is to simplify [lighterhtml](https://github.com/WebReflection/lighterhtml) usage, in a virtual component way, through the mighty [dom-augmentor](https://github.com/WebReflection/dom-augmentor).

<sup>See what I did there? _React_ components' hooks are based on virtual DOM while neverland's hooks are based on virtual components.</sup>

This library simulates Custom Elements, without needing polyfills, simply by passing zero, one, or more arguments to every desired components in each template literal hole.

```js
// if you don't need hooks, you don't need to wrap components
const LinkLi = ({text, href}, highlighted) => html`
  <li class=${highlighted}>
    see <a href="${href}">${text}</a>
  </li>
`;

// some container with some click logic that uses hooks: $(wrap it)
const Links = $((items) => {
  const [clicked, changeState] = useState(-1);
  const onclick = useCallback(event => {
    const li = event.target.closest('li');
    changeState(
      // changeState accordingly to the clicked index
      [].indexOf.call(event.currentTarget.children, li)
    );
  }, []);
  return html`
  <ul onclick=${onclick}>
    ${items.map(
      (item, i) => LinkLi(item, i === clicked ? 'highlight' : '')
    )}
  </ul>`;
});

// render components within an element
render(document.body, html`
  List of links:
  ${Links([
    {text: 'blog', href: 'www.blog.me'},
    {text: 'bio', href: 'www.bio.me'},
  ])}
`);
```


### Available Renders

Both `html` and `svg` renders are exposed via the `neverland` module, and you must use the `render` utility



### Available Hooks

All hooks are provided by [augmentor](https://github.com/WebReflection/augmentor#available-hooks), via [dom-augmentor](https://github.com/WebReflection/dom-augmentor) that takes care or injecting life-cycle DOM events when `useEffect` is used.

  * **Basic Hooks**
    * [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
    * [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
    * [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext), which can be defined via `createContext(value)`
  * **Additional Hooks**
    * [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
    * [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
    * [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
    * [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
    * [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)



#### About `useImperativeMethods`

This hook is strictly _React_ oriented with no meaning in current _dom-augmentor_ world.



### When should I wrap components, as in `const Comp = $(() => html...)`?

Every time you wrap a component you grant yourself the used hooks within would run specifically for that component.

However, if you create an extra hook, or your callback doesn't return either `html` or `svg` result, **you don't need to wrap it**.

A simple rule of thumbs to know when a component should be wrapped or not is the following one:

  * does this function/callback/arrow returns `html` or `svg` templates tag literals?
  * if previous point is true, am I using any sort of direct, or composed, hook within such function, so that I want its state/results to be confined in the returned element, instead of side-effecting outer wrappers?

If the answer to both points is **yes**, then you should wrap the callback, otherwise, you most likely shouldn't.

This little thinking is currently needed due the fact there's no parsing or pre-processing in _neverland_, so that such wrapping cannot be done automatically for you, when needed.

You can still decide to wrap any callback that returns `html` or `svg` templates tag literals results, but that might have performance implication in larger projects.



### How To ...

Common ways via bundlers or CDNs:

  * globally, as `const {neverland: $, render, html, useState} = window.neverland` through _script_ with source `https://unpkg.com/neverland`
  * CJS via `const {neverland: $, render, html, useState} = require('neverland')`
  * ESM with bundlers via `import {neverland as $, render, html, useState} from 'neverland'`
  * pure ESM via `import {neverland as $, render, html, useState} from 'https://unpkg.com/neverland?module'`

If you use a bundler you can simply install `neverland` via npm or yarn.

It is also possible to use it in browsers via https://unpkg.com/neverland:

```js
// you can import it in any scope
const {neverland, html, useState} = window.neverland;
const VirtualComp = neverland(...);

// or ...
const {neverland:$, html} = neverland;
const VirtualComp = $(...);
```


## V3 Features / Breaking Changes

  * no more unnecessary DOM trashes 🎉
  * it is possible to have keyed results, when necessary, via `html.for(ref[, id])` or `svg.for(ref[, id])`
  * the usage of `render` is **mandatory**, no more DOM nodes out of the box



## V2 Breaking Changes

  * there is no default exported, but `neverland` named export
  * there are still more DOM trashes than desired, but it works, and the DX is awesome, as well as performance anyway 😊
