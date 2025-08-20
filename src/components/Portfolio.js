import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Box from './Box';
import SectionHeader from './SectionHeader';

import { Wrapper, textVariant, fadeIn } from '../utils';

const PROJECTS = [
  {
    title: 'Featured Project',
    description: 'A web app for visualizing personalized data. Built with modern technologies and focuses on clean design and smooth user interactions.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
    github: '#',
    live: '#'
  },
  {
    title: 'Another Project', 
    description: 'A full-stack application that helps users manage their daily tasks with an intuitive interface and powerful features.',
    tech: ['TypeScript', 'Next.js', 'PostgreSQL', 'Prisma'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
    github: '#',
    live: '#'
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
  const { title, description, image } = project;

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
          alt={`project-${name}`}
          className="w-full h-auto object-cover md:rounded-3xl"
        />
      </Box>
      <Box className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${isEven ? 'text-left md:text-left' : 'text-left md:text-right'}`}>
        <h3 className="text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight">{title}</h3>
        <p className="mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">{description}</p>
      </Box>
    </motion.div>
  );
};

export default Wrapper(Portfolio, 'portfolio');
