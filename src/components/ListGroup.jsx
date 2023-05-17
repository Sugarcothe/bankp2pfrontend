import React from "react";
import "./dashboard.css";

const ListGroup = (props) => {
  return (
    <>
      <ul className="sideList">
        <li>
          <{props.icon}/> {props.text}
        </li>
      </ul>
    </>
  );
};

export default ListGroup;
