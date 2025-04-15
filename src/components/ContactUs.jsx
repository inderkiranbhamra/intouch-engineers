import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left Side - Contact Info */}
        <div>
          <p className="text-4xl font-bold mb-4" style={{ color: "#262626" }}>
            Contact <span style={{ color: "#f8bf18" }}>Us</span>
          </p>
          <p className="text-xl mb-8" style={{ color: "#262626" }}>
            Feel free to reach out to us for any queries, suggestions or support.
          </p>

          <div className="flex items-center gap-4 text-xl mb-4">
            <FaPhoneAlt style={{ color: "#f8bf18" }} />
            <p style={{ color: "#262626" }}>+91 9814944610</p>
          </div>

          <div className="flex items-center gap-4 text-xl mb-4">
            <FaEnvelope style={{ color: "#f8bf18" }} />
            <p style={{ color: "#262626" }}>intouchengineers@yahoo.com</p>
          </div>

          <div className="flex items-center text-xl gap-4">
            <FaMapMarkerAlt style={{ color: "#f8bf18" }} />
            <p style={{ color: "#262626" }}>
              B-XXX-785 Sherpur Bypass, Grand Trunk Rd, opposite Meera & Company, Ludhiana, Punjab 141010
            </p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 border border-[#f8bf18] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-1/2 border border-[#f8bf18] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-[#f8bf18] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-[#f8bf18] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-[#f8bf18] p-2 rounded h-32 focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
          ></textarea>

          <button
            type="submit"
            className="bg-[#f8bf18] cursor-pointer text-[#262626] px-6 py-2 rounded font-semibold hover:bg-[#262626] hover:text-[#f8bf18] border-2 border-[#f8bf18] duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
