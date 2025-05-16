import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-indigo-400 mb-2">Akhil Reddy Modugu</h3>
            <p className="text-slate-300 max-w-md">
              Computer Science student & aspiring software engineer with a passion for building impactful solutions.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://www.linkedin.com/in/akhil-reddy-modugu/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/AkhilReddyModugu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="mailto:akhilreddymodugu13@gmail.com" 
                className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
            
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} Akhil Reddy Modugu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;