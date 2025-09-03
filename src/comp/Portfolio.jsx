export default function Experience() {
  const experiences = [
    { role: "Video Editor-Full Time", period: "(NOV 2024-Present)", desc: ["Reception-Focused Video Editing", "Outdoor Shoot Setups", "Guided Models", "Eye-Catching Thumbnails"] },
    { role: "Video Editor-Intern", period: "(SEP 2023-OCT 2024)", desc: ["Basics of Editing Software", "Color Correction", "Script Narration"] },
    { role: "Freelance Reporter", period: "(MAR 2023-AUG 2023)", desc: ["at newstamil 24X7"] },
    { role: "Assistant Director", period: "(MAY 2021-FEB 2023)", desc: ["Worked as Assistant Director for Feature Films"] },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-red-500 bg-clip-text text-transparent mb-12">
          WORK EXPERIENCE
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-white/5 border border-purple-500/30 p-6 rounded-xl">
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-purple-500 text-sm mb-3">{exp.period}</p>
              <ul className="text-gray-300 list-disc list-inside space-y-1">
                {exp.desc.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
