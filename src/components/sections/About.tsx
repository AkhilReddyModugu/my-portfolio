import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../ui/SectionHeader';
import { Briefcase, GraduationCap, MapPin, Phone } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <SectionHeader title="About Me" subtitle="Get to know me better" />
        
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8"
          >
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Motivated and ambitious Computer Science and Engineering undergraduate with strong problem-solving skills. 
              I'm currently in my final year at CVR College of Engineering, focused on expanding my practical experience 
              through meaningful projects and internships.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              As a Software Engineering Intern at OpenText, I've been working on improving user experience in enterprise 
              applications, while also gaining experience with backend systems and APIs.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm eager to apply my knowledge in a dynamic and growth-oriented environment, contribute to impactful projects, 
              and continuously learn and grow while making a positive impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">Education</h3>
                  <p className="text-slate-700 dark:text-slate-300">Bachelor of Technology</p>
                  <p className="text-slate-500 dark:text-slate-400">Computer Science & Engineering</p>
                  <p className="text-indigo-600 dark:text-indigo-400 mt-1">CGPA: 9.24</p>
                </div>
              </div>
              <div className="pl-16">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  CVR College of Engineering, 2021-2025
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">Experience</h3>
                  <p className="text-slate-700 dark:text-slate-300">Software Engineering Intern</p>
                  <p className="text-indigo-600 dark:text-indigo-400">OpenText</p>
                </div>
              </div>
              <div className="pl-16">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Bangalore, India • March 2025 - Present
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">Location</h3>
                  <p className="text-slate-700 dark:text-slate-300">Hyderabad, India</p>
                </div>
              </div>
              <div className="pl-16">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Open to relocation
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">Contact</h3>
                  <p className="text-slate-700 dark:text-slate-300">+91 7801020192</p>
                  <p className="text-slate-700 dark:text-slate-300">akhilreddymodugu13@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;