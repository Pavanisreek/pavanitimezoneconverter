// src/DarkModeToggle.js
import React from "react";

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button onClick={onToggle} className="dark-mode-toggle">
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
