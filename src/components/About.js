import Box from './Box';
import SectionHeader from './SectionHeader';

import { Wrapper } from '../utils';

import { profile } from '../assets';

export default Wrapper(About, 'about');

function About() {
  const skills = [
    'JavaScript (ES6+)', 'React / React Native', 'Node.js',
    'TypeScript', 'Python', 'MongoDB',
    'Cloud Run', 'App Engine', 'Cloud Scheduler',
    'Compute Engine',
  ];

  return (
    <Box className="max-w-4xl mx-auto px-6 lg:px-12 xl:px-16">
      <SectionHeader title="About Me" />
      <Box className="grid md:grid-cols-3 gap-12 items-start">
        <Box className="md:col-span-2">
          <Box className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              I’m a <span className="font-semibold text-white">Lead Software Engineer</span> with over{" "}
              <span className="font-semibold text-white">8 years of experience</span> building scalable,
              high-performance web and mobile applications. I specialize in{" "}
              <span className="font-semibold text-white">full-stack development</span>,{" "}
              <span className="font-semibold text-white">DevOps</span>, and{" "}
              <span className="font-semibold text-white">software architecture</span>, helping teams deliver
              reliable, user-focused solutions.
            </p>
            <p>
              From designing modular{" "}
              <span className="font-semibold text-white">React/React Native monorepos</span> to integrating{" "}
              <span className="font-semibold text-white">secure payment systems</span> and engineering{" "}
              <span className="font-semibold text-white">fault-tolerant architectures</span> that ensure{" "}
              uninterrupted service delivery, I thrive on solving complex engineering challenges.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
          </Box>

          <Box className="grid grid-cols-2 gap-2 mt-6 text-sm text-slate-400 font-mono">
            {skills.map(skill => (
              <Box key={skill} className="flex items-center">
                <span className="text-teal-400 mr-3">▸</span>
                {skill}
              </Box>
            ))}
          </Box>
        </Box>

        <Box className="relative group">
          <Box className="relative z-10">
            <img
              src={profile}
              alt="Albert"
              className="w-full max-w-xs rounded filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </Box>
          <Box className="absolute inset-0 border-2 border-teal-400 rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></Box>
        </Box>
      </Box>
    </Box>
  );
};
