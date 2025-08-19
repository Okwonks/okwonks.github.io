import { Github, ExternalLink } from 'lucide-react';

import SectionHeader from './SectionHeader';

export default function Portfolio() {
  const projects = [
    {
      title: "Featured Project",
      description: "A web app for visualizing personalized data. Built with modern technologies and focuses on clean design and smooth user interactions.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Another Project", 
      description: "A full-stack application that helps users manage their daily tasks with an intuitive interface and powerful features.",
      tech: ["TypeScript", "Next.js", "PostgreSQL", "Prisma"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader number="02" title="Some Things I've Built" />
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectItem = ({ project, index }) => (
  <div className={`grid md:grid-cols-12 gap-6 items-center group ${index % 2 === 1 ? 'md:text-right' : ''}`}>
    <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6' : ''}`}>
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
        />
        <div className="absolute inset-0 bg-teal-400/20 group-hover:bg-transparent transition-all duration-300"></div>
      </div>
    </div>
    
    <div className={`md:col-span-5 z-10 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
      <p className="text-teal-400 font-mono text-sm mb-2">Featured Project</p>
      <h3 className="text-2xl font-bold text-slate-100 mb-4">{project.title}</h3>
      <div className="bg-slate-800 p-6 rounded-lg shadow-xl mb-4">
        <p className="text-slate-300">{project.description}</p>
      </div>
      <div className={`flex flex-wrap gap-3 mb-6 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
        {project.tech.map((tech) => (
          <span key={tech} className="text-slate-400 font-mono text-sm">{tech}</span>
        ))}
      </div>
      <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : ''}`}>
        <a href={project.github} className="text-slate-300 hover:text-teal-400 transition-colors">
          <Github size={20} />
        </a>
        <a href={project.live} className="text-slate-300 hover:text-teal-400 transition-colors">
          <ExternalLink size={20} />
        </a>
      </div>
    </div>
  </div>
);
