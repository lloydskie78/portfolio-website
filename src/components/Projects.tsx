'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, Users, Zap, Globe, Database, X } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Vyde AI Transaction Processor',
      description: 'Engineered AI-powered transaction categorization system that reduced manual errors by 65% and processed thousands of financial transactions daily.',
      tech: ['Vue.js', 'Python', 'Machine Learning', 'PostgreSQL'],
      category: 'AI/ML',
      icon: Zap,
      link: 'https://vyde.io',
      github: '',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'CitiHardware E-commerce Platform',
      description: 'Developed a comprehensive e-commerce solution for hardware retail with inventory management, payment processing, and analytics dashboard.',
      tech: ['Laravel', 'Vue.js', 'MySQL', 'Stripe API'],
      category: 'E-commerce',
      icon: Globe,
      link: 'https://citihardware.com',
      github: '',
      image: '/citihardware.jpeg',
    },
    {
      title: 'Chozi Real Estate App',
      description: 'Built a comprehensive real estate management platform with property listings, search functionality, and client management features.',
      tech: ['Laravel', 'React', 'Tailwind', 'MongoDB', 'MySQL'],
      category: 'Real Estate',
      icon: Users,
      link: 'http://chozi.com/',
      github: '',
      image: '/chozi.jpeg',
    },
    {
      title: 'VBooks Accounting Software',
      description: 'Developed comprehensive accounting software for Vyde with financial reporting, transaction management, and automated bookkeeping capabilities.',
      tech: ['Laravel', 'Vue.js', 'Tailwind', 'MySQL', 'MongoDB'],
      category: 'Accounting',
      icon: Database,
      link: 'https://books.vyde.io/',
      github: '',
      image: '/vyde-accounting.png',
    },
  ];

  const categories = ['All', 'AI/ML', 'E-commerce', 'Real Estate', 'Accounting'];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container-width px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore some of my recent work and side projects that showcase my skills and passion for development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              {/* Project Image/Icon */}
              <div 
                className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 overflow-hidden cursor-pointer group"
                onClick={() => {
                  if (project.image && project.image !== '/api/placeholder/600/400') {
                    setSelectedImage(project.image);
                  }
                }}
              >
                {project.image && project.image !== '/api/placeholder/600/400' ? (
                  <>
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 text-white font-medium transition-opacity duration-300">
                        Click to view
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <project.icon size={48} className="text-blue-400" />
                  </div>
                )}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 text-xs font-medium bg-gray-900/50 text-gray-300 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-3 text-gray-100">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-4">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors duration-300"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together? Let&apos;s discuss your next project!
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>

      {/* Image Modal/Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
                aria-label="Close modal"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={32} />
              </motion.button>
              <div className="relative w-full h-[90vh] rounded-lg overflow-hidden bg-gray-900/50">
                <Image
                  src={selectedImage}
                  alt="Project preview"
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects; 