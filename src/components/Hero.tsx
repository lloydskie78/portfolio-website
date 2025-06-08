'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container-width relative z-10">
        <div className="text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="font-poppins text-5xl md:text-7xl font-bold mb-4">
              <span className="text-gray-100">Hi, I&apos;m </span>
              <span className="gradient-text">Lloyd</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              Software Developer & Full Stack Engineer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Crafting innovative web applications with 5+ years of experience in Vue.js, React.js, PHP, and Python. 
            Passionate about creating scalable solutions that drive business growth and enhance user experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary bg-gray-800 text-gray-200 border-gray-600 hover:bg-gray-700 hover:border-gray-500"
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center space-x-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/lloyd-alcantara/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/lloydgene"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="mailto:lloyd_alcantara@umindanao.edu.ph"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-red-400 transition-colors duration-300"
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              href="tel:+639761180334"
              whileHover={{ scale: 1.2, y: -2 }}
              className="text-gray-400 hover:text-green-400 transition-colors duration-300"
            >
              <Phone size={24} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 