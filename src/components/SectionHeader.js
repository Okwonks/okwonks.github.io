export default function SectionHeader({ number, title }) {
  return (
    <div className="flex items-center mb-16">
      <span className="text-teal-400 font-mono text-xl mr-5">{number}.</span>
      <h2 className="text-3xl font-bold text-slate-100">{title}</h2>
      <div className="ml-8 h-px bg-slate-700 flex-1 max-w-xs"></div>
    </div>
  );
}
