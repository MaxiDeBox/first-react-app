import React from "react";
import {useState} from "react";

const ButtonWithError = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    throw Error("Ups! Error!")
  }

  return <button onClick={() => setHasError(true)}>Call error!</button>;
}


export default ButtonWithError;
