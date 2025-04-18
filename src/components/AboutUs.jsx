import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white mb-5">

      {/* Top Section with BG Image & Blue Overlay */}
      <div className="relative">
        <div
          className="bg-cover bg-center py-20 md:py-24 text-white relative"
          style={{
            backgroundImage: "url('/aboutus.jpg')", // Replace with your image
          }}
        >
          <div className="absolute inset-0 bg-[#003366]/70"></div> {/* Blue overlay */}

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:text-left text-center">
            <h2 className="text-3xl md:text-4xl font-bold">About NexGenCred</h2>
            <p className="mt-2 text-lg">
              Empowering Financial Institutions with{" "}
              Seamless Recovery Solutions
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl  mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 text-gray-500 text-lg leading-7">
        <p >
          <span className="text-[#1DA1F2]  font-semibold">NexGenCred</span> is a leading financial recovery solutions provider, dedicated to assisting banks and financial institutions in minimizing losses and optimizing their credit portfolios. Our expertise lies in implementing innovative, legally compliant strategies that ensure high recovery rates while maintaining transparency and professionalism.
        </p>

        <p>
          With a nationwide network of skilled recovery agents and a data-driven approach, we enhance efficiency in debt collection while safeguarding client relationships. Our goal is to deliver result-oriented solutions that not only recover debts but also reinforce trust and stability in financial ecosystems.
        </p>
      </div>

      {/* Extended Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12 text-gray-500 text-lg leading-7">
        <p className="mb-6">
          We blend advanced analytics with personalized client attention to build tailored recovery strategies that align with evolving market demands. Our dedication to operational excellence, ethical practices, and data-driven insights allows us to stand apart as a trusted partner in the financial recovery landscape.
        </p>

        <p>
          NexGenCred's mission is not just about recovering debts, but about creating long-term partnerships with our clients, driving sustainable growth, and fostering financial resilience across industries.
        </p>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <h3 className="text-3xl font-bold text-[#003366] mb-6">
          Why Choose NexGenCred?
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-center">
          <div className="m-5">
            <img src="/experience.png" alt="" className="mx-auto mb-5 h-24 hover:scale-110 transition-all duration-300 ease-in-out" />
            <p className="font-medium text-lg">
              Experienced Recovery Specialists
            </p>
          </div>

          <div className="m-5">
            <img src="/compliance.png" alt="" className="mx-auto mb-5 h-24 hover:scale-110 transition-all duration-300 ease-in-out" />
            <p className="font-medium text-lg">
              Ethical & Compliant Processes
            </p>
          </div>

          <div className="m-5">
            <img src="/data.png" alt="" className="mx-auto mb-5 h-24 hover:scale-110 transition-all duration-300 ease-in-out" />
            <p className="font-medium text-lg">
              Data-Driven Strategies
            </p>
          </div>

          <div className="m-5">
            <img src="/client.png" alt="" className="mx-auto mb-5 h-24 hover:scale-110 transition-all duration-300 ease-in-out" />
            <p className="font-medium text-lg">
              Client-Centric Approach
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#EAF3FC] py-10  mx-auto text-center rounded-lg w-[90%]"> 
        <h4 className="text-[#003366] font-semibold text-2xl mb-4">
          Partner with NexGenCred for seamless, efficient, <br /> and ethical debt recovery.
        </h4>
        <button className="bg-[#1DA1F2] hover:bg-[#0b82c5] text-white text-xl font-semibold py-2 px-6 rounded">
          Contact Us Now
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
