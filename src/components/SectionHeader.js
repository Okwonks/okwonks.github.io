import { motion } from 'framer-motion';

import Box from './Box';
import { textVariant } from '../utils';

export default function SectionHeader({ number, title }) {
  return (
    <Box className="flex items-center mb-16">
      <motion.div variants={textVariant()}>
        <h2 className="text-white font-bold md:text-[60px] sm:text-[50px] text-[40px] text-center">{title}</h2>
      </motion.div>
      {/* TODO add animation on this line */}
      <Box className="ml-8 h-px bg-slate-700 flex-1 max-w-xs"></Box>
    </Box>
  );
}
