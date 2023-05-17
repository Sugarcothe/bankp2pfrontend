import { Link } from "react-router-dom";
import "./style.css";
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
          <h1>Signup</h1>
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
          {/* <Link to={props.linktext} className="button"> */}
            <button>REGISTER</button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};

export default Register;
