import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../ui/SectionHeader';

interface StatCardProps {
  stat: string;
  label: string;
  subtitle: string;
  delay: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, label, subtitle, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-10 text-center transform hover:scale-105 transition-transform duration-300"
    >
      <p className="text-6xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2">{stat}</p>
      <p className="text-xl font-semibold text-slate-900 dark:text-white mb-1">{label}</p>
      <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <SectionHeader title="Achievements" subtitle="A few things I'm proud of" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
          <StatCard
            stat="500+"
            label="DSA Problems Solved"
            subtitle="LeetCode Rating: 1700+"
            delay={0.1}
          />
          <StatCard
            stat="4625"
            label="TS EAMCET Rank"
            subtitle="Among 200,000+ candidates"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
