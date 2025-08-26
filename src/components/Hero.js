import { motion } from 'framer-motion';

import Box from './Box';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <Box className="max-w-6xl mx-auto px-6">
        <Box className="max-w-4xl">
          <h1 className="font-medium md:text-[60px] sm:text-[50px] text-[40px] ">
            ALBERT OKETCH
          </h1>
        </Box>
        <Box className="">
          <motion.div
            variants={{
              hidden: {},
              show: {
                transition:{
                  staggerChildren: 0.25,
                }
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true, amount:0.5 }}
          >
            {['Building scalable systems.', 'Empowering teams.', 'Solving complex problems.']
              .map((text, idx) => (
                <motion.p
                  key={idx}
                  variants={textVariants()}
                  className="relative leading-relaxed sm:text-xl overflow-hidden"
                >
                  <span className="relative z-10">{text}</span>
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none select-none"
                    style={{
                      textShadow: `
                        0 0 6px rgba(255,255,255,0.8),
                        0 0 12px rgba(255,255,255,0.6),
                        0 0 20px rgba(255,255,255,0.4)
                      `,
                      filter: 'brightness(1.2)',
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration:4, ease:'easeInOut', repeat:Infinity, repeatDelay:1.5 }}
                    animate={{opacity: [0, 1, 1, 0]}}
                  >{text}</motion.span>
                </motion.p>
              ))}
          </motion.div>
        </Box>
      </Box>
    </section>
  );
}

const textVariants = () => ({
  hidden: { y:50, opacity:0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type:'spring', duration:1.25 },
  },
});
