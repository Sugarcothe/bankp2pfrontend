import "../components/utils/dashboard.css";
import FundAccountCard from "../components/FundAccountCard";
import Creditcard from "../components/CreditCard";
import NotificationTable from "../components/NotificationTable";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import DashboardSidebar from "../components/DashboardSidebar";

const baseUrl = "http://localhost:8000/api/";

function Dashboard() {
  const [notification, setNotification] = useState([]);

  // NOTIFICATION
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`${baseUrl}transactions/pop123`)
        .then((res) => setNotification(res.data.data))
        .catch((err) => console.log(err));
    };

    fetchData(); // Initial fetch

    const interval = setInterval(() => {
      fetchData(); // Fetch data every second
    }, 1000);

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, []);

  return (
    <div className="dashboard-container">
      <DashboardSidebar />
      <div className="main-dashboard">
        <div className="dashboard-cards">
          <FundAccountCard
            welcome="Good Day"
            name="Valentine"
            balance="557.09"
            cardInfo="Total Balance"
            btn="Fund Wallet"
            btn2="Transfer"
          />
          <Creditcard />
        </div>

        <div className="info-table">
          {notification.map((d, i) => (
            <NotificationTable key={i} message={d.message} time={d.createdAt} />
          ))}
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
