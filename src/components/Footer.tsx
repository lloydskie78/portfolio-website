'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/lloydskie78',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/lloyd-alcantara/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:lloyd_alcantara@umindanao.edu.ph',
      label: 'Email',
    },
    {
      icon: Phone,
      href: 'tel:+639761180334',
      label: 'Phone',
    },
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container-width px-6">
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-1"
            >
              <h3 className="font-poppins font-bold text-xl gradient-text mb-4">
                Lloyd Alcantara
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Full Stack Developer passionate about creating innovative software solutions 
                that drive business growth and enhance user experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-200 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-100 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-gray-200 transition-colors duration-300 block py-1"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-100 mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Full Stack Solutions</li>
                <li>API Development</li>
                <li>Database Design</li>
                <li>Cloud Deployment</li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-100 mb-4">Get in Touch</h4>
              <div className="space-y-3 text-gray-400">
                <div>
                  <p className="text-sm">Email</p>
                  <a 
                    href="mailto:lloyd_alcantara@umindanao.edu.ph"
                    className="hover:text-gray-200 transition-colors duration-300"
                  >
                    lloyd_alcantara@umindanao.edu.ph
                  </a>
                </div>
                <div>
                  <p className="text-sm">Phone</p>
                  <a 
                    href="tel:+639761180334"
                    className="hover:text-gray-200 transition-colors duration-300"
                  >
                    +63 976 118 0334
                  </a>
                </div>
                <div>
                  <p className="text-sm">Location</p>
                  <p>Davao City, Philippines</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Lloyd Gene Alcantara. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-gray-400 text-sm">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart size={14} className="text-red-500 fill-current" />
              </motion.div>
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 