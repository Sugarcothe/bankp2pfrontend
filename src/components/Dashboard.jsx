import {
  AccountBalanceWallet,
  AccountBox,
  AttachMoney,
  CreditCard,
  ExitToApp,
  SpaceDashboard,
  Toc,
} from "@mui/icons-material";
import "./utils/dashboard.css";
import Card1 from "./Card1";

function Dashboard() {
  return (
    <div className="container">
      <div className="sidebar">
        <ul className="sideList">
          <AccountBalanceWallet
            sx={{
              fontSize: "2rem",
              backgroundColor: "white",
              color: "#080d39",
              padding: "1rem",
              borderRadius: "50%",
              margin: "2rem 0",
            }}
          />
          <li>
            {" "}
            <SpaceDashboard /> Dashboard
          </li>
          <li>
            {" "}
            <AttachMoney /> Fund
          </li>
          <li>
            {" "}
            <CreditCard /> Card
          </li>
          <li>
            <Toc /> History
          </li>
          <li>
            <AccountBox /> Profile
          </li>
          <li>
            <ExitToApp /> Logout
          </li>
        </ul>
      </div>
      <div className="dashboard">
        <div>
          <Card1 balance="557.09" cardInfo="Total Balance" btn="Fund Wallet" />
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
