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

As [React Hooks](https://reactjs.org/docs/hooks-intro.html) were born to simplify some framework pattern, _Neverland_ goal is to simplify some [hyperHTML](https://github.com/WebReflection/hyperHTML#hyperhtml) pattern, in a virtual component way.

<sup>See what I did there? _React_ components' hooks are based on virtual DOM while _hyperHTML_ neverland's DOM hooks are based on virtual components.</sup>

### Available Renders

Both `html` and `svg` renders are exposed via the `neverland` module.

### Available Hooks

  * `const [value, setValue] = useState(initialValue)`, similarly to [React useState](https://reactjs.org/docs/hooks-reference.html#usestate), will automatically refresh the view whenever `setValue(newValue)` is invoked, simplifying the manual `update()` or automatic `render()` call, usually needed by _hyperHTML_ views, Custom Elements, or components.
  * `const [state, dispatch] = useReducer(reducer, initialState)`, similarly to [React useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer), will automatically refresh the view whenever `dispatch({any: 'value'})` would reduce the state.
  * `useEffect(callback)`, similarly to [React useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect), to asynchronously invoke callbacks once all eventual states and reducers have been called. Differently from React, it currently doesn't accept a second parameter.
  * `useMutationEffect(callback)`, similarly to [React useMutationEffect](https://reactjs.org/docs/hooks-reference.html#usemutationeffect), to synchronously invoke callbacks after any state changed.
  * `const {current: value} = useRef(initialValue)`, similarly to [React useRef](https://reactjs.org/docs/hooks-reference.html#useref), it will return a mutable object whose `.current` property is initialized to the passed `initialValue` argument, persist for the full lifetime of the returned view.

#### About Missing Hooks

At this experimental point, all hooks that are not really suggested, such [useMutationEffect](https://reactjs.org/docs/hooks-reference.html#usemutationeffect) and [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect), or that behave in a quite too magic way, such [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo), are not part of this tiny _hyperHTML_ wrapper, and also most likely not needed in a component-less _hyperHTML_ world.

### How To ...

The `neverland` module is [a tiny wrap](esm/index.js) based on _hyperHTML_ `wire`.

If you use a bundler you can simply install `neverland` via npm, without needing to include `hyperhtml` dependency.

However, it is also possible to use it via https://unpkg.com/neverland and bring it in via:

```js
// you can import it in any scope
const {neverland, html, useState} = window.neverland;
const VirtualComp = neverland(...);

// or ...
const {default:stardust, html} = neverland;
const VirtualComp = stardust(...);
```

I let you choose the right export name to whatever you think would suit. As example, I've used `MrSmee(...)` for the [test page](test/test.js), which you can also [test it live](https://webreflection.github.io/neverland/test/).
