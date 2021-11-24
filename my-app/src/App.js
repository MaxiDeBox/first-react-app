import './App.css';
import {useCallback, useEffect, useRef} from "react";

const ENTER = "Enter";

// function App() {
//   const ref = useRef();
//
//   const handlerClick = useCallback(() => {
//     console.log(ref.current.value)
//   }, [ref]);
//
//   const handlerKeyup = useCallback((event) => {
//     const {key} = event;
//
//     if (key === ENTER) {
//       handlerClick();
//     }
//
//   }, [handlerClick])
//
//   useEffect(() => {
//     if(ref.current) {
//       ref.current.addEventListener("keyup", handlerKeyup);
//
//       return () => {
//         ref.current.removeEventListener("keyup", handlerKeyup);
//       };
//     }
//   }, [handlerKeyup]);
//
//   return (
//     <div className="App">
//       <input ref={ref} />
//       <button onClick={handlerClick}>Send</button>
//     </div>
//   );
// }


function App() {
  const userName = useRef("");
  const userSurname = useRef("");

  const onButtonClick = useCallback(() => {
    const user = {
      name: userName.current.value,
      surname: userSurname.current.value
    };

    if(!userName.current.value) {
      userName.current.focus();
    }

    if(!userSurname.current.value) {
      userSurname.current.focus();
    }

    if(userSurname.current.value && userName.current.value) {
      console.log(user);
    }
  }, [userName, userSurname]);

  const onKeyUp = useCallback((event) => {
    const {key} = event;

    if (key === ENTER) {
      onButtonClick();
    }

  }, [onButtonClick]);

  useEffect(() => {
    if(userName.current && userSurname.current) {
      userName.current.addEventListener("keyup", onKeyUp);
      userSurname.current.addEventListener("keyup", onKeyUp);
    }

    return () => {
      userName.current.removeListener("keyup", onKeyUp);
      userSurname.current.removeListener("keyup", onKeyUp);
    }
  }, [onKeyUp]);

  return (
    <div className="App">
      <p>
        <input ref={userName} type="text" placeholder="Your name" />
      </p>
      <p>
        <input ref={userSurname} type="text" placeholder="Your surname" />
      </p>
      <button onClick={onButtonClick}>Send</button>
    </div>
  );
};

export default App;
