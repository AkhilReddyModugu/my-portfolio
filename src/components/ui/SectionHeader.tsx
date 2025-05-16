import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white inline-block relative pb-3 mb-4"
      >
        {title}
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-indigo-600 dark:bg-indigo-500 rounded"></span>
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-slate-700 dark:text-slate-300"
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default SectionHeader;