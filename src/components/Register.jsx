import { Component } from "react";
import { Link } from "react-router-dom";
import "./utils/style.css";
import { AccountBalanceWallet } from "@mui/icons-material";

const Register = (props) => {
  return (
    <div className="register-container">
      <div className="heroPage">
        <div className="hero">
          <AccountBalanceWallet
            sx={{
              fontSize: "2rem",
              backgroundColor: "white",
              color: "#080d39",
              padding: "1rem",
              borderRadius: "50%",
            }}
          />

          <h1 className="themeName">Wallette</h1>
          <p className="desc">
            This is Peer 2 Peer/wallet platform like zelle.It is a personal
            project for learning and should not be replicated for any other
            purposes outside of learning. Sign up or Login to test this platform
            with me.
          </p>
        </div>
      </div>
      <div className="formPage">
        <div className="themeForm">
          <h1>REGISTER</h1>
        </div>

        <form>
          <label>
            Name:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="text" />
          </label>
          <label>
            Create Password:
            <input type="text" />
          </label>
          <label>
            pin:
            <input type="Number" />
          </label>
          <label>
            walletId:
            <input type="text" />
          </label>
          <Link to="/Dashboard" className="form-button">
            <p className="button-text">REGISTER</p>
          </Link>
          <p>
            Do you have an account?{" "}
            <Link to="/Login" className="button">
              <span className="othertext">Login</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
