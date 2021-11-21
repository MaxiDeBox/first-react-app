import './App.css';
import {useState, useRef, useEffect} from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const ref = useRef();

  useEffect(() => {
    ref.current = 0
  }, []);

  return (
    <div className="App">
      <button onClick={() => ref.current++}>
        Меня кликнули {counter} раз.
      </button>
      <br />
      <button onClick={() => setCounter(ref.current)}>
        Click
      </button>
    </div>
  );
}

export default App;
