import React from "react";
import { FaArrowRight } from "react-icons/fa";
import EcomExpressLogo from "../assets/ecom-express-logo.png";
import BlueDartLogo from "../assets/blue-dart-logo.png";
import DtdcLogo from "../assets/dtdc-logo.jpg";
import DelhiveryLogo from "../assets/delhivery-logo.png";
import EkartLogo from "../assets/ekart-logo.png";
import XpressBeesLogo from "../assets/xpressbees-logo.png";
import SmartrLogo from "../assets/smartr-logo.png";
import IndiaPostLogo from "../assets/india-post-logo.png";
import ShadowfaxLogo from "../assets/shadowfax-logo.png";
import QwqerLogo from "../assets/qwqer-logo.jpeg";
import ShreeMarutiLogo from "../assets/shree-maruti-logo.png";

const logos = [
  { src: EcomExpressLogo, alt: "Ecom Express" },
  { src: BlueDartLogo, alt: "Blue Dart" },
  { src: DtdcLogo, alt: "DTDC" },
  { src: DelhiveryLogo, alt: "Delhivery" },
  { src: EkartLogo, alt: "Ekart Logistics" },
  { src: XpressBeesLogo, alt: "XpressBees" },
  { src: SmartrLogo, alt: "Smartr Logistics" },
  { src: IndiaPostLogo, alt: "India Post" },
  { src: ShadowfaxLogo, alt: "Shadowfax" },
  { src: QwqerLogo, alt: "QWQER" },
  { src: ShreeMarutiLogo, alt: "Shree Maruti" },
];

const PartnerNetwork = () => {
  return (
    <section className="courier-network my-8 text-center p-8 bg-gray-100 rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-4">From Anywhere to Everywhere</h2>
      <p className="text-lg mb-4">
        Our multi-courier network spread across 29000+ pin codes lets you say
        yes to every order, even from remote areas.
      </p>
      <a
        href="#"
        className="inline-flex items-center text-pink-500 hover:text-pink-700 transition duration-200"
      >
        Explore integrations <FaArrowRight className="ml-2" />
      </a>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img src={logo.src} alt={logo.alt} className="h-12 mx-auto" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerNetwork;
