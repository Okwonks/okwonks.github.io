import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Box from './Box';

import { Wrapper } from '../utils';

const PROJECTS = [
  { name:'React Web App', description:'Very important project done', image:null },
  { name:'React Native App', description:'Very important mobile app done and on play store', image:null },
  { name:'Another one', description:'Definitely displaying my skill', image:null },
];

function Portfolio() {
  return (
    <Box className="text-center md:text-left md:px-20 lg:px-40">
      <motion.div>
        <h1 className="text-white font-bold md:text-[60px] sm:text-[50px] text-[40px]">Portfolio</h1>
      </motion.div>
      <Box className="mt-10 md:mt-20 flex flex-col gap-10 md:gap-20">
        {PROJECTS.map((project, index) =>
          <ProjectInfo key={`project-${index}`} index={index} project={project} />)}
      </Box>
    </Box>
  );
} 

const ProjectInfo = ({ index, project }) => {
  const { name, description, image } = project;

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
      initial="hidden"
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-5`}
    >
      <Box>
        <img src={image} alt={`project-${name}`} className='w-full h-auto object-cover md:rounded-3xl' />
      </Box>
      <Box>
        <h2>{name}</h2>
        <p>{description}</p>
      </Box>
    </motion.div>
  );
};

export default Wrapper(Portfolio, 'portfolio');
