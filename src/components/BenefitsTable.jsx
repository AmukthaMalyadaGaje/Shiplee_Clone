import React from "react";
import {
  FaHandshake,
  FaDollarSign,
  FaBullhorn,
  FaNetworkWired,
  FaClock,
  FaShippingFast,
  FaChartLine,
  FaSmile,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaHandshake,
    title: "Franchise Support",
    description:
      "Receive comprehensive support and training to help you succeed as a Shiplee franchisee.",
  },
  {
    icon: FaDollarSign,
    title: "Attractive Commission",
    description:
      "Earn competitive commissions on every booking made through your franchise.",
  },
  {
    icon: FaBullhorn,
    title: "Marketing Assistance",
    description:
      "Benefit from national and regional marketing campaigns to drive business growth.",
  },
  {
    icon: FaNetworkWired,
    title: "Extensive Network",
    description:
      "Leverage Shiplee’s vast network to offer comprehensive logistics solutions.",
  },
  {
    icon: FaClock,
    title: "24/7 Support",
    description:
      "Access round-the-clock support to resolve any issues and ensure smooth operations.",
  },
  {
    icon: FaShippingFast,
    title: "Swift Shipping",
    description:
      "Offer your customers the best first-mile and last-mile experience with quick pickup and delivery.",
  },
  {
    icon: FaChartLine,
    title: "Growth Opportunities",
    description:
      "Expand your business with Shiplee’s proven model and continuous growth opportunities.",
  },
  {
    icon: FaSmile,
    title: "Customer Satisfaction",
    description:
      "Deliver exceptional customer experiences and build long-term loyalty through reliable services.",
  },
];

const BenefitsTable = ({ darkMode }) => {
  return (
    <section className="my-8 pl-4 pr-4">
      <h2
        className={`${
          darkMode
            ? "text-white text-3xl font-bold mb-6 text-center"
            : "text-3xl font-bold mb-6 text-center"
        }`}
      >
        Why Choose Shiplee?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <benefit.icon className="text-pink-500 text-4xl mr-4" />
            <div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsTable;
