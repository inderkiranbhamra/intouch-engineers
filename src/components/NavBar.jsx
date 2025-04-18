import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, IconButton } from "@mui/material";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <nav className="bg-[#333333] shadow-md mb-20 fixed top-0 left-0 w-full z-1000 ">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-auto w-40"
            />
          </a>
        </div>

          {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white text-xl">
          {["Home", "About", "Services", "Clients", "Contact"].map((item, index) => (
            <Link 
              key={index}
              to={item.toLowerCase().replace(/ /g, "-")}
              smooth={true}
              duration={500}
              offset={-80}  // navbar height offset
              className="cursor-pointer hover:text-green-400"
            >
              {item}
            </Link>
          ))}
          <button className="bg-[#1656a0] hover:bg-[#114683] text-xl text-white px-4 py-2 rounded-xl cursor-pointer">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </div>

        {/* Drawer for Mobile */}
        <Drawer anchor="right" open={open} onClose={toggleDrawer}>
          <div className="w-64 p-4 flex flex-col gap-6">
            <div className="flex justify-end">
              <IconButton onClick={toggleDrawer}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="flex flex-col gap-6 p-6 w-64">
            {["Home", "About", "Services", "Clients", "Contact"].map((item, index) => (
              <Link
                key={index}
                to={item.toLowerCase().replace(/ /g, "-")}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={toggleDrawer}
                className="cursor-pointer text-gray-800 hover:text-green-500"
              >
                {item}
              </Link>
            ))}
          </div>
            <button className="bg-[#1656a0] hover:bg-[#114683] text-white px-4 py-2 rounded">
              Get Started
            </button>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;