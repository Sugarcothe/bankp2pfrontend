import React from "react";
import "./utils/card.css";

const Card1 = (props) => {
  return (
    <div className="card">
      <p className="textNorm">{props.cardInfo}</p>
      <h1 className="balance">${props.balance}</h1>
      <button>{props.btn}</button>
    </div>
  );
};

export default Card1;
