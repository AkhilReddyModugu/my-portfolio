import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../ui/SectionHeader';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description?: string[];
  tech?: string;
  delay: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, subtitle, description, tech, delay }) => {
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
      className="mb-8 flex gap-4"
    >
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 bg-indigo-600 dark:bg-indigo-500 rounded-full mt-1.5"></div>
        <div className="w-0.5 h-full bg-indigo-200 dark:bg-indigo-900"></div>
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 flex-1">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full mb-3">
          {date}
        </span>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">{title}</h3>
        <h4 className="text-lg text-indigo-600 dark:text-indigo-400 mb-3">{subtitle}</h4>
        
        {description && (
          <ul className="mb-3 list-disc list-inside space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-slate-700 dark:text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        )}
        
        {tech && (
          <div className="mt-4">
            <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
              <span className="font-bold">Tech Stack:</span> {tech}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Experience & Education" 
          subtitle="My professional journey" 
        />
        
        <div className="max-w-3xl mx-auto mt-12">
          <TimelineItem
            date="Mar 2025 - Present"
            title="Software Engineering Intern"
            subtitle="OpenText, Bangalore"
            description={[
              "Worked on identifying and resolving UI-level issues to improve user experience in enterprise applications.",
              "Explored and began contributing to backend logic and APIs under guidance, gaining familiarity with large-scale systems.",
              "Collaborated with the team to understand product architecture, issue tracking, and debugging workflows."
            ]}
            tech="Java, React, REST APIs, Git"
            delay={0.1}
          />
          
          <TimelineItem
            date="2021 - 2025"
            title="Bachelor of Technology"
            subtitle="CVR College of Engineering, Hyderabad"
            description={[
              "Computer Science and Engineering",
              "CGPA: 9.24",
              "Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Operating Systems"
            ]}
            delay={0.2}
          />
          
          <TimelineItem
            date="2019 - 2021"
            title="Class XII"
            subtitle="Narayana Junior College, Hyderabad"
            description={[
              "Percentage: 98.6%"
            ]}
            delay={0.3}
          />
          
          <TimelineItem
            date="2018 - 2019"
            title="Class X"
            subtitle="New Vision School, Hyderabad"
            description={[
              "CGPA: 9.7"
            ]}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;