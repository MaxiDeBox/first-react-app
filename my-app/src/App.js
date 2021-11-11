import './App.css';
import React from "react";
import Button from "./Button";

function App(props) {
  const onThirdClick = () => {
    console.log("third click was clicked");
  };

  const handlerClick = () => {
    console.log("Click");
  }

  const handlerMouseEnter = () => {
    console.log("Mouse Enter")
  }

  return <Button
          onThirdClick={onThirdClick}
          onClick={handlerClick}
          onMouseEnter={handlerMouseEnter}>New text button</Button>
}

export default App;
