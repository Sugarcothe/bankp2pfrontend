import { Link } from "react-router-dom";
import "./utils/style.css";
import { AccountBalanceWallet } from "@mui/icons-material";

const Register = (props) => {
  return (
    <div className="container">
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
          <h1>LOGIN</h1>
        </div>

        <form>
          <label>
            walletId:
            <input type="text" />
          </label>
          <label>
            Password:
            <input type="text" />
          </label>
          <Link to="/Dashboard" className="button">
            <button>LOGIN</button>
          </Link>
          <p>
            Create a new wallet ?{" "}
            <Link to="/" className="button">
              <span className="othertext">Register</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
