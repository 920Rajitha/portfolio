import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="relative text-white py-24 px-6 max-w-6xl mx-auto bg-gradient-to-r from-[#0D1117] via-[#111827] to-[#0D1117]"
    >
      {/* Left corner profile image */}
      <img
        src={profileImage}
        alt="Profile"
        className="absolute top-10 left-10 w-28 h-28 rounded-full border-4 border-yellow-400 object-cover shadow-lg hidden md:block"
      />

      {/* Section heading */}
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-2">
        <span className="inline-block border-t-2 border-b-2 border-yellow-400 px-6 py-1">
          About Me
        </span>
      </h2>
      <p className="text-center text-gray-400 text-sm mb-12">
        A quick look into who I am, what I do, and what drives me forward.
      </p>

      {/* Layout grid */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I’m <span className="text-yellow-400 font-semibold">Rajitha Lakshan</span>, a motivated and passionate
            <span className="text-yellow-400"> Full Stack Developer</span> with experience in building modern web
            and mobile apps. I specialize in turning business needs into elegant, high-performing solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 text-sm text-gray-400">
            <p><span className="text-yellow-400 font-medium">Phone:</span> +94 767512269</p>
            <p><span className="text-yellow-400 font-medium">Email:</span> lakshanjayasundara59@gmail.com</p>
            <p><span className="text-yellow-400 font-medium">From:</span> Nawalapitiya</p>
            <p><span className="text-yellow-400 font-medium">Language:</span> English, Sinhala</p>
            <p><span className="text-yellow-400 font-medium">Freelance:</span> Available</p>
          </div>

          <a
            href="/Rajitha_CV.pdf"
            download
            className="inline-block mt-6 bg-yellow-400 text-black font-bold px-6 py-2 rounded-full hover:scale-105 transition"
          >
            Download CV
          </a>
        </motion.div>

        {/* Mission + Vision */}
        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#1f2937] p-6 rounded-lg shadow-md hover:shadow-yellow-400/30 transition"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">🎯 Mission</h3>
            <p className="text-sm text-gray-300">
              To craft beautiful and functional digital experiences that make a meaningful impact.
              I focus on clean code, scalable architecture, and seamless UX.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#1f2937] p-6 rounded-lg shadow-md hover:shadow-yellow-400/30 transition"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-2">🌟 Vision</h3>
            <p className="text-sm text-gray-300">
              To become a trusted developer and problem solver, delivering modern solutions through
              continuous learning, collaboration, and creativity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
