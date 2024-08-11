// src/TimeZoneDisplay.js
import React from "react";
import moment from "moment-timezone";
import "./TimeZoneConverter.css";

const TimeZoneDisplay = ({ timeZone, currentTime, selectedDate, onDelete }) => {
  const timeWithDate = moment(selectedDate)
    .tz(timeZone)
    .format("YYYY-MM-DD HH:mm:ss");
  return (
    <div>
      <p>
        {timeZone}: {timeWithDate}
      </p>
      <button onClick={onDelete}>Remove</button>
    </div>
  );
};

export default TimeZoneDisplay;
