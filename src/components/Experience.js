import { useState } from 'react';
import { motion } from 'framer-motion';

import Box from './Box';
import SectionHeader from './SectionHeader';

import { experiences } from '../data';
import { Wrapper, textVariant } from '../utils';

export default Wrapper(Experience, 'experience');

function Experience() {
  const [selectedJob, setSelectedJob] = useState(experiences[0]);

  return (
    <Box className="sm:my-20">
      <Box className="max-w-4xl mx-auto px-6 lg:px-12 xl:px-16">
        <SectionHeader title="Experience" />
      </Box>

      <Box className="max-w-7xl mt-10 md:mt-20 md:p-20 flex flex-col items-center sm:flex-row sm:items-start">
        <Box className="flex flex-col z-10 sm:w-auto sm:w-full">
          {experiences.map((experience, idx) => (
            <ExperienceCard
              key={`${experience.title}-${idx}`}
              experience={experience}
              onClick={() => setSelectedJob(experience)}
              isActive={selectedJob === experience}
            />
          ))}
        </Box>

        <Box className="flex justify-end z-10 sm:block hidden">
          <ExperienceDetails details={selectedJob.details}/>
        </Box>
      </Box>
    </Box>
  );
}

const ExperienceCard = ({ experience, onClick, isActive }) => (
  <Box
    className="cursor-pointer sm:mb-5 p-2 max-w-xl relative sm:text-left text-center"
    onClick={onClick}
  >
    {isActive && (
      <Box className="absolute left-0 top-0 bottom-0 w-3 md:w-5 bg-sky-950 my-2 sm:block hidden" />
    )}
    <h3 className={`text-xl lg:text-2xl xl:text-3xl font-bold sm:pl-8 ${isActive ? 'text-sky-600' : 'text-slate-400'}`}>
      {experience.title}
    </h3>
    <p className={`text-md lg:text-lg xl:text-2xl sm:font-medium pt-2 sm:pl-8 ${isActive ? 'text-white' : 'text-slate-400'}`}>
      {experience.company} | {experience.dates}
    </p>
  </Box>
);

const ExperienceDetails = ({ details }) => (
  <Box className="mt-5">
    <ul className="max-w-7xl list-none space-y-8 border-4 lg:border-6 rounded-xl lg:rounded-3xl p-6">
      {details.map((detail, id) => (
        <li
          key={`detail-${id}`}
          className="text-slate-400 font-semibold text-[10px] xs:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[28px] lg:leading-[30px]"
          dangerouslySetInnerHTML={{ __html:detail }}
        />
      ))}
    </ul>
  </Box>
);

