import {
  AccountBalanceWallet,
  AccountBox,
  AttachMoney,
  CreditCard,
  ExitToApp,
  SpaceDashboard,
  Toc,
} from "@mui/icons-material";
import "../components/utils/dashboardSidebar.css";

const DashboardSidebar = () => {
  return (
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
  );
};

export default DashboardSidebar;
