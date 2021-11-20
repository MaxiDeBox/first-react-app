import React from "react";

export default function City(props) {
  const city = props.city;

  return (
    <div>
      <h1>
        {city.name}
      </h1>
      <textarea
        value={city.description}
        onChange={
          (e) => props.onChangeCity(props.currentIndex, e.target.value)
        }
      />
      <hr />
      <br />
    </div>
  );
}
