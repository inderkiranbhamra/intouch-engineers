import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#1656A0] text-white py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
        
        {/* Contact */}
        <div>
          <h3 className="font-bold text-xl mb-2">Contact Us</h3>
          <p className="text-lg">+91xxxxxxxxxx</p>
          <p className="text-lg">nexgencred@gmail.com</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl mb-2">Quick Links</h3>
          <ul className="space-y-1 ">
            {["Home", "About", "Services", "Clients", "Contact"].map((link) => (
              <li key={link} className="hover:underline  text-white text-lg hover:text-green-500 cursor-pointer">
                <Link
                    to={link.toLowerCase().replace(/ /g, "-")}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className="cursor-pointer "
                    >{link}
                </Link>
                </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-bold text-xl mb-5">Follow Us</h3>
          <div className="flex justify-center sm:justify-start gap-4 text-4xl">
            <FaInstagram className="cursor-pointer hover:text-blue-600" />
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-lg  mt-6 pt-4">
        © 2025 NexGenCred. All rights reserved. | <span className="hover:underline cursor-pointer">Privacy Policy</span> | <span className="hover:underline cursor-pointer">Terms of Service</span>
      </div>
    </footer>
  );
};

export default Footer;
