import React from "react";

const features = [
  {
    img: "/sheet-metal-die.png",
    title: "Precision Sheet Metal & Plastic Dies",
  },
  {
    img: "/jigs-fixtures.png",
    title: "Custom Jigs & Fixtures Solutions",
  },
  {
    img: "/surface-grinding.png",
    title: "Advanced Surface Grinding & VMC Job Work",
  },
  {
    img: "/hydraulic-press.png",
    title: "Hydraulic Press & E.D.M. Wirecut Expertise",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-white mb-5">
      {/* Top Section */}
      <div className="relative">
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-left py-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span style={{ color: "#262626" }}>About </span>
            <span style={{ color: "#f8bf18" }}>Intouch Engineers</span>
          </h2>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 pt-4 pb-10 grid md:grid-cols-2 gap-8 text-[#262626] text-lg leading-7">
        <p className="text-justify">
          <span className="font-semibold" style={{ color: "#f8bf18" }}>Intouch Engineers</span> is your trusted destination for precision manufacturing and job work services. Based in Ludhiana, Punjab, we specialize in sheet metal dies, plastic molding dies, jigs, fixtures, and a wide range of job works including surface grinding, VMC, press work, and E.D.M. wirecuts. Our commitment to excellence and adoption of cutting-edge technology ensures that we deliver top-quality products and services tailored to your specific needs.
        </p>
        <p className="text-justify">
          With a team of skilled engineers and technicians, we focus on precision, reliability, and customer satisfaction. Whether you require custom dies, complex fixtures, or high-accuracy machining, Intouch Engineers is equipped to handle diverse industrial requirements with efficiency and professionalism.
        </p>
      </div>

      {/* Extended Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12 text-[#262626] text-lg leading-7">
        <p className="mb-6 text-justify">
          We blend advanced manufacturing techniques with personalized client attention to deliver solutions that drive your business forward. Our dedication to quality, timely delivery, and continuous improvement sets us apart as a preferred partner in the precision engineering sector.
        </p>
        <p className="text-justify">
          At Intouch Engineers, our mission is to empower your business with reliable engineering solutions, foster long-term partnerships, and contribute to the growth and innovation of the manufacturing industry.
        </p>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <h3 className="text-3xl font-bold mb-6" style={{ color: "#262626" }}>
          Why Choose <span style={{ color: "#f8bf18" }}>Intouch Engineers?</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#f8bf18] rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="mb-5 h-40 hover:scale-110 transition-transform duration-300 ease-in-out"
                style={{ objectFit: "contain" }}
              />
              <p className="font-medium text-lg text-center" style={{ color: "#262626" }}>
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="py-10 mx-auto text-center rounded-lg w-[90%]"
        style={{ backgroundColor: "rgba(248, 191, 24, 0.15)" }}
      >
        <h4 className="font-semibold text-2xl mb-4" style={{ color: "#262626" }}>
          Ready to elevate your manufacturing with precision engineering? <br /> Partner with <span style={{ color: "#f8bf18" }}>Intouch Engineers</span> today.
        </h4>
        <a href="tel:+919814944610">
          <button
            className="text-xl font-semibold py-2 px-6 rounded transition-all duration-300"
            style={{
              backgroundColor: "#f8bf18",
              color: "#262626",
              border: "2px solid #262626"
            }}
          >
            Contact Us Now
          </button>
        </a>
      </div>
    </section>
  );
};

export default AboutUs;