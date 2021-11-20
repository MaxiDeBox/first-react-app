import './App.css';
import {useEffect, useState, useMemo} from "react";

function createUser(name, surname) {
  const user = {
    name,
    surname
  }

  console.log(user);

  return user;
}

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [counter, setCounter] = useState(0);

  const user = useMemo(() => createUser(name, surname), [
    name,
    surname
  ]);

  return (
    <div className="App">
      <div>
        <p>
          <button onClick={(e) => setCounter(counter + 1)}>На меня нажали {counter}</button>
        </p>
        <p>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </p>
        <p>
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </p>
      </div>
      <pre>
        { JSON.stringify(user, null, 2) }
      </pre>
    </div>
  )
}

export default App;
