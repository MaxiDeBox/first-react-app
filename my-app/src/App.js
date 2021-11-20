import './App.css';
import ActionsCard from "./ActionsCard";
import StatusCard from "./StatusCard";
import {useState} from "react";
import Context from "./Context";

function App() {
  const [counter, setCounter] = useState(0);

  const count = (n) => {
    return setCounter(counter + n);
  };

  const value = {
    counter,
    count
  };

  return (
    <Context.Provider value={value}>
      <div className="container">
        <StatusCard />
        <ActionsCard />
      </div>
    </Context.Provider>
  );
}

export default App;
