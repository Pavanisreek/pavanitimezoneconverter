// src/TimeSlider.js
import React, { useState } from "react";
import ReactSlider from "react-slider";
import moment from "moment-timezone";
import "./TimeSlider.css";

const TimeSlider = ({ onTimeChange }) => {
  const [value, setValue] = useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
    const utcTime = moment().startOf("day").add(newValue, "minutes").utc();
    onTimeChange(utcTime);
  };

  return (
    <div>
      <ReactSlider
        min={0}
        max={24 * 60}
        value={value}
        onChange={handleChange}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
      <p>
        Time: {moment().startOf("day").add(value, "minutes").format("HH:mm")}
      </p>
    </div>
  );
};

export default TimeSlider;
