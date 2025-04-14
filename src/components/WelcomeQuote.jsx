import React from 'react';
import { motion } from 'framer-motion';

const WelcomeQuote = () => {
  return (
    <section className="bg-[#111827] text-white py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">A Note From Me</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300 leading-relaxed">
          "Design and development aren’t just my profession — they’re my passion. I believe in
          crafting experiences that inspire, engage, and elevate your brand. Whether it’s building
          sleek web apps or intuitive mobile solutions, I’m here to bring ideas to life."
        </p>

        <p className="mt-6 text-sm text-gray-500">– Rajitha Lakshan</p>
      </motion.div>
    </section>
  );
};

export default WelcomeQuote;
