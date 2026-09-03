import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Box from './Box';
import SectionHeader from './SectionHeader';

import { Wrapper, fadeIn } from '../utils';
import { i18n } from '../assets';

const PROJECTS = [
  {
    title: 'IoT Device Management Platform',
    label: 'Internal Enterprise System',
    description:
      'Engineered a fault-tolerant TCP server handling 5,000+ concurrent IoT device connections, with real-time telemetry ingestion and device state management on Google Cloud Platform. Designed for zero-downtime deployments and automatic recovery from network partitions.',
    tech: ['Node.js', 'Compute Engine', 'PostgreSQL', 'TCP/IP'],
    highlights: [
      '5,000+ concurrent IoT connections on a single managed service',
      'Migrated from manual to automatic GCP scaling — improving reliability and reducing cost',
      'Achieved 90% error-handling capacity through a fault-tolerant microservices architecture',
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop',
  },
  {
    title: 'Internationalisation (i18n) Framework',
    label: 'Cross-Platform Internal Tooling',
    description:
      'Designed and implemented a shared translation framework spanning React web and React Native mobile applications. Enabled multi-language support that improved accessibility for over 60% of the user base, with a scalable architecture that decoupled locale assets from core app bundles.',
    tech: ['React', 'React Native', 'TypeScript', 'Node.js', 'i18next'],
    highlights: [
      'Multi-language support adopted across the full web and mobile product suite',
      'Improved accessibility for 60%+ of the user base',
      'Reduced onboarding time for new locales by 40% through reusable documentation templates',
    ],
    image: i18n,
  },
  {
    title: 'CRM & Customer Management System',
    label: 'Internal Enterprise System',
    description:
      'Architected and delivered a full-stack CRM-like customer management platform from the ground up, streamlining field operations, client engagement workflows, and reporting pipelines. Built with a modular architecture to support rapid iteration across business units.',
    tech: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'MongoDB', 'GCP Cloud Run'],
    highlights: [
      'Streamlined customer workflows across multiple business units',
      'Optimised database queries, improving query performance by 30%',
      'Designed APIs integrating payments, reporting, and field service data into a single platform',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
  },
];

function Portfolio() {
  return (
    <Box className="text-center md:text-left md:px-20 lg:px-40">
      <Box className="max-w-4xl mx-auto px-6 lg:px-12 xl:px-16">
        <SectionHeader title="Portfolio" />
      </Box>
      <Box className="mt-10 md:mt-20 flex flex-col gap-10 md:gap-20">
        {PROJECTS.map((project, index) =>
          <ProjectInfo key={`project-${index}`} index={index} project={project} />)}
      </Box>
    </Box>
  );
} 

const ProjectInfo = ({ index, project }) => {
  const { title, label, description, image, highlights, tech } = project;

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold:0.1 });

  useEffect(() => {
    if(inView) controls.start('show');
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={fadeIn('up', 'spring', 0, 0.75)}
      initial="hidden"
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-5`}
    >
      <Box className="relative w-full md:w-3/5">
        <img
          src={image}
          alt={`project-${title}`}
          className="w-full h-auto object-cover md:rounded-3xl"
        />
      </Box>
      <Box className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? 'text-left md:text-left' : 'text-left md:text-right'}`}>
        <span className="text-teal-400 font-mono text-xs uppercase tracking-widest mb-2">
          {label}
        </span>
        <h3 className="text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl leading-tight">
          {title}
        </h3>
        <p className="mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
          {description}
        </p>
        <ul className="mt-4 space-y-1 text-sm text-slate-400 font-mono">
          {highlights.map((point, i) => (
            <li key={i} className={`flex items-start gap-2 ${isEven ? '' : 'md:flex-row-reverse'}`}>
              <span className="text-teal-400 mt-0.5 shrink-0">▸</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <Box className="mt-4 flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-mono text-teal-400 border border-teal-400/40 rounded-full bg-teal-400/5"
            >
              {t}
            </span>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
};

export default Wrapper(Portfolio, 'portfolio', 0.15);
