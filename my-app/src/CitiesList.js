import React from "react";

export default function CitiesList(props) {
  return (
    <ul>
      {props.cities.map((city) => (
        <li key={city.id} onClick={() => props.onSelectCity(city.id)}>
          {city.name} ({city.description})
        </li>
      ))}
    </ul>
  );
}
