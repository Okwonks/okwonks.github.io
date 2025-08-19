import SectionHeader from './SectionHeader';

export default function About() {
  const skills = [
    'JavaScript (ES6+)', 'React', 'Node.js', 
    'TypeScript', 'Python', 'MongoDB'
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader number="01" title="About Me" />
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2">
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                Hello! I'm Your Name, a passionate software engineer who enjoys creating things 
                that live on the internet. My interest in web development started back in 2020 
                when I decided to try editing custom themes — turns out hacking together HTML & CSS 
                taught me a lot about the web!
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at a start-up, 
                a huge corporation, and a digital product studio. My main focus these days is 
                building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-6 text-sm text-slate-400 font-mono">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center">
                  <span className="text-teal-400 mr-3">▸</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                alt="Your Name"
                className="w-full max-w-xs rounded filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute inset-0 border-2 border-teal-400 rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
