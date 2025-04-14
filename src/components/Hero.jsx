// Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/profile.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    navigate('/resume', { state: { autoDownload: true } });
  };

  return (
    <section id="home" className="bg-[#0D1117] text-white py-20 px-4 text-center">
      <motion.div
        className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full border-4 border-yellow-400 shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <img src={profileImage} alt="Rajitha Lakshan" className="w-full h-full object-cover" />
      </motion.div>

      <motion.h1
        className="text-3xl md:text-5xl font-bold mt-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Rajitha Lakshan
      </motion.h1>

      <TypeAnimation
        sequence={['Web Developer 💻', 2000, 'Mobile App Developer 📱', 2000, 'UI/UX Designer 🎨', 2000]}
        wrapper="span"
        speed={50}
        className="text-lg md:text-xl text-yellow-400 font-medium mt-2 block"
        repeat={Infinity}
      />

      <div className="flex justify-center flex-wrap gap-4 mt-8">
      <motion.a
  href="/resume?autoDownload=true"
  whileHover={{ scale: 1.05 }}
  className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition"
>
  Download CV
</motion.a>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://wa.me/94767512269', '_blank')}
          className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition"
        >
          Contact Me
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
