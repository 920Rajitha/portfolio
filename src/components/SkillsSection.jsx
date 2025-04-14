import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML/CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React.js', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Flutter', level: 70 },
  { name: 'UI/UX Design', level: 85 },
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-[#0D1117] text-white">
      <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">My Skills</h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-1 flex justify-between">
              <span>{skill.name}</span>
              <span className="text-yellow-400 font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 h-3 rounded-full overflow-hidden">
              <div
                className="bg-yellow-400 h-full rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
