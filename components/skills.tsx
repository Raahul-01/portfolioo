export function Skills() {
  const skills = {
    languages: ["C++", "Java", "R", "Python"],
    frameworks: ["Bootstrap", "Next.js", "React.js"],
    tools: ["Firebase", "Supabase", "Tableau", "IntelliJ IDEA", "Google Cloud", "R Studio", "Oracle", "VS Code"],
    soft: ["Leadership", "Problem-Solving", "Team Player", "Communication", "Project Management", "Adaptability"],
  }

  return (
    <section id="skills" className="mb-16">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <span className="text-gray-500">{"{"}</span>
        Things I've Learnt & I Love
        <span className="text-gray-500">{"}"}</span>
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-3">Languages</h3>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-gray-800 rounded-md text-sm border border-gray-700 hover:border-blue-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-3">Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {skills.frameworks.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-gray-800 rounded-md text-sm border border-gray-700 hover:border-blue-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-3">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-2">
            {skills.tools.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-gray-800 rounded-md text-sm border border-gray-700 hover:border-blue-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-400 mb-3">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.soft.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-gray-800 rounded-md text-sm border border-gray-700 hover:border-blue-500 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
