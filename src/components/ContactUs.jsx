import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  // State for form fields
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    contactNumber: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    // Basic client-side validation
    if (
      !form.name ||
      !form.businessName ||
      !form.contactNumber ||
      !form.email ||
      !form.message
    ) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://tie-up-form-api.vercel.app/submit_form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setSuccess("Your message has been sent!");
        setForm({
          name: "",
          businessName: "",
          contactNumber: "",
          email: "",
          message: "",
        });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    }
    setLoading(false);
  };

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
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-1/2 border border-[#f8bf18] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Phone"
              value={form.contactNumber}
              onChange={handleChange}
              className="w-1/2 border border-[#f8bf18] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
            />
          </div>
          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            value={form.businessName}
            onChange={handleChange}
            className="w-full border border-[#f8bf18] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border border-[#f8bf18] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-[#f8bf18] p-2 rounded h-32 focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#f8bf18] cursor-pointer text-[#262626] px-6 py-2 rounded font-semibold hover:bg-[#262626] hover:text-[#f8bf18] border-2 border-[#f8bf18] duration-300"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {success && <p className="text-green-600">{success}</p>}
          {error && <p className="text-red-600">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;


// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// const ContactUs = () => {
//   return (
//     <section id="contact" className="bg-white py-16 px-4">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        
//         {/* Left Side - Contact Info */}
//         <div>
//           <p className="text-4xl font-bold mb-4" style={{ color: "#262626" }}>
//             Contact <span style={{ color: "#f8bf18" }}>Us</span>
//           </p>
//           <p className="text-xl mb-8" style={{ color: "#262626" }}>
//             Feel free to reach out to us for any queries, suggestions or support.
//           </p>

//           <div className="flex items-center gap-4 text-xl mb-4">
//             <FaPhoneAlt style={{ color: "#f8bf18" }} />
//             <p style={{ color: "#262626" }}>+91 9814944610</p>
//           </div>

//           <div className="flex items-center gap-4 text-xl mb-4">
//             <FaEnvelope style={{ color: "#f8bf18" }} />
//             <p style={{ color: "#262626" }}>intouchengineers@yahoo.com</p>
//           </div>

//           <div className="flex items-center text-xl gap-4">
//             <FaMapMarkerAlt style={{ color: "#f8bf18" }} />
//             <p style={{ color: "#262626" }}>
//               B-XXX-785 Sherpur Bypass, Grand Trunk Rd, opposite Meera & Company, Ludhiana, Punjab 141010
//             </p>
//           </div>
//         </div>

//         {/* Right Side - Contact Form */}
//         <form className="space-y-4">
//           <div className="flex gap-4">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-1/2 border border-[#f8bf18] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
//             />
//             <input
//               type="text"
//               placeholder="Phone"
//               className="w-1/2 border border-[#f8bf18] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
//             />
//           </div>

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border border-[#f8bf18] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
//           />
//           <input
//             type="text"
//             placeholder="Subject"
//             className="w-full border border-[#f8bf18] p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
//           />
//           <textarea
//             placeholder="Your Message"
//             className="w-full border border-[#f8bf18] p-2 rounded h-32 focus:outline-none focus:ring-2 focus:ring-[#f8bf18]"
//           ></textarea>

//           <button
//             type="submit"
//             className="bg-[#f8bf18] cursor-pointer text-[#262626] px-6 py-2 rounded font-semibold hover:bg-[#262626] hover:text-[#f8bf18] border-2 border-[#f8bf18] duration-300"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactUs;
