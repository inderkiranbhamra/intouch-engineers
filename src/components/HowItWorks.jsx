import React from "react";
import { FaUsers, FaCogs, FaLayerGroup, FaDraftingCompass, FaIndustry, FaTools } from "react-icons/fa";

const steps = [
  {
    title: "Consultation & Requirement Gathering",
    description: "We begin by understanding your specific engineering needs and project requirements through detailed consultation.",
    icon: <FaUsers className="text-[#f8bf18] text-xl" />,
    color: "bg-[#262626] border border-[#f8bf18]",
    titleColor: "#f8bf18",
  },
  {
    title: "Design & Planning",
    description: "Our expert team designs precision dies, jigs, fixtures, and job work plans tailored to your specifications.",
    icon: <FaDraftingCompass className="text-[#262626] text-xl" />,
    color: "bg-[#f8bf18]",
    titleColor: "#262626",
  },
  {
    title: "Precision Manufacturing",
    description: "We manufacture sheet metal dies, plastic molding dies, and custom components using advanced technology and strict quality controls.",
    icon: <FaCogs className="text-[#f8bf18] text-xl" />,
    color: "bg-[#262626] border border-[#f8bf18]",
    titleColor: "#f8bf18",
  },
  {
    title: "Machining & Job Work",
    description: "Our skilled technicians perform surface grinding, VMC machining, press work, and E.D.M. wirecut operations for flawless results.",
    icon: <FaIndustry className="text-[#262626] text-xl" />,
    color: "bg-[#f8bf18]",
    titleColor: "#262626",
  },
  {
    title: "Quality Assurance",
    description: "Every product undergoes rigorous inspection to ensure it meets the highest standards of accuracy and durability.",
    icon: <FaLayerGroup className="text-[#f8bf18] text-xl" />,
    color: "bg-[#262626] border border-[#f8bf18]",
    titleColor: "#f8bf18",
  },
  {
    title: "Delivery & Support",
    description: "We deliver your finished components on time and provide ongoing support for your continued satisfaction.",
    icon: <FaTools className="text-[#262626] text-xl" />,
    color: "bg-[#f8bf18]",
    titleColor: "#262626",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: "#262626" }}>
        How It Works
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-12 p-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row md:text-start text-center items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} gap-6 md:gap-12`}
          >
            <div className="flex-1">
              <div
                className={`inline-flex items-center hover:scale-105 transition duration-300 gap-3 px-4 py-2 rounded-full shadow-lg ${step.color}`}
              >
                <div className="bg-white p-2 rounded-full">
                  {step.icon}
                </div>
                <h3
                  className="text-lg font-semibold"
                  style={{
                    color: step.titleColor,
                  }}
                >
                  {step.title}
                </h3>
              </div>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "#262626" }}>
                {step.description}
              </p>
            </div>

            <div className="hidden md:block w-1 h-24" style={{ background: "#f8bf18", opacity: 0.3 }} />

            <div className="hidden md:block flex-1">
              <div className="w-full h-full border border-dashed" style={{ borderColor: "#f8bf18", opacity: 0.3 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
