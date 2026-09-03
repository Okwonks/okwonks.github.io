import { useEffect, useState } from 'react';

const links = ['about', 'portfolio', 'experience', 'contact']
  .map((id, i) => ({ id, num:(i+1).toString().padStart(2, '0'), label:id[0].toUpperCase() + id.substring(1) }))

export default function Header() {
  const [state, setState] = useState({ active:'hero', scrolled:false, toggled:false });

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
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      state.scrolled ? 'bg-slate-900/95 backdrop-blur-md' : 'bg-slate-900/90 backdrop-blur-md'
    }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <button 
          onClick={() => {
            setState(prev => ({ ...prev, active:'hero' }));
            window.scrollTo(0, 0);
          }}
          className="text-lg font-semibold text-teal-400 hover:text-teal-300 transition-colors"
        >
          AO
        </button>

        <ul className="hidden md:flex space-x-8">
          {links.map(({ id, num, label }) => (
            <li
              key={id}
              className="text-slate-400 hover:text-teal-400 transition-colors text-sm font-mono"
              onClick={() => setState(prev => ({ ...prev, active:id }))}
            >
              <a href={`#${id}`}>
                <span className="text-teal-400 mr-2">{num}.</span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* TODO add mobile nav */}
      </nav>
    </header>
  );
}
