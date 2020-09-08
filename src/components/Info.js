import React from "react";

function Info(props) {
  return (
    <div className="info">
      <h1>{props.information.title}</h1>
      <p>{props.information.date}</p>
      <h3>{props.information.description}</h3>
    </div>
  );
}

export default Info;
