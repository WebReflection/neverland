# Neverland 🌈🦄

[![Build Status](https://travis-ci.com/WebReflection/neverland.svg?branch=master)](https://travis-ci.com/WebReflection/neverland) [![Greenkeeper badge](https://badges.greenkeeper.io/WebReflection/neverland.svg)](https://greenkeeper.io/)

![Cosmic Timetraveler](img/cosmic-timetraveler-unsplash-1080.jpg)
<sup>**Photo by [Cosmic Timetraveler](https://unsplash.com/photos/1rmtbFGjIBs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/island?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)**</sup>

## Check haunted out !!!

Project [haunted](https://github.com/matthewp/haunted/tree/a88c42958459428270c1993547e0a415cd76f152#lighterhtml-etc) finally goes library agnostic, and you can use _lighterhtml_ as your hooked engine 🎉

- - -

## Warning

This project simply puts together [lighterhtml](https://github.com/WebReflection/lighterhtml) and [dom-augmentor](https://github.com/WebReflection/dom-augmentor) in few lines of code, but all bugs are likely related to [augmentor](https://github.com/WebReflection/augmentor) or its [dom-augmentor](https://github.com/WebReflection/dom-augmentor) wrap, which are projects I am struggling to actively maintain, 'cause I don't use hooks much but I am also wokring on [🔥 heresy 🔥](https://github.com/WebReflection/heresy) and its [SSR](https://github.com/WebReflection/heresy-ssr) coutner part.

**Use [haunted](https://github.com/matthewp/haunted/tree/a88c42958459428270c1993547e0a415cd76f152#lighterhtml-etc) instead.**

_TL;DR_ this project is currently not maintained because there are better toys in town. I am not deprecating this 'cause one day I might work on it again and fix all issues, but until that day you've been informed on the current state.


## Experimental Hooks for lighterhtml

```js
import stardust, {render, html, useState} from 'neverland';

const Counter = stardust(() => {
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


### Available Renders

Both `html` and `svg` renders are exposed via the `neverland` module, and you can use the `render` utility (suggested) or inject directly to the DOM resulting components.


### Available Hooks

All hooks behave as close as possible to their _React_ counter part.

  * Basic Hooks
    * [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
    * [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
    * [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) **experimental**
  * Additional Hooks
    * [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
    * [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
    * [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
    * [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
    * [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)


#### About `useImperativeMethods`

This hook is strictly _React_ oriented and it has no meaning in current _dom-augmentor_ world.


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
const {default:neverland, html, useState} = window.neverland;
const VirtualComp = neverland(...);

// or ...
const {default:$, html} = neverland;
const VirtualComp = $(...);
```

You can, of course, choose the right export name to whatever you think would suit.

As example, I've used `MrSmee(...)` for the [test page](test/test.js), which you can also [test it live](https://webreflection.github.io/neverland/test/).
