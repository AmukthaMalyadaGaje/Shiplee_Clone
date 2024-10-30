import React from "react";

const logos = [
  { src: "/path/to/logo1.png", alt: "Courier Partner 1" },
  { src: "/path/to/logo2.png", alt: "Courier Partner 2" },
  { src: "/path/to/logo3.png", alt: "Courier Partner 3" },
];

function LogosGrid() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6">Our Partners</h2>
      <div className="grid grid-cols-3 gap-4">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="transition-transform transform hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
}

export default LogosGrid;
