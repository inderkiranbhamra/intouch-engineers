import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, IconButton, Button } from "@mui/material";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setShowNavbar(!(currentScrollY > lastScrollY && currentScrollY > 80));
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-[#FFFFFE] shadow-md fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ willChange: "transform", height: "72px" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between h-full">
        {/* Logo */}
        <a href="/">
          <img src="/logo2.png" alt="Logo" className="h-12 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-black text-lg">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={item.toLowerCase().replace(/ /g, "-")}
              smooth={true}
              duration={500}
              offset={-60}
              className="cursor-pointer hover:text-[#f8bf18]"
            >
              {item}
            </Link>
          ))}
          <a href="tel:+919814944610">
            <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f8bf18",
                    color: "#262626",
                    "&:hover": {
                      backgroundColor: "#262626",
                      color: "#f8bf18",
                    },
                    textTransform: "none",
                    fontSize: "14px",
                    mt: 1,
                  }}
                >
                  Get Started
                </Button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </div>

        {/* Drawer for Mobile */}
        <Drawer anchor="right" open={open} onClose={toggleDrawer}>
          <div className="w-64 pt-2 px-3">
            <div className="flex justify-end">
              <IconButton onClick={toggleDrawer}>
                <CloseIcon />
              </IconButton>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              {["Home", "About", "Services", "Contact"].map((item, index) => (
                <Link
                  key={index}
                  to={item.toLowerCase().replace(/ /g, "-")}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={toggleDrawer}
                  className="cursor-pointer text-gray-800 hover:text-[#f8bf18]"
                >
                  {item}
                </Link>
              ))}
              <a href="tel:+919814944610">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#f8bf18",
                    color: "#262626",
                    "&:hover": {
                      backgroundColor: "#262626",
                      color: "#f8bf18",
                    },
                    textTransform: "none",
                    fontSize: "14px",
                    mt: 1,
                  }}
                >
                  Get Started
                </Button>
              </a>
            </div>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
