import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a0a14] text-white border-t-2 border-purple-500">
      <div className="container mx-auto px-6 xl:px-28 py-8">
        {/* Get In Touch text */}
        <h3 className="text-xl font-semibold mb-2">🤝 Get In Touch</h3>
        <p className="mb-4">Feel free to reach out for collaborations or just a friendly hello!</p>
        
        {/* Social icons in rectangular boxes */}
        <div className="flex gap-4 mb-6">
          <a 
            href="https://www.linkedin.com/in/hemashree-ms/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white bg-[#1f1f2e] p-3 rounded hover:bg-[#0077b5] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          
          <a 
            href="https://github.com/Hemashree21" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white bg-[#1f1f2e] p-3 rounded hover:bg-[#333] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          
          <a 
            href="mailto:hemashree21.msh@gmail.com" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white bg-[#1f1f2e] p-3 rounded hover:bg-[#ea4335] transition-colors"
            aria-label="Email"
          >
            <HiOutlineMail size={20} />
          </a>
          
          <a 
            href="https://instagram.com/hemashree_2106" 
            target="_blank" 
            rel="noreferrer" 
            className="text-white bg-[#1f1f2e] p-3 rounded hover:bg-[#e1306c] transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
        </div>
        
        {/* Copyright section with flex layout */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Hemashree M S. All rights reserved
          </p>
          
          <p className="text-sm text-gray-400">
            Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;