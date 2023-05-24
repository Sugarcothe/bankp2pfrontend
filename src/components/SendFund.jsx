import React from "react";
import "./utils/fundAccountForm.css";

const SendFund = () => {
  return (
    <form className="container-fundaccountform">
      <label>
        Receivers WalletID:
        <input type="text" value={name} />
      </label>
      <label>
        Pin:
        <input type="ext" value={name} />
      </label>
      <label>
        Amount:
        <input type="ext" value={name} />
      </label>
      <button className="bn-fundAccountform">Fund</button>
    </form>
  );
};

export default SendFund;
