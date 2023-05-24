import React from "react";
import "./utils/fundAccountCard.css";
import Popup from "reactjs-popup";
import FundAccountForm from "./FundAccountForm";
import SendFund from "./SendFund";

const FundAccountCard = (props) => {
  return (
    <div className="fundAccount-card">
      <p className="welcomeCard">
        {props.welcome} <span className="cardName">{props.name}</span>
      </p>
      <p className="textNorm">{props.cardInfo}</p>
      <h1 className="balance">${props.balance}</h1>
      <div className="btn-fundAccount">
        <Popup
          trigger={<button className="btnfundAccount">{props.btn}</button>}
          position="right center"
        >
          {" "}
          <FundAccountForm />
        </Popup>

        <Popup
          trigger={<button className="btnfundAccount2">{props.btn2}</button>}
          position="right center"
        >
          {" "}
          <SendFund />
        </Popup>
      </div>
    </div>
  );
};

export default FundAccountCard;
