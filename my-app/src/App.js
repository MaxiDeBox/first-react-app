import './App.css';
import {useState, useRef, useEffect} from "react";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const nameInputRef = useRef();
  const surnameInputRef = useRef();

  const handlerOnKeyUp = (e) => {
    if (e.key === "Enter") {
      surnameInputRef.current.focus();
    }
  };

  return (
    <div className="App">
      <p>
        <input type="text"
               placeholder="Name"
               ref={nameInputRef}
               value={name}
               onChange={(e) => setName(e.target.value)} onKeyUp={handlerOnKeyUp} />
      </p>
      <p>
        <input type="text"
               placeholder="Surname"
               ref={surnameInputRef}
               value={surname}
               onChange={(e) => setSurname(e.target.value)} />
      </p>
    </div>
  );
}

export default App;
