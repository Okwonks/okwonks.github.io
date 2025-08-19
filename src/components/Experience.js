import SectionHeader from './SectionHeader';

export default function Experiences() {
  const experiences = [
    {
      title: 'Senior Frontend Engineer',
      company: 'Company Name',
      dates: '2022 - Present',
      description: 'Build and maintain critical components used to construct the frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers.',
      tech: ['JavaScript', 'TypeScript', 'React', 'Node.js']
    },
    {
      title: 'Frontend Developer',
      company: 'Previous Company',
      dates: '2020 - 2022',
      description: 'Developed and styled interactive web applications for various clients. Collaborated with designers and other developers to create seamless user experiences.',
      tech: ['JavaScript', 'React', 'SCSS', 'WordPress']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader number="02" title="Where I've Worked" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceItem = ({ title, company, dates, description, tech }) => (
  <div className="group p-6 rounded-lg hover:bg-slate-800/50 transition-all duration-300">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
      <h3 className="text-xl font-semibold text-slate-100">
        {title} <span className="text-teal-400">@ {company}</span>
      </h3>
      <span className="text-slate-400 font-mono text-sm mt-2 md:mt-0">{dates}</span>
    </div>
    <p className="text-slate-400 leading-relaxed mb-4">{description}</p>
    <div className="flex flex-wrap gap-3">
      {tech.map((techItem) => (
        <span 
          key={techItem}
          className="bg-teal-400/10 text-teal-400 px-3 py-1 rounded-full text-xs font-mono"
        >
          {techItem}
        </span>
      ))}
    </div>
  </div>
);
