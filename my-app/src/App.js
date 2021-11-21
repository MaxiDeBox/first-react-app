import './App.css';
import useOne from "./useOne";
import {useState} from "react";
import useCounter from "./useCounter";
import useSmartCounter from "./useSmartCounter";

// function App() {
//   useOne(() => {
//     console.log("1 раз вызван");
//   });
//
//   const {counter, count} = useCounter()
//
//   return (
//     <div className="App">
//       <button onClick={count}>
//         Нажали на меня {counter} раз
//       </button>
//     </div>
//   );
// }

function App() {
  const {counter, addOne, addFive, removeOne, removeFive} = useSmartCounter();
  return (
    <div className="App">
      <p>
        <span>{counter}</span>
      </p>
      <p>
        <button onClick={addOne}>+1</button>
        <button onClick={addFive}>+5</button>
      </p>
      <p>
        <button onClick={removeOne}>-1</button>
        <button onClick={removeFive}>-5</button>
      </p>
    </div>
  );
};

export default App;
