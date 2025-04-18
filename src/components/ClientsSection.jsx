import React from "react";
import Marquee from "react-fast-marquee";

const clientLogos = [
  "/bank.png",
  "/bank.png",
  "/bank.png",
  "/bank.png",
  "/bank.png",
  "/bank.png",
  "/bank.png",
  "/bank.png",
  "/bank.png",
  "/bank.png",

];

const ClientsSection = () => {
  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Happy Customers</h2>

      <Marquee pauseOnHover gradient={false} speed={50}>
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Client Logo"
            className="mx-10 h-24  w-auto object-contain"
          />
        ))}
      </Marquee>

      <Marquee pauseOnHover gradient={false} speed={50} direction="right">
        {clientLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Client Logo"
            className="mx-10 h-24 w-auto object-contain"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default ClientsSection;
