# Neverland 🌈🦄

![Cosmic Timetraveler](img/cosmic-timetraveler-unsplash-1080.jpg)
<sup>**Photo by [Cosmic Timetraveler](https://unsplash.com/photos/1rmtbFGjIBs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/island?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)**</sup>

## Hooks for hyperHTML

```js
import stardust, {html, useState} from 'neverland';

const Counter = stardust(() => {
  const [count, setCount] = useState(0);
  return html`
  <button onclick=${() => setCount(count + 1)}>
    Count: ${count}
  </button>`;
});

document.body.appendChild(Counter());
```

As [React Hooks](https://reactjs.org/docs/hooks-intro.html) were born to simplify some framework pattern, _Neverland_ goal is to simplify some [hyperHTML](https://github.com/WebReflection/hyperHTML#hyperhtml) pattern, in a virtual component way, through the mighty [augmentor](https://github.com/WebReflection/augmentor).

<sup>See what I did there? _React_ components' hooks are based on virtual DOM while _hyperHTML_ neverland's DOM hooks are based on virtual components.</sup>


### Available Renders

Both `html` and `svg` renders are exposed via the `neverland` module.


### Available Hooks

All hooks behave as close as possible to their _React_ counter part.

In the `useEffect` case, passing an empty array will make effects run, and eventually clean up, only on `connected` and `disconnected` events, instead of per each render.

  * Basic Hooks
    * [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
    * [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
  * Additional Hooks
    * [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
    * [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
    * [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
    * [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
    * [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)


#### About `useContext` and `useImperativeMethods`

These two hooks are strictly _React_ oriented and have no meaning in current _hyperHTML_ world.


### How To ...

The `neverland` module is [a tiny wrap](esm/index.js) based on _hyperHTML_ `wire`.

If you use a bundler you can simply install `neverland` via npm, without needing to include `hyperhtml` dependency.

However, it is also possible to use it via https://unpkg.com/neverland and bring it in via:


```js
// you can import it in any scope
const {default:neverland, html, useState} = window.neverland;
const VirtualComp = neverland(...);

// or ...
const {default:stardust, html} = neverland;
const VirtualComp = stardust(...);
```

I let you choose the right export name to whatever you think would suit. As example, I've used `MrSmee(...)` for the [test page](test/test.js), which you can also [test it live](https://webreflection.github.io/neverland/test/).
