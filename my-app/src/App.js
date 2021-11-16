import './App.css';
import {useEffect, useState} from "react";

function App() {
  // Заменяет методы жизнего цикла componentDidMount componentDidUpdate
  // useEffect(() => {
  //   console.log(document.querySelector("#target"));
  // });

  // Вызов единожды
  // const [users, setUsers] = useState([]);
  // const [search, setSearch] = useState("");
  //
  // useEffect(() => {
  //   fetch("/users?search" + search)
  //     .then(response => response.json)
  //     .then(users => setUsers(users))
  // }, [search]);

  // Работа с интервалом
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const flagInterval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);

    return () => clearInterval(flagInterval);
  });

  return (
    <div className="App">
      <p id="target">Hello {timer}</p>
    </div>
  )
}

export default App;
