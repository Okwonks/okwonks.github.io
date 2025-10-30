import { useRef } from 'react';

import {
  About,
  Box,
  Contact,
  Hero,
  Navbar,
  Portfolio,
  Experience,
} from './components';

export default function App() {
  const ref = useRef(null);

  return (
    <Box className="bg-slate-900 text-slate-100 min-h-screen">
      <Navbar />
      <main>
        <Box ref={ref}>
          <Box id="hero"><Hero /></Box>
          <Box id="about"><About /></Box>
          <Box id="portfolio"><Portfolio /></Box>
          <Box id="experience"><Experience /></Box>
          <Box id="contact"><Contact /></Box>
        </Box>
      </main>
      <footer className="py-10 text-center text-slate-400 text-sm">
        <Box className="max-w-6xl mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Albert Oketch. Built with passion and coffee.</p>
        </Box>
      </footer>
    </Box>
  );
}
