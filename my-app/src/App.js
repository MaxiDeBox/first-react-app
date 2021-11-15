import './App.css';
import React, {useState} from "react";

function App(props) {
  const [value, setValue] = useState("Some text");
  const [checked, setChecked] = useState(false);
  const [fruit, setFruite] = useState(false);
  const [fruitSelect, setSelectedFruite] = useState("");

  const fruits = [
    "Apple",
    "Banana",
    "Orange"
  ];

  const handlerSelect = (event) => {
    return (
      setSelectedFruite(event.target.value)
    );
  };

  return (
    <div className="App">
      <h1>Elements Forms</h1>
      <input value={value} onChange={(e) => {setValue(e.target.value)}} />
      <br/>
      <textarea value={value} onChange={(e) => {setValue(e.target.value)}} />
      <br/>
      {value}
      <hr />
      <label>
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      </label>
      <br />
      {checked}
      <hr />
      <ul>
        {fruits.map((item, index) => (
          <li key={item}>
            <label>
              <input
                type="radio"
                checked={fruit === item}
                onChange={() => setFruite(item)}
              /> {item}
            </label>
          </li>
        ))}
      </ul>
      <br />
      {fruit}
      <hr />
      <br />
      <select
        onChange={(e) => handlerSelect(e)}>
        {fruits.map((item, index) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <br />
      {fruitSelect}
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       value: "Some text 2"
//     };
//   }
//
//   handlerOnChange(event) {
//     this.setState({
//       value: event.target.value
//     });
//   }
//
//   render () {
//     return (
//       <div className="App">
//         <input value={this.state.value} onChange={(e) => this.handlerOnChange(e)} />
//         {this.state.value}
//       </div>
//     );
//   }
// }

export default App;
