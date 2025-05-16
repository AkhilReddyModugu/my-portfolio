import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from '../ui/SectionHeader';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string[];
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tags, 
  image, 
  github, 
  demo,
  index
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="group bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all duration-300"
    >
      <div className="relative h-48 bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
              aria-label="View GitHub Repository"
            >
              <Github size={24} />
            </a>
          )}
          {demo && (
            <a 
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/10 rounded-full backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
              aria-label="View Live Demo"
            >
              <ExternalLink size={24} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        
        <ul className="mb-4 text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
          {description.map((item, i) => (
            <li key={i} className="text-sm">{item}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Real-Time Web Summarizer",
      description: [
        "Built a tool for real-time web content retrieval and summarization",
        "Implemented web scraping and AI-driven summarization for efficient insights extraction",
        "Designed a user-friendly interface for inputting queries and viewing summarized results"
      ],
      tags: ["React", "Node.js", "Express.js", "MongoDB", "FastAPI", "BeautifulSoup"],
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      github: "https://github.com/AkhilReddyModugu",
      demo: "#"
    },
    {
      title: "MelodyMart",
      description: [
        "Developed an e-commerce platform for musical instruments",
        "Includes features for product browsing, search, and purchase",
        "Integrated order management, user authentication, and real-time shopping cart updates"
      ],
      tags: ["React", "Node.js", "Express", "MongoDB"],
      image: "https://images.pexels.com/photos/3944104/pexels-photo-3944104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      github: "https://github.com/AkhilReddyModugu",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Projects" 
          subtitle="Some of my recent work" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              index={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;