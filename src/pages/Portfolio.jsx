import React, { useState } from 'react';
import PortfolioCard from '../components/PortfolioCard';
import PortfolioModal from '../components/PortfolioModal';
import { motion } from 'framer-motion';
import NET1 from '../assets/NETPROJECT1.png';
import NET2 from '../assets/NETPROJECT2.png';
import WEB1 from '../assets/webpro1.png';
import WEB4 from '../assets/web4.png';
import PORT2 from '../assets/portfolio2.jpg';
import MY from '../assets/my.png';

const projects = [
  {
    id: 1,
    title: 'School Management System',
    image: NET2,
    description: 'Built using .NET and SQL Server.',
    tags: ['.NET', 'SQL Server'],
  },
  {
    id: 2,
    title: 'Tuition Fee Management System',
    image: NET1,
    description: 'Tuition system with reporting and print features.',
    tags: ['.NET', 'SQL Server', 'Finance'],
  },
  {
    id: 3,
    title: 'School Website',
    image: WEB4,
    description: 'School site with notice board, blog, and dashboard.',
    tags: ['React.js', 'Node.js', 'SQL Server'],
  },
  {
    id: 4,
    title: 'Online Cloth Ordering Site',
    image: WEB1,
    description: 'A modern and responsive web application for browsing, selecting, and ordering clothes online. Features include product filtering by category and size, a dynamic shopping cart, customer reviews, and secure order placement. Built with React.js, Node.js, and SQL Server for a smooth and efficient user experience.',
    tags: ['React', 'Node.js'],
  },
  {
    id: 5,
    title: 'Movie Theater Mobile App',
    image: PORT2,
    description: 'built with Android Studio (Java).',
    tags: ['Android Studio', 'Java'],
  },
  {
    id: 6,
    title: 'Personal Portfolio Website',
    image: MY,
    description: 'My animated portfolio built with React & Tailwind.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
];

const Portfolio = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="portfolio" className="relative text-white py-20 px-6 max-w-6xl mx-auto overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1c24] via-[#0D1117] to-[#1a1c24] opacity-60 z-0" />
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-2xl z-0" />

      {/* Title with lines */}
      <div className="relative z-10 mb-12">
        <div className="flex items-center justify-center space-x-3">
          <span className="w-8 h-1 bg-yellow-400 rounded-full"></span>
          <h2 className="text-3xl font-bold text-yellow-400 text-center">My Projects</h2>
          <span className="w-8 h-1 bg-yellow-400 rounded-full"></span>
        </div>
        <p className="text-center text-gray-400 text-sm mt-3">A showcase of my professional and academic projects.</p>
      </div>

      {/* Project Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="cursor-pointer"
            onClick={() => setSelected(project)}
          >
            <PortfolioCard
              image={project.image}
              title={project.title}
              tags={project.tags}
            />
          </motion.div>
        ))}
      </motion.div>

      {selected && (
        <PortfolioModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};

export default Portfolio;
