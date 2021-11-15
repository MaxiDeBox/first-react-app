import './App.css';
import React, {useState} from "react";

function App() {
  const users = [
    {
      id: 0,
      name: "Maxim",
      surname: "Pak"
    },
    {
      id: 1,
      name: "Dima",
      surname: "Pak"
    },
    {
      id: 2,
      name: "Nata",
      surname: "Pak"
    },
    {
      id: 3,
      name: "Andrey",
      surname: "Pak"
    },
    {
      id: 4,
      name: "Igor",
      surname: "Pak"
    },
  ];

  const handlerMouseEnter = (user) => {
    console.log(user.name);
  }

  let list = users.map((user, index) => {
    const even = index % 2 === 0;
    let style = {};

    if (even) {
      style = {
        color: "white",
        background: "black"
      }
    }

    return (
      <li key={user.id} style={style} onMouseEnter={() => handlerMouseEnter(user)}>
        {user.name} {user.surname}
      </li>
    )
  });

  return (
    <ul>
      {list}
    </ul>
  );
}

export default App;
