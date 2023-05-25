import { Link } from "react-router-dom";
import "../components/utils/style.css";
import {
  AccountBalanceWallet,
  Check,
  Clear,
  Password,
  Warning,
} from "@mui/icons-material";
import { useEffect, useRef, useState, useContext } from "react";
import axios from "../api/axios.js";
import AuthContext from "../context/AuthProvider";

const REGISTER_URL = "/register";

const NAME_REGEX = /^[a-zA-Z]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{7,24}$/;
const PIN_REGEX = /^\d{4}$/;
const WALLETID_REGEX = /^(?=.*[a-z]).{3,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONENUMBER_REGEX = /^\d{11}$/;
// /^0x[a-fA-F0-9]{40}$/g

const Register = (props) => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pin, setPin] = useState("");
  const [password, setPassword] = useState("");
  const [walletId, setWalletId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPin, setValidPin] = useState(false);
  const [validPhoneNumber, setValidPhoneNumber] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validMatch, setValidMatch] = useState(false);
  const [validWalletId, setValidWalletId] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = NAME_REGEX.test(name);
    console.log(result);
    console.log(name);
    setValidName(result);
  }, [name]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = WALLETID_REGEX.test(walletId);
    console.log(result);
    console.log(walletId);
    setValidWalletId(result);
  }, [walletId]);

  useEffect(() => {
    const result = PIN_REGEX.test(pin);
    console.log(result);
    console.log(pin);
    setValidPin(result);
  }, [pin]);

  useEffect(() => {
    const result = PHONENUMBER_REGEX.test(phoneNumber);
    console.log(result);
    console.log(phoneNumber);
    setValidPhoneNumber(result);
  }, [phoneNumber]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrMsg("");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if disables button is enabled by JS hacker
    // const v1 = NAME_REGEX.test(name);
    // const v2 = NAME_REGEX.test(password);
    // if (!v1 || !v2) {
    //   setErrMsg("INVALID ENTRY");
    //   return;
    // }

    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ walletId, pin, name, email, phoneNumber, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      const accessToken = response?.data?.token;
      setAuth({
        walletId,
        pin,
        name,
        email,
        password,
        phoneNumber,
        accessToken,
      });
      console.log(phoneNumber);
      setName("");
      setPin("");
      setWalletId("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setSuccess(true);
    } catch (err) {
      setErrMsg(err);
      if (!err?.response) {
        setErrMsg("Wrong Details, already exist");
      } else if (err.response?.status === 409) {
        setErrMsg("unauthorized, already exist");
      } else if (err.response?.status === 401) {
        setErrMsg("unauthorized, already exist!");
      } else {
        setErrMsg("Registration Failed");
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
          <h1 className="welcome-text">Welcome to Your Wallette</h1>
          <br />
          <p className="welcome-paragraph">
            <Link to="/Dashboard" className="form-button">
              <a href="#">Click Here</a>
            </Link>{" "}
            To start Walletting...
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
              <h1>REGISTER</h1>
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
              {/* NAME */}
              <label>
                Name:
                <span className={validName ? "valid" : "hide"}>
                  <Check sx={{ color: "green" }} />
                </span>
                <span className={validName || !name ? "hide" : "invalid"}>
                  <Clear sx={{ color: "red" }} />
                </span>
                <input
                  type="text"
                  id="name"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  aria-invalid={validName ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  required
                />
                <p
                  id="uidnote"
                  className={
                    userFocus && name && !validName
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <Warning sx={{ color: "red", fontSize: "15px" }} />
                  4 to 24 characters <br />
                  Must begin with a letter <br />
                  Letters, underscores, hyphen allowed
                </p>
              </label>
              {/* PASSWORD */}
              <label>
                Password:
                <span className={validPassword ? "valid" : "hide"}>
                  <Check sx={{ color: "green" }} />
                </span>
                <span
                  className={validPassword || !password ? "hide" : "invalid"}
                >
                  <Clear sx={{ color: "red" }} />
                </span>
                <input
                  type="text"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  aria-invalid={validPassword ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  required
                />
                <p
                  id="pwdnote"
                  className={
                    userFocus && password && !validPassword
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <Warning sx={{ color: "red", fontSize: "15px" }} />
                  8 to 24 characters <br />
                  Must include uppercase and lowercase letters and numbers
                </p>
              </label>
              {/* CONFIRM PASSWORD */}
              <label>
                Confirm Password:
                <span
                  className={validMatch && matchPassword ? "valid" : "hide"}
                >
                  <Check sx={{ color: "green" }} />
                </span>
                <span
                  className={
                    validMatch || !matchPassword || !password
                      ? "hide"
                      : "invalid"
                  }
                >
                  <Clear sx={{ color: "red" }} />
                </span>
                <input
                  type="text"
                  id="confirm_password"
                  onChange={(e) => {
                    setMatchPassword(e.target.value);
                  }}
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  required
                />
                <p
                  id="pwdnote"
                  className={
                    userFocus && !validMatch ? "instructions" : "offscreen"
                  }
                >
                  <Warning sx={{ color: "red", fontSize: "15px" }} />
                  Must match he first password input field
                  <span aria-label="exclamation mark">!</span>
                  <span aria-label="at symbol">@</span>{" "}
                  <span aria-label="hashtag">#</span>
                  <span aria-label="dollar sign">$</span>
                  <span aria-label="percent">%</span>
                </p>
              </label>
              {/* WALLETID */}
              <label>
                Create Your Wallette ID:
                <span className={validWalletId ? "valid" : "hide"}>
                  <Check sx={{ color: "green" }} />
                </span>
                <span
                  className={validWalletId || !walletId ? "hide" : "invalid"}
                >
                  <Clear sx={{ color: "red" }} />
                </span>
                <input
                  type="text"
                  id="walletId"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => {
                    setWalletId(e.target.value);
                  }}
                  aria-invalid={validWalletId ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  required
                />
                <p
                  id="uidnote"
                  className={
                    userFocus && walletId && !validWalletId
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <Warning sx={{ color: "red", fontSize: "15px" }} />
                  4 to 24 characters <br />
                  Must contain Numbers and Letters <br />
                  Example: wallette12 or wallette or 12wallette
                </p>
              </label>
              {/* PIN */}
              <label>
                Create Your PIN:
                <span className={validPin ? "valid" : "hide"}>
                  <Check sx={{ color: "green" }} />
                </span>
                <span className={validPin || !pin ? "hide" : "invalid"}>
                  <Clear sx={{ color: "red" }} />
                </span>
                <input
                  type="number"
                  id="pin"
                  onChange={(e) => {
                    setPin(e.target.value);
                  }}
                  aria-invalid={validPin ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  required
                />
                <p
                  id="uidnote"
                  className={
                    userFocus && pin && !validPin ? "instructions" : "offscreen"
                  }
                >
                  <Warning sx={{ color: "red", fontSize: "15px" }} />
                  4 Digit <br />
                  Must be for digit, no letter or characters
                  <br />
                  Example: 1234, 1212, 1011, 2023
                </p>
              </label>

              {/* PHONE NUMBER */}
              <label>
                Phone Number:
                <span className={validPhoneNumber ? "valid" : "hide"}>
                  <Check sx={{ color: "green" }} />
                </span>
                <span
                  className={
                    validPhoneNumber || !phoneNumber ? "hide" : "invalid"
                  }
                >
                  <Clear sx={{ color: "red" }} />
                </span>
                <input
                  type="number"
                  id="phoneNumber"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  aria-invalid={validPhoneNumber ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  required
                />
                <p
                  id="uidnote"
                  className={
                    userFocus && phoneNumber && !validPhoneNumber
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <Warning sx={{ color: "red", fontSize: "15px" }} />
                  Write your number in the Local format
                </p>
              </label>

              {/* EMAIL */}
              <label>
                Email:
                <span className={validEmail ? "valid" : "hide"}>
                  <Check sx={{ color: "green" }} />
                </span>
                <span className={validEmail || !email ? "hide" : "invalid"}>
                  <Clear sx={{ color: "red" }} />
                </span>
                <input
                  type="email"
                  id="email"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  aria-invalid={validEmail ? "false" : "true"}
                  aria-describedby="uidnote"
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                  required
                />
                <p
                  id="uidnote"
                  className={
                    userFocus && email && !validEmail
                      ? "instructions"
                      : "offscreen"
                  }
                >
                  <Warning sx={{ color: "red", fontSize: "15px" }} />
                  Must be an email Example: wallette@wallette.com
                </p>
              </label>

              {/* <Link to="/Dashboard" className="form-button"> */}
              <button className="button-form">REGISTER</button>
              {/* </Link> */}
              <p className="button-text-link">
                Do you have an account?{" "}
                <Link to="/" className="button">
                  <span className="othertext">Login</span>
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
