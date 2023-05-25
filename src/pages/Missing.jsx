import { AccountBalanceWallet } from "@mui/icons-material";
import React from "react";

const Missing = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        alignSelf: "center",
        marginTop: "4rem",
      }}
    >
      <AccountBalanceWallet
        sx={{
          fontSize: "2rem",
          backgroundColor: "white",
          color: "#080d39",
          padding: "1rem",
          borderRadius: "50%",
          border: "0.7px solid #080d39",
        }}
      />
      <h3>Feature coming soon...</h3>
      <p style={{ display: "flex" }}>
        <a>CLICK HERE</a> {/* */} To go home
      </p>
    </div>
  );
};

export default Missing;
