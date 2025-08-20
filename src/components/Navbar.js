import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Box from './Box';

import { menu, close, open } from '../assets';

const navLinks = ['hero', 'portfolio', 'experience', 'contact']
  .map(l => ({ id:l, title:l.substring(0, 1).toUpperCase() + l.substring(1) }));

export default function Navbar() {
  const [state, setState] = useState({ active:'hero', toggled:false, scrolled:false });

  const isActive = ({ id }) => state.active === id;

  useEffect(() => {
    const onScroll = () => {
      setState(prev => ({ ...prev, scrolled:window.scrollY > 100 }));
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('div[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting) setState(prev => ({ ...prev, active:entry.target.id }));
        })
      },
      { threshold:0.2, rootMargin:'0px 0px -50% 0px' },
    );

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <nav className="w-full flex items-center bg-gradient-to-b from-black sm:bg-none p-8 sm:px-16 sm:py-10 fixed z-40 pointer-events-none">
      <Box className="w-full flex justify-between items-start mx-auto">
        <button
          to="/"
          className="flex items-start"
          onClick={() => {
            setState(prev => ({ ...prev, active:'hero' }));
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[26px] lg:text-[36px] font-bold pointer-events-auto cursor-pointer flex">AO</p>
        </button>
        <ul className="list-none hidden sm:flex flex-col gap-5">
          {navLinks.map(nav => (
            <li
              key={nav.id}
              className={`${isActive(nav) ? 'text-white' : 'text-slate-500'} relative hover:text-white flex items-center text-[18px] lg:text-[24px] font-bold pointer-events-auto cursor-pointer`}
              onClick={() => setState(prev => ({ ...prev, active:nav.id }))}
            >
              {isActive(nav) && <Box className="fixed right-10 w-2 h-6 lg:h-8 bg-slate-800" />}
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <Box className="sm:hidden flex flex-1 justify-end items-center">
         <MenuIcon toggled={state.toggled} onClick={() => setState(prev => ({ ...prev, toggled:!prev.toggled }))} /> 
        </Box>
        <Box className={`${state.toggled ? 'flex' : 'hidden'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl`}>
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {navLinks.map(nav => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-[16px] ${isActive(nav) ? 'text-secondary' : 'text-quaternary'}`}
                onClick={() => setState(prev => ({ ...prev, toggled:!prev.toggled, active:nav.id }))}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </nav>
  );
}

const MenuIcon = ({ onClick, toggled }) => (
  <img
    src={toggled ? close : menu}
    alt="menu"
    className="w-[28px] h-[28px] object-contain pointer-events-auto cursor-pointer"
    onClick={onClick}
  />
);
