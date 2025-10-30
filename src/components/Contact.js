import { useEffect } from 'react';
import { Mail } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Box from './Box';

import { Wrapper } from '../utils';

export default Wrapper(Contact, 'contact');

function Contact() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold:0.1 });

  useEffect(() => {
    if(inView) controls.start('show');
  }, [controls, inView]);

  return (
    <Box className="max-w-4xl mx-auto px-6 lg:px-12 xl:px-16 text-center">
      <Box className="flex items-center justify-center mb-16">
        <h2 className="text-3xl font-bold text-slate-100">What's Next?</h2>
      </Box>
      
      <Box className="p-2 rounded-xl hover:shadow-primary hover:bg-cyan-950 hover:shadow-xl transition-all duration-300 md:m-12 flex flex-col sm:flex-row gap-10 overflow-hidden">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity:0, y:100 },
            show: {
              opacity: 1,
              y: 0,
              transition: { type:'tween', duration:1, delay:0.2 },
            },
          }}
          className="flex-[0.8] md:pb-40 mx-2 sm:mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Get In Touch</h2>
          <form
            action="https://getform.io/f/bxozwppa"
            method="POST"
            className="mt-12 gap-4 flex flex-col text-left"
          >
            <span className="font-medium mt-3">Full Name</span>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="p-4 text-white border font-medium"
            />
            <span className="font-medium mt-3">Email Address</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="p-4 text-white border font-medium"
              required
            />
            <span className="font-medium mt-3">Message</span>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-4 border font-medium"
            />
            <button
              type="submit"
              className="cursor-pointer py-3 px-8 w-fit font-bold shadow-md shadow-primary"
            >
              Ping Me
            </button>
          </form>
        </motion.div>
      </Box>
    </Box>
  );
}
