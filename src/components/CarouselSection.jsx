import React from "react";
import Slider from "react-slick";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {  FaUsers, FaChartLine } from "react-icons/fa";
import { VscLaw } from "react-icons/vsc";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";

const services = [
  {
    title: "Debt Recovery",
    description: "Ethical and efficient solutions to recover outstanding debts.",
    icon: <HiOutlineCurrencyDollar className="text-6xl text-green-600 mb-3" />,

  },
  {
    title: "Legal Assistance",
    description: "Expert legal support for swift and compliant debt recovery.",
    icon: <VscLaw className="text-6xl text-green-600 mb-3" />,

  },
  {
    title: "Skip Tracing & Investigation",
    description: "Advanced data analysis to locate defaulters efficiently.",
    icon: <FaMagnifyingGlassDollar className="text-6xl text-green-600 mb-3" />,

  },
  {
    title: "Field Collection Services",
    description: "On-ground recovery efforts led by experienced agents.",
    icon: <FaUsers className="text-6xl text-green-600 mb-3" />,

  },
  {
    title: "Portfolio Analysis & Risk Assessment",
    description: "Data-driven insights to optimize debt recovery strategies.",
    icon: <FaChartLine className="text-6xl text-green-600 mb-3" />,

  },
];

const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    style={{
      background: "#25A352",
      borderRadius: "50%",
      position: "absolute",
      left: "-2rem",
      top: "40%",
      zIndex: 1,
    }}
  >
    <ArrowBackIosNewIcon style={{ color: "#fff" }} />
  </IconButton>
);

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    style={{
      background: "#25A352",
      borderRadius: "50%",
      position: "absolute",
      right: "-2rem",
      top: "40%",
      zIndex: 1,
    }}
  >
    <ArrowForwardIosIcon style={{ color: "#fff" }} />
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
    <div className="py-10 px-5" style={{ background: "#1656A0" }}>
      <h2 className="text-center text-white text-4xl font-bold mb-8">Our Services</h2>
      <div className="relative  px-4 sm:px-0  max-w-[1200px] mx-auto">
      <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-3">
            <div className="bg-white rounded-lg shadow-md p-6 min-h-[250px] flex flex-col justify-center items-center text-center transition duration-300 hover:scale-105">
              {service.icon}
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-md">{service.description}</p>
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselSection;
