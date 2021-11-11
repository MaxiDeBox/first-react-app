import React, {useState} from "react";

export default function RecursiveButton(props) {
  const [showMode, setShowMode] = useState(false);

  return (
    <>
      <button onClick={() => setShowMode(!showMode) }>
        Покажи/Скрой следующий шаг
      </button>
      { showMode ? <RecursiveButton /> : null }
    </>
  );
}
