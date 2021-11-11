import './App.css';
import React, {useState} from "react";

import Content from './Content';
import RecursiveButton from "./RecursiveButton";

function App(props) {
  // const value = Math.random() > Math.random();
  // return <div>{value ? <p> true </p> : <p> false </p>}</div>;

  const [showMode, setShowMode] = useState(false);

  const handlerClick = () => {
    setShowMode(!showMode);
  }

  let content = null;
  if(showMode) {
    content = <Content />
  }

  return(
    <div>
      {/*<button onClick={handlerClick}> Show toggle </button>*/}
      <RecursiveButton />
      {content}
    </div>
  )
}

export default App;
