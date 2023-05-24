import { AccountBalance } from "@mui/icons-material";
import "./utils/NotificationTable.css";
import React from "react";

const NotificationTable = (props) => {
  return (
    <>
      <div className="notification-container">
        <AccountBalance sx={{ color: "#080d39" }} />
        <div className="message">
          {props.message}, |<span className="notificationTime">{props.time}</span>
        </div>
      </div>
    </>
  );
};

export default NotificationTable;
