import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import BenefitsTable from "./components/BenefitsTable";
import PartnerNetwork from "./components/PartnerNetwork";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./index.css";
import Accordion from "./components/Accordion";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div
        className={`${
          darkMode
            ? "bg-black container  max-w-7xl mx-auto"
            : "container max-w-7xl mx-auto"
        }`}
      >
        <HeroSection darkMode={darkMode} />
        <Accordion darkMode={darkMode} />
        <BenefitsTable darkMode={darkMode} />
        <PartnerNetwork />
      </div>
      {showScrollToTop && <ScrollToTopButton />}
    </div>
  );
};

export default App;
