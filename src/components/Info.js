import React from "react";
import { Link } from "react-router-dom";

function Info(props) {
  return (
    <div className="info">
      <Link to="/post">
        <h1>{props.information.title}</h1>
      </Link>
      <p>{props.information.date}</p>
      <h3>{props.information.description}</h3>
    </div>
  );
}

export default Info;
