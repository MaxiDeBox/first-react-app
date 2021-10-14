import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Welcome(props) {
    return (
      <p>Hello {props.user.name} {props.user.surname}!</p>
    );
}

// class Welcome extends React.Component {
//    render () {
//        return <p>Hello {this.props.user.name} {this.props.user.surname}!</p>
//    }
// }

function Appnew(props) {
    const users = [
      {name: "Alexey", surname: "test1"},
      {name: "Maxim", surname: "test2"},
      {name: "Pasha", surname: "test3"},
    ];

    return (
        <div>
            <Welcome user={users[0]} />
            <Welcome user={users[1]} />
            <Welcome user={users[2]} />
        </div>
    );
}

ReactDOM.render(
  <Appnew />,
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
