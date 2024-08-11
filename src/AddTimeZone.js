// src/AddTimeZone.js
import React, { useState } from "react";
import "./TimeZoneConverter.css";

const AddTimeZone = ({ onAdd }) => {
  const [newTimeZone, setNewTimeZone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTimeZone) {
      onAdd(newTimeZone);
      setNewTimeZone("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTimeZone}
        onChange={(e) => setNewTimeZone(e.target.value)}
        placeholder="Enter Time Zone"
      />
      <button type="submit">Add Time Zone</button>
    </form>
  );
};

export default AddTimeZone;
