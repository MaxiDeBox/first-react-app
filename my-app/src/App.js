import './App.css';
import React, {useState} from "react";

function App(props) {
  const [counter, setCounter] = useState(0);
  const handlerClick = (event) => {
    setCounter(counter + 1);
  }

  const handlerMouseEnter = (event) => {
    console.log(event);
  }

  const handlerMouseLeave = (event) => {
    console.log(event);
  }

  return (
    <button
      onClick={handlerClick}
      onMouseEnter={handlerMouseEnter}
      onMouseLeave={handlerMouseLeave}
    >Click me! {counter}</button>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       counter: 0
//     }
//
//     // this.handlerClick = this.handlerClick.bind(this);
//   }
//
//   // handlerClick() {
//   //   this.setState({
//   //     counter: this.state.counter + 1
//   //   });
//   // }
//
//   render() {
//     return (
//       <button onClick={() => this.setState({
//         counter: this.state.counter + 1
//       })}>Click me! {this.state.counter}</button>
//     );
//   }
// }

export default App;
