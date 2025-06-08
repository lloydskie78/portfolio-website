'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Zap, Award, Database, Globe } from 'lucide-react';

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
      image: '/api/placeholder/600/400',
    },
    {
      title: 'InfoSoft CRM System',
      description: 'Built a customer relationship management system with advanced analytics, lead tracking, and automated workflow capabilities.',
      tech: ['ASP.NET', 'React.js', 'SQL Server', 'Azure'],
      category: 'CRM',
      icon: Users,
      link: 'https://infosoftstudio.com',
      github: '',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Real-time Chat Application',
      description: 'Developed a real-time messaging platform with Vue.js, Laravel, and Pusher for instant communication and file sharing.',
      tech: ['Laravel', 'Vue.js', 'Pusher', 'WebSockets'],
      category: 'Real-time',
      icon: Calendar,
      link: '',
      github: 'https://github.com/lloydskie78/chatapp-laravel-vue-pusher',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Django E-commerce Store',
      description: 'Built a modern e-commerce platform using Django and Vue.js with secure payment integration and responsive design.',
      tech: ['Django', 'Vue.js', 'PostgreSQL', 'Stripe'],
      category: 'E-commerce',
      icon: Database,
      link: '',
      github: 'https://github.com/lloydskie78/django-ecom',
      image: '/api/placeholder/600/400',
    },
    {
      title: 'Dormee Management System',
      description: 'Created a comprehensive dormitory management system with booking, payments, and resident management features.',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      category: 'Management',
      icon: Award,
      link: '',
      github: 'https://github.com/lloydskie78/Dormee',
      image: '/api/placeholder/600/400',
    },
  ];

  const categories = ['All', 'AI/ML', 'E-commerce', 'CRM', 'Real-time', 'Management'];
  const [selectedCategory, setSelectedCategory] = useState('All');

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
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center">
                <project.icon size={48} className="text-blue-400" />
                <div className="absolute top-4 right-4">
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
    </section>
  );
};

export default Projects; 