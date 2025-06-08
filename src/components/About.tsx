'use client';

import { motion } from 'framer-motion';
import { Code, Zap, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: '5+ years of experience building end-to-end web applications',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Improved user engagement by 40% through strategic optimizations',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Led cross-functional teams in multiple successful projects',
    },
    {
      icon: Award,
      title: 'Problem Solving',
      description: 'Reduced system errors by 65% with innovative AI solutions',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container-width px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate software developer with a strong foundation in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg text-gray-300 max-w-none">
              <p className="mb-6 leading-relaxed">
                Hello! I am <strong className="text-gray-100">Lloyd Gene Alcantara</strong>, a dedicated Software Developer 
                based in Davao City, Philippines. With over 5 years of professional experience, I specialize 
                in creating innovative web applications that solve real-world problems.
              </p>
              
              <p className="mb-6 leading-relaxed">
                My journey began at the <strong className="text-gray-100">University of Mindanao</strong>, where I developed 
                a solid foundation in computer science principles. Since then, I have worked with leading 
                companies including <strong className="text-gray-100">Vyde (formerly Mazuma)</strong> in Utah, where I contributed 
                to AI-powered transaction processing systems.
              </p>
              
              <p className="leading-relaxed">
                I am passionate about leveraging cutting-edge technologies like <strong className="text-gray-100">Vue.js</strong>, 
                <strong className="text-gray-100"> React.js</strong>, <strong className="text-gray-100">PHP</strong>, and <strong className="text-gray-100">Python</strong> to build 
                scalable solutions that drive business growth and enhance user experiences. 
                My expertise spans both frontend and backend development, with a keen focus on 
                performance optimization and user-centric design.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start space-x-4 p-6 bg-gray-900/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <item.icon size={24} className="text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-100">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '4', label: 'Companies Worked' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 