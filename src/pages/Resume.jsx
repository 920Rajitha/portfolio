import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import SkillBar from '../components/SkillBar';
import profileImage from '../assets/profile.jpg';

const Resume = () => {
  return (
    <section
      id="resume"
      className="relative text-white py-24 px-6 max-w-6xl mx-auto overflow-hidden bg-gradient-to-r from-[#1a1c24] via-[#0D1117] to-[#1a1c24]"
    >
      {/* Background Blur Element */}
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-yellow-400 rounded-full opacity-10 blur-2xl z-0" />

      {/* Profile Picture Animation */}
      <motion.img
        src={profileImage}
        alt="Profile"
        className="absolute top-10 left-10 w-28 h-28 rounded-full border-4 border-yellow-400 object-cover shadow-lg hidden md:block z-10"
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      />

      {/* Title */}
      <motion.div
        className="text-center mb-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-yellow-400">
          <span className="inline-block border-t-2 border-b-2 border-yellow-400 px-6 py-1">Resume</span>
        </h2>
        <p className="text-sm text-gray-400 mt-2">A snapshot of my qualifications, experience, and skills.</p>
      </motion.div>

      {/* Experience & Education */}
      <motion.div
        className="grid md:grid-cols-2 gap-12 mt-10 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Experience */}
        <div>
          <div className="flex items-center mb-6 gap-3">
            <FaBriefcase className="text-yellow-400 text-xl" />
            <h3 className="text-xl font-semibold text-yellow-400">Experience</h3>
          </div>
          <div className="space-y-6 border-l-2 border-yellow-400 pl-6">
            <div>
              <h4 className="font-bold text-white">System Assistant</h4>
              <p className="text-sm text-gray-400">Oct 2024 | Kothmale Tea Factory</p>
              <ul className="list-disc list-inside text-sm text-gray-500 mt-2 space-y-1">
                <li><strong>System Support:</strong> Provided technical assistance and ensured smooth system operations.</li>
                <li><strong>Employee Training:</strong> Conducted IT training sessions for staff.</li>
                <li><strong>CCTV Camera Operation:</strong> Monitored and maintained surveillance systems.</li>
                <li><strong>Computer Maintenance:</strong> Troubleshot and repaired hardware/software.</li>
                <li><strong>System Maintenance:</strong> Ensured IT infrastructure performance.</li>
                <li><strong>Technical Support:</strong> Resolved system/network issues.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white">ISO Coordinator</h4>
              <p className="text-sm text-gray-400">Kothmale Tea Factory</p>
              <ul className="list-disc list-inside text-sm text-gray-500 mt-2 space-y-1">
                <li><strong>ISO Coordination:</strong> Managed documentation, audits, and ISO 22000:2018 compliance.</li>
                <li><strong>ISO Certification Success:</strong> Led the audit process and secured certification.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white">Designer and Typist</h4>
              <p className="text-sm text-gray-400">Jan 2022 - May 2023 | Kothmale Tech</p>
              <p className="text-sm text-gray-500 mt-1">Handled document designs, digital formatting, and office automation support.</p>
            </div>
            <div>
              <h4 className="font-bold text-white">UX/UI Designer</h4>
              <p className="text-sm text-gray-400">Jan 2023 | Bergnaum, Hills and Howe</p>
              <p className="text-sm text-gray-500 mt-1">Crafted user journeys, interactive prototypes, and intuitive interfaces.</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center mb-6 gap-3">
            <FaGraduationCap className="text-yellow-400 text-xl" />
            <h3 className="text-xl font-semibold text-yellow-400">Education</h3>
          </div>
          <div className="space-y-6 border-l-2 border-yellow-400 pl-6">
            <div>
              <h4 className="font-bold text-white">Bachelor of Software Engineering (BSE Hons)</h4>
              <p className="text-sm text-gray-400">2021 - 2025 | The Open University of Sri Lanka</p>
              <p className="text-sm text-gray-500 mt-1">Focused on full-stack development, design thinking, and agile methodologies.</p>
            </div>
            <div>
              <h4 className="font-bold text-white">Certificate in Applied Information Technology</h4>
              <p className="text-sm text-gray-400">2021 | Sri Lanka Telecom Training Centre</p>
              <p className="text-sm text-gray-500 mt-1">Completed training in networking, systems, and practical computing.</p>
            </div>
            <div>
              <h4 className="font-bold text-white">Web Application Development</h4>
              <p className="text-sm text-gray-400">2023 | Solo Learn</p>
              <p className="text-sm text-gray-500 mt-1">Focus on modern, responsive web apps and deployment.</p>
            </div>
            <div>
              <h4 className="font-bold text-white">Java Programming</h4>
              <p className="text-sm text-gray-400">2023 | Solo Learn</p>
              <p className="text-sm text-gray-500 mt-1">Covered Java basics, OOP, and hands-on problem solving.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        className="mt-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-yellow-400 mb-6">Skills</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <SkillBar skill="Photoshop" level={50} />
          <SkillBar skill="Motion Graphic" level={45} />
          <SkillBar skill="Adobe XD" level={50} />
          <SkillBar skill="UX Design" level={85} />
          <SkillBar skill="HTML" level={80} />
          <SkillBar skill="Digital Marketing" level={60} />
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
