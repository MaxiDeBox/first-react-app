import {useMemo, useEffect} from "react";
import {createPortal} from "react-dom";

const modalRootElement = document.querySelector("#modal");

const Modal = (props) => {
  const {marker, open, onClose} = props;
  const element = useMemo(() => {
    const el = document.createElement("div");
    el.dataset.marker = marker;

    return el;
  }, [marker]);

  useEffect(() => {
    if (open) {
      modalRootElement.appendChild(element);

      return () => {
        modalRootElement.removeChild(element);
      }
    }
  });

  if(open) {
    return createPortal(
      <div onClick={onClose}>{props.children}</div>,
      element
    );
  }

  return null;


};

export default Modal;
