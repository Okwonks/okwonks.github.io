import {
  About,
  Experience,
  Header,
  Hero,
  Portfolio,
} from './components';

import './App.css';

export default function App() {
  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Experience />
      </main>
      <footer className="py-10 text-center text-slate-400 text-sm">
        <div className="max-w-6xl mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Albert Oketch. Built with passion and coffee.</p>
        </div>
      </footer>
    </div>
  )
}
