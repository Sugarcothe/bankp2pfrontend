import {
  AccountBalanceWallet,
  AccountBox,
  AttachMoney,
  CreditCard,
  ExitToApp,
  SpaceDashboard,
  Toc,
} from "@mui/icons-material";
import "../components/utils/dashboard.css";
import FundAccountCard from "../components/FundAccountCard";
import Creditcard from "../components/CreditCard";
import NotificationTable from "../components/NotificationTable";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <ul className="dashboard-sideList">
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
      <div className="main-dashboard">
        <div className="dashboard-cards">
          <FundAccountCard
            balance="557.09"
            cardInfo="Total Balance"
            btn="Fund Wallet"
          />
          <Creditcard />
        </div>
        <div className="info-table">
          <NotificationTable
            message="You transfered $500.00 to tito895, and your avaialable balance is
          $6635"
            status="status-error"
          />
          <NotificationTable
            message="You transfered $500.00 to tito895, and your avaialable balance is
          $6635"
            status="status-success"
          />
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
