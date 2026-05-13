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
              I'm a full-stack software engineer at OpenText, where I work on ArcSight — a large-scale enterprise security platform.
              Day to day, that means writing Spring Boot services, building React/Redux frontend modules, wiring things together through
              Kafka event streams, and keeping everything running in Kubernetes. It's the kind of work where you learn pretty fast that
              clean APIs and reliable deployments actually matter.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
              Distributed systems are what genuinely excite me — the design decisions around service boundaries, data consistency,
              and fault tolerance. I enjoy digging into production issues, tracing them through logs and system behavior,
              and fixing them at the root rather than patching symptoms.
            </p>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              I'm actively looking for SDE1 roles at product-based companies where I can keep building things at scale.
              If that sounds like your team, let's talk.
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
                  <p className="text-indigo-600 dark:text-indigo-400 mt-1">CGPA: 9.22</p>
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
                  <p className="text-slate-700 dark:text-slate-300">Associate Software Engineer</p>
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