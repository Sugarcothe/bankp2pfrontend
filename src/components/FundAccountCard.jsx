import React from "react";
import "./utils/fundAccountCard.css";

const FundAccountCard = (props) => {
  return (
    <div className="fundAccount-card">
      <p className="textNorm">{props.cardInfo}</p>
      <h1 className="balance">${props.balance}</h1>
      <button className="btnfundAccount">{props.btn}</button>
    </div>
  );
};

export default FundAccountCard;
