# Neverland 🌈🦄

[![Build Status](https://travis-ci.com/WebReflection/neverland.svg?branch=master)](https://travis-ci.com/WebReflection/neverland) [![Greenkeeper badge](https://badges.greenkeeper.io/WebReflection/neverland.svg)](https://greenkeeper.io/)

![Cosmic Timetraveler](img/cosmic-timetraveler-unsplash-1080.jpg)
<sup>**Photo by [Cosmic Timetraveler](https://unsplash.com/photos/1rmtbFGjIBs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/island?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)**</sup>

- - -

## Hooks via lighterhtml

```js
import {neverland, render, html, useState} from 'neverland';

const Counter = neverland(() => {
  const [count, setCount] = useState(0);
  return html`
  <button onclick=${() => setCount(count + 1)}>
    Count: ${count}
  </button>`;
});

render(document.body, Counter);
// alternatively
// document.body.appendChild(Counter());
```

As [React Hooks](https://reactjs.org/docs/hooks-intro.html) were born to simplify some framework pattern, _Neverland_ goal is to simplify [lighterhtml](https://github.com/WebReflection/lighterhtml) usage, in a virtual component way, through the mighty [dom-augmentor](https://github.com/WebReflection/dom-augmentor).

<sup>See what I did there? _React_ components' hooks are based on virtual DOM while neverland's hooks are based on virtual components.</sup>

## V2 Breaking Changes

  * there is no default exported, but `neverland` named export
  * the usage of `html` or `svg` must be **once per component**. You [cannot use references within loops](https://inventingwithmonster.io/20190207-break-the-rules-of-react-hooks/#running-hooks-within-a-loop) so define components for inner loops instead.
  * there are still more DOM trashes than desired, but it works, and the DX is awesome, as well as performance anyway 😊


### Available Renders

Both `html` and `svg` renders are exposed via the `neverland` module, and you can use the `render` utility (suggested) or inject directly to the DOM resulting components.


### Available Hooks

  * **Basic Hooks**
    * [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
    * [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
  * **Additional Hooks**
    * [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
    * [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
    * [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
    * [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
    * [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)



#### About `useImperativeMethods` and `createContext`

These hooks are strictly _React_ oriented with no meaning in current _dom-augmentor_ world.



## Alternatives

Project [haunted](https://github.com/matthewp/haunted/tree/a88c42958459428270c1993547e0a415cd76f152#lighterhtml-etc) finally goes library agnostic, and you can use _lighterhtml_ as your hooked engine 🎉



### How To ...

Common ways via bundlers or CDNs:

  * globally, as `const {default: neverland, html, useState} = window.neverland` through _script_ with source `https://unpkg.com/neverland`
  * CJS via `const {default: neverland, html, useState} = require('neverland')`
  * ESM with bundlers via `import neverland, {html, useState} from 'neverland'`
  * pure ESM via `import neverland, {html, useState} from 'https://unpkg.com/neverland?module'`

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

You can, of course, choose the right export name to whatever you think would suit.

As example, I've used `MrSmee(...)` for the [test page](test/test.js), which you can also [test it live](https://webreflection.github.io/neverland/test/).
