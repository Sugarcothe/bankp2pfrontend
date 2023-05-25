import "../components/utils/style.css";
import { AccountBalanceWallet } from "@mui/icons-material";
import { useEffect, useRef, useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import axios from "../api/axios.js";
import { Link } from "react-router-dom";

const LOGIN_URL = "/login";

const Register = (props) => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [walletId, setWalletId] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ walletId, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      const accessToken = response?.data?.token;
      setAuth({ walletId, password, accessToken });
      setWalletId("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("Wrong details, Check walletID or Password");
      } else if (err.response?.status === 400) {
        setErrMsg("Wrong details, Check walletID or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Wrong details, Check walletID or Password");
      } else {
        setErrMsg("Server Failure");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <div className="welcomePage">
          <AccountBalanceWallet
            sx={{
              fontSize: "2rem",
              backgroundColor: "white",
              color: "#080d39",
              padding: "1rem",
              borderRadius: "50%",
            }}
          />
          <h1 className="welcome-text">Welcome Back to Your Wallette</h1>
          <br />
          <p className="welcome-paragraph">
            <Link to="/Dashboard" className="form-button">
              <a href="#">Click Here</a>
            </Link>{" "}
            To continue Walletting...
          </p>
        </div>
      ) : (
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
                purposes outside of learning. Sign up or Login to test this
                platform with me.
              </p>
            </div>
          </div>
          <div className="formPage">
            <div className="themeForm">
              <h1>LOGIN</h1>
              {/* Render error message */}
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <label htmlFor="walletId">
                walletId:
                <input
                  type="text"
                  id="walletId"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => {
                    setWalletId(e.target.value);
                  }}
                  value={walletId}
                  required
                  placeholder="WalletId"
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  required
                  placeholder="Password"
                />
              </label>
              {/* <Link to="/Dashboard" className="form-button"> */}
              <button className="button-form">Login</button>
              {/* </Link> */}
              <p className="button-text-link">
                Create a new wallet ?{" "}
                <Link to="/">
                  <span className="othertext">Register</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
