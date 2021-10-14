import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       title: "Now Date",
//       date: new Date(),
//       counter: 0
//     }
//
//     setInterval(() => {
//       this.setState((state, props) => ({
//         date: new Date(),
//         counter: state.counter + 1
//       }));
//     }, 1000)
//   }
//
//   render() {
//     return (
//       <div>
//         <p>{this.state.title}</p>
//         <p>{this.state.counter}</p>
//         <p>{this.state.date.toLocaleTimeString()}</p>
//       </div>
//     );
//   }
// }

// Функциональный подход
function Clock(props) {
  const [state, setState] = useState({
    title: "Now Date",
    date: new Date(),
    counter: 0
  })

  setInterval(() => {
    setState({
      title: "Now Date",
      date: new Date(),
      counter: state.counter + 1
    })
  }, 1000)

  return (
    <div>
      <p>{state.title}</p>
      <p>{state.counter}</p>
      <p>{state.date.toLocaleTimeString()}</p>
    </div>
  );
}

ReactDOM.render(
  <Clock />,
  document.querySelector("#root")
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
