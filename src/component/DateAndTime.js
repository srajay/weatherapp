import React from "react";
import "./dateandtime.css";

const DateAndTime = () => {
  const today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const time = hours + ":" + minutes + "  " + ampm;

  // time = today.getHours() + ":" + today.getMinutes(),

  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  // console.log(alert(today));
  return (
    <div className="datetime">
      <div className="date">
        <p>{date}</p>
      </div>

      <div className="time">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default DateAndTime;
