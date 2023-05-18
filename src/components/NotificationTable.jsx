import { AccountBalance } from "@mui/icons-material";
import "./utils/NotificationTable.css";
import React from "react";

const NotificationTable = (props) => {
  return (
    <>
      <div className="notification-container">
        <AccountBalance sx={{ color: "#080d39" }} />

        <div className="message">
          {props.message}
        </div>
        <div className={props.status}></div>
      </div>
      <div className="notification-line"></div>
    </>
  );
};

export default NotificationTable;
