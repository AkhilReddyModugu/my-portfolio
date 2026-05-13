import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../ui/SectionHeader';
import { Code, Database, Laptop, Server, Wrench, GitBranch } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon, delay }) => {
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
      className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="p-3 rounded-md bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={24} />,
      skills: ["Java", "JavaScript", "Python", "TypeScript", "HTML", "CSS"],
      delay: 0.1
    },
    {
      title: "Backend",
      icon: <Server size={24} />,
      skills: ["Spring Boot", "Node.js", "Express.js"],
      delay: 0.2
    },
    {
      title: "Frontend",
      icon: <Laptop size={24} />,
      skills: ["React", "Redux", "Tailwind CSS"],
      delay: 0.3
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["MongoDB", "MySQL"],
      delay: 0.4
    },
    {
      title: "Architecture",
      icon: <GitBranch size={24} />,
      skills: ["Microservices", "Microfrontend", "Event-Driven Architecture"],
      delay: 0.5
    },
    {
      title: "DevOps & Tools",
      icon: <Wrench size={24} />,
      skills: ["Linux", "Docker", "Kubernetes", "Helm", "CI/CD", "Git", "Jenkins", "Jira", "Postman"],
      delay: 0.6
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Skills & Expertise" 
          subtitle="What I bring to the table" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={category.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;