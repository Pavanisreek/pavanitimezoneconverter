// src/DatePicker.js
import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// eslint-disable-next-line
const selectedDate = new Date("2024-08-11"); // Valid date format

const DatePicker = ({ selectedDate, onDateChange }) => {
  return (
    <ReactDatePicker
      selected={selectedDate}
      onChange={onDateChange}
      dateFormat="yyyy/MM/dd"
      className="date-picker"
    />
  );
};

export default DatePicker;
