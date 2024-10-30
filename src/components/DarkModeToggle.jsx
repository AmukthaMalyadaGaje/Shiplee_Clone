import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="flex justify-end p-4">
      <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
        {darkMode ? (
          <FaSun className="text-yellow-500" />
        ) : (
          <FaMoon className="text-gray-700" />
        )}
      </button>
    </div>
  );
};

export default DarkModeToggle;
