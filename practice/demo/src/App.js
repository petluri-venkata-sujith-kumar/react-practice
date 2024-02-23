// import React from 'react'
// function App() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = React.useState(0);
//    let setCoun=()=>{
//         return setCount(count+1)
//     }
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCoun()}>
//         Click me
//       </button>
//     </div>
//   );
// }
// export default App

import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      throw new Error('Unsupported action type');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    dispatch({ type: 'increment' });
  };

  const decrement = () => {
    dispatch({ type: 'decrement' });
  };

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Counter