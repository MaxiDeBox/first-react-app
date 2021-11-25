import './App.css';
import UserCard from "./UserCard";

function App() {
  const users = [
    { id: 0, name: "Maxim", surname: "Pak" },
    { id: 1, name: "Alexey", surname: "Andreenko" },
    { id: 2, name: "Dmitry", surname: "Sadikov" },
  ];

  return (
    <div className="App">
      <UserCard user={users[0]}
                onSendInvite={() => console.log(users[0].id+" invite")}
                onSendMessage={() => console.log(users[0])}
      />
      <UserCard user={users[1]} />
      <UserCard user={users[2]} />
    </div>
  );
};

export default App;
