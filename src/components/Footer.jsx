import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#262626] text-white py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        
        {/* Contact */}
        <div>
          <h3 className="font-bold text-xl mb-2" style={{ color: "#f8bf18" }}>Contact Us</h3>
          <p className="text-lg">+91 9814944610</p>
          <p className="text-lg">intouchengineers@yahoo.com</p>
          <p className="text-lg mt-4">
            <span className="font-semibold" style={{ color: "#f8bf18" }}>Address:</span><br />
            B-XXX-785 Sherpur Bypass,<br />
            Grand Trunk Rd, opposite Meera & Company,<br />
            Ludhiana, Punjab 141010
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl mb-2" style={{ color: "#f8bf18" }}>Quick Links</h3>
          <ul className="space-y-1">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <li
                key={link}
                className="hover:underline text-white text-lg hover:text-[#f8bf18] cursor-pointer transition-colors"
              >
                <Link
                  to={link.toLowerCase().replace(/ /g, "-")}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-bold text-xl mb-5" style={{ color: "#f8bf18" }}>Follow Us</h3>
          <div className="flex justify-center sm:justify-start gap-4 text-3xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer hover:text-[#f8bf18] transition-colors" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="cursor-pointer hover:text-[#f8bf18] transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="cursor-pointer hover:text-[#f8bf18] transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-lg mt-6 pt-4 border-t border-[#f8bf18]/30">
        © 2025 Intouch Engineers. All rights reserved. |{" "}
        <span className="hover:underline cursor-pointer hover:text-[#f8bf18] transition-colors">Privacy Policy</span> |{" "}
        <span className="hover:underline cursor-pointer hover:text-[#f8bf18] transition-colors">Terms of Service</span>
      </div>
    </footer>
  );
};

export default Footer;
