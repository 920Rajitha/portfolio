import React from 'react';
import { FaCode, FaMobileAlt, FaPaintBrush, FaServer } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={28} />,
    title: 'Web Development',
    description: 'Responsive and dynamic websites using React, Vite, and Node.js.',
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps built with Flutter or React Native.',
  },
  {
    icon: <FaPaintBrush size={28} />,
    title: 'UI/UX Design',
    description: 'User-focused interface design that’s both beautiful and intuitive.',
  },
  {
    icon: <FaServer size={28} />,
    title: 'Backend Development',
    description: 'APIs and server-side logic using Node.js, Express, and SQL Server.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 bg-[#0D1117] text-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-yellow-400">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1F2937] p-6 rounded-xl shadow hover:shadow-yellow-400/40 transition duration-300"
          >
            <div className="text-yellow-400 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
