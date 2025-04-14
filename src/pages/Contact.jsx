import React from 'react';
import ContactForm from '../components/ContactForm';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="text-white py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4">Just say Hello</h3>
          <ContactForm />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <p className="text-gray-400 mb-6">
            If you have any questions or need assistance, feel free to reach out!
          </p>
          <div className="space-y-4 text-sm text-gray-300">
            <p><FaEnvelope className="inline mr-2 text-yellow-400" /> lakshanjayasundara59@gmail.com</p>
            <p><FaPhone className="inline mr-2 text-yellow-400" /> +94 76-4281261, +94 76-7512269</p>
            <p><FaMapMarkerAlt className="inline mr-2 text-yellow-400" /> Thispane kanada, Nawalapitiya</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
