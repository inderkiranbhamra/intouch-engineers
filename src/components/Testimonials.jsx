import React from "react";
import Slider from "react-slick";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Harshit",
    review: "Got a great deal with Gowaggon. The company’s service and all the processes are very good.",
    rating: 4.5,
    image: "/Testimonial1.png",
  },
  {
    name: "Anil Shrivastav",
    review: "Gowaggon handled everything quickly, and the process was completely stress-free. Very happy with the outcome.",
    rating: 5,
    image: "/Testimonial1.png",
  },
  {
    name: "Rajendra S",
    review: "Selling my car was a headache until I found Gowaggon. Great price, and I sold it within a day.",
    rating: 4,
    image: "/Testimonial1.png",
  },
  {
    name: "Pooja Mehta",
    review: "Excellent customer service and a super smooth process. Highly recommended!",
    rating: 4.5,
    image: "/Testimonial1.png",
  },
];

const NextArrow = ({ onClick }) => (
  <div className="arrow next" onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" onClick={onClick}>
    <FaArrowLeft />
  </div>
);

const TestimonialCard = ({ name, review, rating, image }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <div className=" hover:scale-105 transition duration-300 testimonial-card p-15 m-5 shadow-lg rounded-xl text-center bg-white">
      <div className="flex justify-center -mt-12">
        <img src={image} alt={name} className="w-20 h-20 rounded-full object-cover border-4 border-white" />
      </div>
      <div className="flex justify-center my-3 text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} />
        ))}
        {halfStar && <FaStarHalfAlt />}
      </div>
      <p className="text-gray-700 italic">“{review}”</p>
      <p className="mt-4 font-bold">- {name}</p>
    </div>
  );
};

const TestimonialCarousel = () => {
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
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Client Testimonials</h2>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} {...item} />
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialCarousel;
