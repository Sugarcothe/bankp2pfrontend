import "../components/utils/creditCard.css";
import image1 from "../assets/chip1-removebg-preview.png";
import image2 from "../assets/mastercard.png";
import worldbg from "./utils/img/world2.png";
import { AccountBalanceWallet } from "@mui/icons-material";

const Creditcard = () => {
  return (
    <div className="creditCard">
      <div className="card2 card__part">
        <div className="credit-card-bg-world">
          <div className="card-logos ">
            <img className="image-1" src={image1} alt="chip" />
            <img className="image-2" src={image2} alt="logo" />
          </div>
          <div className="company-logo">
            <AccountBalanceWallet
              sx={{
                fontSize: "0.7rem",
                backgroundColor: "white",
                color: "#080d39",
                padding: "0.7rem",
                borderRadius: "50%",
              }}
            />
            <h3 className="logo">Wallette</h3>
          </div>
          <div className="card-number">4945 6309 9891 4364 </div>
          <div className="card-info">
            <div className="card-holder">
              <p className="card-holder-theme">Card Holer</p>
              <p className="value">Valentine</p>
            </div>
            <div className="expiration">
              <p className="card-holder-theme">Expires</p>
              <p className="value">10/25</p>
            </div>
          </div>
        </div>
      </div>

      {/* CARD BACK */}
      <div className="card-back">
        <div className="logo-back">
          <AccountBalanceWallet
            sx={{
              fontSize: "1.2rem",
              backgroundColor: "white",
              color: "#080d39",
              padding: "0.7rem",
              borderRadius: "50%",
            }}
          />
          <h3 className="logo-back-text">Wallette</h3>
        </div>
        <div className="black-line"></div>
        <div className="pin">
          <div className="white-line"></div>
          <div>123</div>
        </div>
      </div>
    </div>
  );
};

export default Creditcard;
