// src/ScheduleMeetButton.js
import React from "react";

const ScheduleMeetButton = ({ time }) => {
  const handleSchedule = () => {
    const url = new URL("https://calendar.google.com/calendar/render");
    url.searchParams.set("action", "TEMPLATE");
    url.searchParams.set("text", "Meeting");
    url.searchParams.set(
      "dates",
      `${time.format("YYYYMMDDTHHmmss")}Z/${time
        .add(2, "hours")
        .format("YYYYMMDDTHHmmss")}Z`
    );
    window.open(url.toString(), "_blank");
  };

  return <button onClick={handleSchedule}>Schedule Meet</button>;
};

export default ScheduleMeetButton;
