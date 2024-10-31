import React from "react";
import {
  FaRocket,
  FaBriefcase,
  FaPenFancy,
  FaStar,
  FaGlobe,
  FaChartLine,
  FaHandsHelping,
} from "react-icons/fa";

const HeroSection = ({ darkMode }) => {
  return (
    <section
      className={`p-8 pb-30 ${
        darkMode ? "bg-black text-white" : "bg-blue-700 text-white"
      } rounded-lg shadow`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between pb-20">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Join the Shiplee Franchise: Earn Rs.30,000 Per Month
          </h1>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaRocket className="mr-2" /> Become a part of Shiplee and
              revolutionize logistics with our AI-enabled solutions.
            </li>
            <li className="flex items-center">
              <FaBriefcase className="mr-2" /> Earn a steady income by
              partnering with a leading logistics platform.
            </li>
            <li className="flex items-center">
              <FaPenFancy className="mr-2" /> Enjoy comprehensive support and
              extensive network benefits.
            </li>
            <li className="flex items-center">
              <FaStar className="mr-2" /> Benefit from our innovative technology
              to enhance your business operations.
            </li>
            <li className="flex items-center">
              <FaGlobe className="mr-2" /> Expand your reach with our vast
              network of courier partners.
            </li>
            <li className="flex items-center">
              <FaChartLine className="mr-2" /> Gain insights and analytics to
              improve your logistics efficiency.
            </li>
            <li className="flex items-center">
              <FaHandsHelping className="mr-2" /> Join a community of
              like-minded entrepreneurs and receive ongoing training and
              support.
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 bg-white text-black p-8 rounded-lg shadow-lg mt-6 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">
            Start Your Journey with Shiplee
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Name*
              </label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="contact"
              >
                Contact No.*
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  +91
                </span>
                <input
                  className="w-full p-2 border border-gray-300 rounded-r"
                  type="text"
                  id="contact"
                  placeholder="Contact No."
                  required
                />
              </div>
            </div>
            <button className="w-full bg-blue-700 text-white p-2 rounded hover:bg-blue-800 transition duration-300">
              Join Now
            </button>
          </form>
          <p className="mt-4 text-center">
            <a className="text-blue-700 hover:underline" href="#">
              Have an Account? Login Now
            </a>
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 p-6 sm:p-10 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white text-black p-4 rounded-md text-center shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
          <div className="text-4xl mb-2">
            <FaRocket />
          </div>
          <h2 className="text-xl font-bold mb-2">Become a Franchisee</h2>
          <p>
            Join Shiplee logistics with our AI-enabled solutions. Enjoy steady
            income and comprehensive support.
          </p>
        </div>
        <div className="bg-white text-black p-4 rounded-md text-center shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
          <div className="text-4xl mb-2">
            <FaBriefcase />
          </div>
          <h2 className="text-xl font-bold mb-2">Earn Commissions</h2>
          <p>
            Earn a competitive commission on each booking. The more you book,
            the more you earn!
          </p>
        </div>
        <div className="bg-white text-black p-4 rounded-md text-center shadow-lg transform transition-transform duration-300 hover:-translate-y-1">
          <div className="text-4xl mb-2">
            <FaHandsHelping />
          </div>
          <h2 className="text-xl font-bold mb-2">Dedicated Support</h2>
          <p>
            Receive dedicated support and training to ensure your success as a
            Shiplee franchisee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
