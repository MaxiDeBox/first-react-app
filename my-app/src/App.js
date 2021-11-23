import './App.css';
import Mouse from "./Mouse";
import Card from "./Card";

// function App() {
//   return (
//     <>
//       <Mouse render={(data) => {
//         return <p>{data.x} : {data.y}</p>
//       }} />
//     </>
//   );
// }

function App() {
  return (
    <>
      <Card />
      <Card />
      <Card />
    </>
  );
};

export default App;
