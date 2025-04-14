import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0D1117] border-t border-gray-700 text-gray-400 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            Rajitha <span className="text-yellow-400">Lakshan</span>
          </h3>
          <p className="text-sm leading-6">
            Passionate full-stack developer with expertise in modern web & mobile tech.
            Let’s build something amazing together!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400 transition">About</a></li>
            <li><a href="/resume" className="hover:text-yellow-400 transition">Resume</a></li>
            <li><a href="/portfolio" className="hover:text-yellow-400 transition">Portfolio</a></li>
            <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services / Extras */}
        <div>
          <h4 className="text-white font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Web App Development</li>
            <li>Mobile App Development</li>
            <li>UI/UX Design</li>
            <li>Database Integration</li>
            <li>Freelance Projects</li>
          </ul>
        </div>

        {/* Subscription */}
        <div>
          <h4 className="text-white font-semibold mb-3">Stay Connected</h4>
          <p className="text-sm mb-3">Subscribe to get latest updates and tips!</p>
          <form className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 rounded bg-[#1A1F2E] text-white text-sm border border-gray-600 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-500 transition"
            >
              <FaEnvelope />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© {new Date().getFullYear()} Rajitha Lakshan. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a
            href="https://www.facebook.com/share/16EggFM11B/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-yellow-400 transition" aria-label="Twitter">
            <FaTwitter />
          </a>
        
          <a href="https://www.linkedin.com/in/rajitha-lakshan-4b269b351" className="hover:text-yellow-400 transition" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Scroll To Top */}
      <div className="text-center mt-6">
        <a
          href="#home"
          className="text-yellow-400 hover:underline text-sm transition"
        >
          ↑ Back to Top
        </a>
      </div>
    </footer>
  );
};

export default Footer;
