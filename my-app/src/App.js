import './App.css';
import { Table, TableBody, TableCell, TableHead, TableRow } from "./Сomponents";

function App() {
  return (
    <div className="App">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>UserName</TableCell>
          </TableRow>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Maxim</TableCell>
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
        </TableHead>
      </Table>
    </div>
  );
}

export default App;
