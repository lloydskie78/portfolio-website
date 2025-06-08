'use client';

import { motion } from 'framer-motion';
import { Code, Database, Server, Wrench, Cloud, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { name: 'Vue.js', level: 95 },
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'PHP', level: 95 },
        { name: 'Python', level: 85 },
        { name: 'Laravel', level: 90 },
        { name: 'Django', level: 80 },
        { name: 'ASP.NET', level: 75 },
        { name: 'Node.js', level: 80 },
      ],
    },
    {
      title: 'Database & Storage',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'SQL Server', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Redis', level: 70 },
        { name: 'Firebase', level: 80 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: Wrench,
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux', level: 80 },
        { name: 'Nginx', level: 75 },
        { name: 'Apache', level: 85 },
      ],
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: [
        { name: 'Azure', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Google Cloud', level: 70 },
        { name: 'Vercel', level: 85 },
        { name: 'Netlify', level: 85 },
        { name: 'DigitalOcean', level: 80 },
      ],
    },
    {
      title: 'Mobile & Other',
      icon: Smartphone,
      skills: [
        { name: 'Flutter', level: 70 },
        { name: 'API Development', level: 90 },
        { name: 'OAuth', level: 85 },
        { name: 'Payment Gateways', level: 80 },
        { name: 'AI/ML Integration', level: 75 },
        { name: 'SEO', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container-width px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-100">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels across various technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg text-gray-100">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-300 group-hover:text-gray-100 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-gray-100">
              Continuous Learning & Development
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
              I am committed to staying current with emerging technologies and best practices. 
              Currently exploring advanced AI/ML integration, cloud-native architectures, and 
              modern frontend frameworks to deliver cutting-edge solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 