import './App.css';
import {Table, TableBody, TableCell, TableHead, TableRow} from "./Components";
import {useEffect, useRef} from "react";


function App() {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return (
    <div className="App">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell ref={ref}>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell onClick={() => console.log("Maxim")}>Maxim</TableCell>
            <TableCell>Pak</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell>Dmitry</TableCell>
            <TableCell>Ivanov</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell>Sergey</TableCell>
            <TableCell>Balalaev</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default App;
