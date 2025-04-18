import React from "react";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { FaCogs, FaDraftingCompass, FaLayerGroup, FaIndustry, FaTools } from "react-icons/fa";

const services = [
  {
    title: "Sheet Metal Dies",
    description: "Precision-engineered sheet metal dies for high-performance manufacturing.",
    icon: <FaCogs className="text-6xl mb-3" style={{ color: "#f8bf18" }} />,
  },
  {
    title: "Plastic Molding Dies",
    description: "Custom plastic molding dies crafted to your exact specifications.",
    icon: <FaLayerGroup className="text-6xl mb-3" style={{ color: "#f8bf18" }} />,
  },
  {
    title: "Jigs & Fixtures",
    description: "Tailored jigs and fixtures for enhanced accuracy and productivity.",
    icon: <FaDraftingCompass className="text-6xl mb-3" style={{ color: "#f8bf18" }} />,
  },
  {
    title: "Surface Grinding & VMC Job Work",
    description: "Advanced surface grinding and VMC machining for flawless finishes.",
    icon: <FaIndustry className="text-6xl mb-3" style={{ color: "#f8bf18" }} />,
  },
  {
    title: "Hydraulic Press & E.D.M. Wirecut",
    description: "Comprehensive hydraulic press work and E.D.M. wirecut solutions.",
    icon: <FaTools className="text-6xl mb-3" style={{ color: "#f8bf18" }} />,
  },
];

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    style={{
      background: "#f8bf18",
      borderRadius: "50%",
      position: "absolute",
      left: "-2rem",
      top: "40%",
      zIndex: 1,
    }}
  >
    <ArrowBackIosNewIcon style={{ color: "#262626" }} />
  </IconButton>
);

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    style={{
      background: "#f8bf18",
      borderRadius: "50%",
      position: "absolute",
      right: "-2rem",
      top: "40%",
      zIndex: 1,
    }}
  >
    <ArrowForwardIosIcon style={{ color: "#262626" }} />
  </IconButton>
);

const CarouselSection = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 px-5" style={{ background: "#262626" }}>
      <h2 className="text-center text-4xl font-bold mb-8" style={{ color: "#fff" }}>
        Our Services
      </h2>
      <div className="relative px-4 sm:px-0 max-w-[1200px] mx-auto">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-3">
              <div
                className="rounded-xl shadow-lg p-6 min-h-[250px] flex flex-col justify-center items-center text-center transition duration-300 hover:scale-105"
                style={{
                  background: "#fff",
                  border: "2px solid #f8bf18",
                }}
              >
                {service.icon}
                <h3 className="text-2xl font-semibold mb-2" style={{ color: "#262626" }}>
                  {service.title}
                </h3>
                <p className="text-[#262626] text-md">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselSection;
