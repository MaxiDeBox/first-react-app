import './App.css';
import { useState } from "react";
import { add, remove, doneToggle } from "./store/todo";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const items = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => dispatch(add(value))}>Добавить элемент</button>
      <br />
      <ul>
        { items.map((item) => (
            <li key={item.id}>
              <button onClick={() => dispatch(doneToggle(item.id))}>Done</button>
              <button onClick={() => dispatch(remove(item.id))}>Remove</button>
              <span className={item.done ? "done" : ""}>{item.content}</span>
            </li>
          ))}
      </ul>

    </div>
  );
}

export default App;


