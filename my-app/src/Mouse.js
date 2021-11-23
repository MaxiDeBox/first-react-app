import React, {useCallback, useRef, useState} from "react";

export default function Mouse(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const ref = useRef();

  const handlerOnMouseMove = useCallback(
    (e) => {
      const rect = ref.current.getBoundingClientRect();
      setX(e.clientX-rect.left);
      setY(e.clientY-rect.top);
    }, [setX, setY, ref]
  );

  return (
    <div ref={ref} onMouseMove={handlerOnMouseMove}>
      {props.render({x, y})}
    </div>
  );
}
