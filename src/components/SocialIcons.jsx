import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex justify-center gap-6 text-yellow-400 text-xl py-6 mt-6">
      <a href="" target="_blank" className="hover:text-white transition"><FaInstagram /></a>
      <a href="https://www.facebook.com/share/16EggFM11B/" target="_blank" className="hover:text-white transition"><FaFacebook /></a>

      <a     href="https://www.linkedin.com/in/rajitha-lakshan-4b269b351" target="_blank" className="hover:text-white transition"><FaLinkedin /></a>
    </div>
  );
};

export default SocialIcons;
