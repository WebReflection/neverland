addEventListener(
  'DOMContentLoaded',
  () => {

    const {
      neverland: $,  // alias as you prefer
      html,
      render,
      useEffect, useReducer, useRef, useState
    } = neverland;

    const demo = (name, Component) => {
      const div = document.body.appendChild(
        document.createElement('div')
      );
      div.appendChild(
        document.createElement('h1')
      ).textContent = name;
      render(div.appendChild(
        document.createElement('div')
      ), Component);
    };

    // The most basic Hook: useState
    const Counter = $(() => {
      const [count, setCount] = useState(0);
      return html.for(document, 'Counter')`
      <button onclick=${() => setCount(count + 1)}>
        Count: ${count}
      </button>`;
    });

    demo('Counter', Counter);

    // The reducer and effect Hook
    const initialState = {count: 0};

    function reducer(state, action) {
      switch (action.type) {
        case 'reset':
          return initialState;
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
      }
    }

    const staticInfo = [
      {type: 'increment', text: '+'},
      {type: 'decrement', text: '-'}
    ];
    const ReducedCounter = $(() => {
      const [state, dispatch] = useReducer(reducer, initialState);
      useEffect(() => console.log(state));
      useEffect(() => {
        console.log('connected effect');
        return () => {
          console.log('disconnected effect');
        };
      }, []);
      return html`
          Count: ${state.count}<br/>
          <button onclick=${() => dispatch({type: 'reset'})}>
            Reset
          </button>
          ${staticInfo.map(
            info => html.for(info)`<button onclick=${() => dispatch(info)}>${info.text}</button>`
          )}
          <button onclick=${e => e.currentTarget.closest('div').remove()}>
            Remove
          </button>
          <hr>
      `;
    });

    demo('ReducedCounter', ReducedCounter);

    // The useRef Hook plus hyperHTML goodness via on~dis/connected,
    // making the need to return cleanup functions
    // not better than invoking callbacks when live/offline status changes
    const RefCounter = $(() => {
      const [count, setCount] = useState(0);
      const [icount, setICount] = useState(0);
      const {current: increment} = useRef(
        Math.ceil(Math.random() * 5)
      );
      useEffect(() => {
        console.log(window.log = 'Harrrrrrrr!!');
        return () => console.log('!!rrrrrrrraH');
      });
      return html.for(document, 'RefCounter')`
      <div>
        <p>Count: ${count}</p>
        <p>Increment: ${increment}</p>
        <button
          onclick=${() => {
            setCount(count + 1);
            setICount(icount + increment);
          }}
        >
          Incremented Count: ${icount}
        </button>
      </div>`;
    });

    demo('RefCounter', RefCounter);

  },
  {once: true}
);