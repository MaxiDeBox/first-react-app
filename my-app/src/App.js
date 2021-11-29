import "./App.css";
import Modal from "./Modal";
import {useState} from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open/Close</button>
      <Modal open={open} onClose={() => setOpen(false)} marker="modal_1">123</Modal>
    </>
  );
}
