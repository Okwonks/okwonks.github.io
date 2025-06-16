import { motion } from 'framer-motion';

export default function Wrapper(Component, name) {
  return () => (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once:true, amount:0.5 }}
      className='px-0 2xl:px-60 py-10 2xl:py-16 max-w-full mx-auto relative z-0'
    >
      <span className="section-span" id={name}>
        &nbsp;
      </span>
      <Component />
    </motion.section>
  );
}
