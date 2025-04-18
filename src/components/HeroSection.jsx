import React from "react";
import { Button } from "@mui/material";

const HeroSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Unlock Financial Stability with Expert <br />
            <span className="text-green-600">Debt Recovery Solutions</span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-lg">
            At NexGenCred, we specialize in ethical, efficient, and data-driven
            financial recovery solutions. With a team of seasoned recovery professionals and a commitment to compliance, we help banks and financial institutions reclaim outstanding debts while preserving valuable client relationships.
          </p>

          <Button
            variant="contained"
            sx={{
              backgroundColor: '#1656a0',
              '&:hover': { backgroundColor: '#114683' },
              marginTop: '1.5rem',
              paddingX: '1.5rem',
              paddingY: '0.75rem',
              fontSize: '1rem',
              textTransform: 'none',
            }}
          >
            Get Started Today
          </Button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="/debt.png"  // Replace with your image path
            alt="Debt Recovery"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
