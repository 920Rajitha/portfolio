import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-[#0D1117]/90 backdrop-blur-md px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold text-white">Rajitha Lakshan</h1>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 text-white font-medium">
        {links.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`relative group hover:text-yellow-400 transition ${
              location.pathname === link.path ? 'text-yellow-400' : ''
            }`}
          >
            {link.name}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full"></span>
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-white z-50" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-[#111827] flex flex-col items-center py-6 space-y-4 md:hidden shadow-lg"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-white hover:text-yellow-400 transition ${
                  location.pathname === link.path ? 'text-yellow-400' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
