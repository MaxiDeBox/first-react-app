import './App.css';
import React, { useReducer } from "react";
import { decrement, increment } from "./actions";
import reducer from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    counter: 1
  });

  return (
    <div className="App">
      <button onClick={() => dispatch(decrement(1))}>-1</button>
      <button onClick={() => dispatch(decrement(2))}>-2</button>
      <br />
      {state.counter}
      <br />
      <button onClick={() => dispatch(increment(1))}>+1</button>
      <button onClick={() => dispatch(increment(2))}>+2</button>
    </div>
  );
};

export default App;
