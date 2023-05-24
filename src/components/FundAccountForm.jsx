import React from "react";
import "./utils/fundAccountForm.css";

const FundAccountForm = () => {
  return (
    <form className="container-fundaccountform">
      <label>
        Amount:
        <input type="ext" value={name} />
      </label>
      <button className="bn-fundAccountform">Fund</button>
    </form>
  );
};

export default FundAccountForm;
