import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SocialIcons from '../components/SocialIcons';
import ServicesSection from '../components/ServicesSection';
import WelcomeQuote from '../components/WelcomeQuote';
import SkillsSection from '../components/SkillsSection';
import LikeButton from '../components/LikeButton';
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Hero/>
      <SocialIcons />
      <LikeButton />
      <ServicesSection />
<WelcomeQuote />
<SkillsSection />
    </motion.div>
  );
};

export default Home;
