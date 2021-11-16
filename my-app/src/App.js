import './App.css';
import {useState} from "react";

// function App() {
//   const [counters, setCounters] = useState([0, 0, 0]);
//
//   const count = (n) => {
//     return setCounters(
//       counters.map((v, i) => {
//         return (n === i) ? v + 1 : v;
//       })
//     );
//   }
//
//   return (
//     <div className="App">
//       <ul>
//         {
//           counters.map((item, index) => (
//             <li key={index}>
//               <button onClick={() => count(index)}> Clicked {counters[index]} </button>
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   );
// }

// function App() {
//   const [state, setState] = useState({
//     counter: 0,
//     user: {
//       name: "Maxim",
//       surname: "Pak"
//     }
//   });
//
//   const handlerClick = () => {
//     console.log(state);
//     setState({
//        counter: state.counter + 1,
//         ...state
//     })
//   }
//
//   return (
//     <div className="App">
//       <button onClick={handlerClick}>Click</button>
//     </div>
//   )
// }

function App() {
  const [counter, setCounter] = useState(0);
  const handlerClick = () => {
    setCounter((x, props) => x + 1);
    setCounter((x, props) => x + 1);
  }
  return (
    <div className="App">
      <button onClick={handlerClick}>Clicked {counter}</button>
    </div>
  )
}

export default App;
