import './App.css';
import {useEffect, useState, useMemo, useCallback} from "react";

function App() {
  const [message, setMessage] = useState("Hello");
  const [counter, setCounter] = useState(0);

  const greeting = useCallback((text) => {
    console.log(text);
  }, []);

  useEffect(() => {
    greeting(message);
  }, [greeting, message]);


  return (
    <div className="App">
      <button onClick={() => setCounter(counter + 1)}> На меня нажали {counter} </button>
    </div>
  )
}

export default App;
