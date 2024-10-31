import React, { useState } from "react";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`container max-w-7xl mx-auto sticky top-0 z-50 flex justify-between items-center p-6 ${
        darkMode ? "bg-black " : "bg-blue-700"
      } text-white`}
    >
      <div className="text-2xl font-bold">SHIPLEE</div>
      <ul className="hidden md:flex space-x-6">
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
        className="hidden md:block bg-white text-blue-800 px-4 py-2 rounded hover:bg-gray-200 transition duration-300"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <button
        onClick={toggleMenu}
        className="block md:hidden bg-white text-blue-800 px-4 py-2 rounded hover:bg-gray-200 transition duration-300"
      >
        Menu
      </button>
      {isOpen && (
        <ul
          className={`absolute top-16 left-0 w-full ${
            darkMode ? "bg-black " : "bg-blue-700"
          } text-white flex flex-col items-center space-y-4 py-4 md:hidden`}
        >
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
          <li>
            <button
              onClick={toggleDarkMode}
              className="bg-white text-blue-800 px-4 py-2 rounded hover:bg-gray-200 transition duration-300"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
