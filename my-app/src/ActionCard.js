import React, {useContext} from "react";
import Context from "./Context";

export default function ActionCard(props) {
  const {number} = props;

  const handlerClick = () => {
    value.count(number)
  };

  const value = useContext(Context);

  return (
    <div className="card m-2">
      <div className="card-body">
        <p>купите наши книги:</p>
        <button onClick={handlerClick} className="btn btn-primary btn-block"
                type="button">
          Купить {number} книгу
        </button>
      </div>
    </div>
  );
}
