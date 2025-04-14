import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const PortfolioModal = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-[#1f2937] rounded-lg max-w-xl w-full p-6 relative shadow-xl text-white"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={onClose}>
          <X size={24} />
        </button>

        {/* Project Image */}
        <img src={project.image} alt={project.title} className="rounded-md mb-4 w-full h-56 object-cover" />

        {/* Title & Description */}
        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-400 transition"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-white transition"
            >
              Live Demo
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioModal;
