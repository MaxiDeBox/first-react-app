import React, {useState} from 'react';

export default function Button(props) {
  const [counter, setCounter] = useState(0);

  if (counter === 3) {
    props.onThirdClick();
  }

  const hadlerClick = (event) => {
    setCounter(counter + 1);

    if(props.onClick) {
      props.onClick(event);
    }
  }

  return <button {...props} onClick={hadlerClick}>{props.children}</button>
}
