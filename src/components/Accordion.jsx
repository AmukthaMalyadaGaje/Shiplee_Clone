import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaDollarSign,
  FaHandshake,
  FaNetworkWired,
  FaClock,
  FaShippingFast,
  FaChartLine,
  FaSmile,
} from "react-icons/fa";

const benefits = [
  {
    icon: FaDollarSign,
    title: "High Profit Margins",
    description:
      "Enjoy substantial profit margins on each booking you make with our competitive pricing structure.",
  },
  {
    icon: FaHandshake,
    title: "Full Support",
    description:
      "Receive comprehensive support from our dedicated team, ensuring your business runs smoothly.",
  },
  {
    icon: FaNetworkWired,
    title: "Extensive Network",
    description:
      "Leverage our extensive courier network to offer top-notch delivery services across the country.",
  },
  {
    icon: FaClock,
    title: "Easy Setup",
    description:
      "Set up your franchise quickly with minimal hassle, thanks to our streamlined onboarding process.",
  },
  {
    icon: FaShippingFast,
    title: "Training Programs",
    description:
      "Participate in our training programs to stay updated on the latest in logistics and customer service.",
  },
  {
    icon: FaChartLine,
    title: "Customer Support",
    description:
      "Provide your customers with exceptional support, backed by our 24/7 customer service team.",
  },
];

const Accordion = ({ darkMode }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-8 px-4 ">
      <h2
        className={`${
          darkMode
            ? "text-white text-3xl font-bold mb-6 text-center"
            : "text-3xl font-bold mb-6 text-center"
        }`}
      >
        Why Partner with Shiplee?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center">
                  <benefit.icon className="text-pink-500 text-4xl mr-4" />
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>
                <div>
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </div>
              {openIndex === index && (
                <p className="mt-4">{benefit.description}</p>
              )}
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {benefits.slice(3).map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index + 3)}
              >
                <div className="flex items-center">
                  <benefit.icon className="text-pink-500 text-4xl mr-4" />
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>
                <div>
                  {openIndex === index + 3 ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </div>
              </div>
              {openIndex === index + 3 && (
                <p className="mt-4">{benefit.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
