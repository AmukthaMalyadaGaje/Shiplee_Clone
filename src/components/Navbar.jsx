import React from "react";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="container max-w-7xl mx-auto sticky top-0 z-50 flex justify-between items-center p-6 bg-blue-700  text-white">
      <div className="text-2xl font-bold">SHIPLEE</div>
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="hover:text-yellow-500">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-500">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-500">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-500">
            SignUp
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-500">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-yellow-500">
            Contact
          </a>
        </li>
      </ul>
      <button
        onClick={toggleDarkMode}
        className="bg-white text-blue-800 px-4 py-2 rounded hover:bg-gray-200 transition duration-300"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
