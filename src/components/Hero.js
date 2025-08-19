export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          <h3 className="text-teal-400 font-mono text-base mb-5 animate-fade-in-up">
            Hi, my name is
          </h3>
          <h1 className="text-5xl md:text-7xl font-bold mb-3 animate-fade-in-up animation-delay-100">
            Albert.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-6 animate-fade-in-up animation-delay-200">
            I build things for the web.
          </h2>
          <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-12 animate-fade-in-up animation-delay-300">
            I'm a software engineer specializing in building (and occasionally designing) 
            exceptional digital experiences. Currently, I'm focused on building accessible, 
            human-centered products.
          </p>
          <a 
            href="mailto:your.email@example.com"
            className="inline-block border border-teal-400 text-teal-400 px-8 py-4 rounded hover:bg-teal-400/10 transition-all hover:-translate-y-1 font-mono text-sm animate-fade-in-up animation-delay-400"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
