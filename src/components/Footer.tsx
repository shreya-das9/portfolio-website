import React from 'react';
import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const socialLinks = [
    { href: 'https://github.com/shreya-das9', icon: <Github size={20} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/shreya-das-2079b2269', icon: <Linkedin size={20} />, label: 'LinkedIn' },
    { href: 'mailto:dshreya943@gmail.com', icon: <Mail size={20} />, label: 'Email' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold hover:text-blue-400 transition-colors flex items-center space-x-2"
            >
              <Code size={24} />
              <span>Shreya Das</span>
            </button>
            <p className="text-gray-400 leading-relaxed max-w-md">
              MERN Stack Developer specializing in AI-powered applications and modern web solutions. 
              Passionate about creating exceptional digital experiences with cutting-edge technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Technologies</h3>
            <div className="space-y-2 text-gray-400 text-sm">
              <p>MongoDB • Express.js</p>
              <p>React • Node.js</p>
              <p>Google Gemini API</p>
              <p>Firebase • Tailwind CSS</p>
              <p>Vercel • Render • GCP</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © {currentYear} Shreya Das. All rights reserved.
            </p>
            <p className="text-gray-400 flex items-center space-x-1">
              <span>Built with</span>
              <Heart className="text-red-500" size={16} />
              <span>using MERN Stack & Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;