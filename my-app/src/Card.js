import React from "react";
import Mouse from "./Mouse";

const cardStyle = {
  height: "100px",
  border: "1px solid #000000",
  margin: "5px"
};

export default function Card(props) {
  return (
    <Mouse render={({x, y}) => {
     return <div style={cardStyle}>Card {x} : {y}</div>;
    }} />
  );
}
