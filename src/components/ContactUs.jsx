import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left Side - Contact Info */}
        <div>
          <p className="text-4xl font-bold text-[#1656A0] text-3xl mb-4">Contact Us</p>
          <p className="text-[#555] text-2xl mb-8">
            Feel free to reach out to us for any queries, suggestions or support.
          </p>

          <div className="flex items-center gap-4 text-[#25A352] text-xl mb-4">
            <FaPhoneAlt />
            <p className="text-[#333]">+91 987654321</p>
          </div>

          <div className="flex items-center gap-4 text-xl text-[#25A352] mb-4">
            <FaEnvelope />
            <p className="text-[#333]">contact@nextgencred.com</p>
          </div>

          <div className="flex items-center text-xl gap-4 text-[#25A352]">
            <FaMapMarkerAlt />
            <p className="text-[#333]">Address Location</p>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-4">
          <div className="flex gap-4">
            <input type="text" placeholder="First Name" className="w-1/2 border p-2 rounded" />
            <input type="text" placeholder="Last Name" className="w-1/2 border p-2 rounded" />
          </div>

          <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
          <input type="text" placeholder="Phone" className="w-full border p-2 rounded" />
          <textarea placeholder="Your Message" className="w-full border p-2 rounded h-32"></textarea>

          <button type="submit" className="bg-[#1656A0] cursor-pointer text-white px-6 py-2 rounded hover:bg-[#114683] duration-300">
            Submit
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactUs;
