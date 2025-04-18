import React from "react";
import { FaUsers, FaRobot, FaHandshake, FaChartLine, FaUserShield, FaMapMarkerAlt } from "react-icons/fa";

const steps = [
  {
    title: "Partner Onboarding",
    description: "Companies securely upload overdue accounts to our platform.",
    icon: <FaUsers className="text-blue-700 text-lg" />,
    color: "bg-green-600",
  },
  {
    title: "Smart Case",
    description: "Our system auto-assigns each case to a nearby certified agent.",
    icon: <FaRobot className="text-green-600 text-lg" />,
    color: "bg-blue-700",
  },
  {
    title: "Ethical Recovery Engagement",
    description: "Agents connect with defaulters, following ethical standards.",
    icon: <FaHandshake className="text-blue-700 text-lg" />,
    color: "bg-green-600",
  },
  {
    title: "Real-Time Progress Tracking",
    description: "Every step is logged in app for live updates and transparency.",
    icon: <FaChartLine className="text-green-600 text-lg" />,
    color: "bg-blue-700",
  },
  {
    title: "Ethical Recovery Engagement",
    description: "Agents connect with defaulters, following ethical standards.",
    icon: <FaUserShield className="text-blue-700 text-lg" />,
    color: "bg-green-600",
  },
  {
    title: "Smart Case",
    description: "Our system auto-assigns each case to a nearby certified agent.",
    icon: <FaMapMarkerAlt className="text-green-600 text-lg" />,
    color: "bg-blue-700",
  },
];

const HowItWorks = () => {
  return (
    <div className="bg-[#f4f7fa] py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        How It Works
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col gap-12 p-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row md:text-start text-center items-center ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} gap-6 md:gap-12`}
          >
            <div className="flex-1 ">
              <div className={`inline-flex items-center  hover:scale-105 transition duration-300 gap-3 px-4 py-2 rounded-full ${step.color} shadow-lg`}>
                <div className="bg-white p-2 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-white text-lg font-semibold">{step.title}</h3>
              </div>
              <p className="mt-4 text-gray-600 text-base leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="hidden md:block w-1 h-24 bg-gray-300" />

            <div className="hidden md:block flex-1">
              <div className="w-full h-full border border-dashed border-gray-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
