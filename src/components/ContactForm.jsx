import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaPencilAlt, FaCommentDots } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post('https://tender-education.up.railway.app/api/contact', formData);
      setStatus("✅ Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("❌ Failed to send. Try again later.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center bg-[#1e293b] px-4 py-2 rounded">
          <FaUser className="text-yellow-400 mr-3" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-transparent w-full outline-none text-white"
          />
        </div>
        <div className="flex items-center bg-[#1e293b] px-4 py-2 rounded">
          <FaEnvelope className="text-yellow-400 mr-3" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent w-full outline-none text-white"
          />
        </div>
        <div className="flex items-center bg-[#1e293b] px-4 py-2 rounded">
          <FaPencilAlt className="text-yellow-400 mr-3" />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="bg-transparent w-full outline-none text-white"
          />
        </div>
        <div className="flex items-start bg-[#1e293b] px-4 py-2 rounded">
          <FaCommentDots className="text-yellow-400 mr-3 mt-1" />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="bg-transparent w-full outline-none text-white h-32 resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-400 text-black font-bold w-full py-2 rounded hover:scale-105 transition"
        >
          Send Message
        </button>
        {status && <p className="text-sm mt-2">{status}</p>}
      </form>
    </>
  );
};

export default ContactForm;
