import { useRef } from 'react';

import { Box, Hero, Navbar, Portfolio } from './components';

export default function App() {
  const ref = useRef(null);

  return (
    <Box className="relative z-0 bg-primary">
      <Navbar />
      <Box className="wrapper" ref={ref}>
        <Box id="hero" className="z-10">
          <Hero />
        </Box>
        <Box id="portfolio" className="relative z-30 bg-primary mt-[-2px]">
          <Portfolio />
        </Box>
        <Box id="experience" className="relative z-30 bg-primary">
          <h1>TODO</h1>
        </Box>
        <Box id="contact" className="relative z-30 bg-primary">

        </Box>
      </Box>
    </Box>
  );
}
