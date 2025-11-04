export function TechStack() {
  const technologies = [
    { name: "C++", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { name: "HTML", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
    { name: "CSS", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { name: "JavaScript", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
    { name: "TypeScript", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { name: "React", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
    { name: "Next.js", color: "bg-gray-700/50 text-white border-gray-600" },
    { name: "Python", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { name: "Java", color: "bg-red-500/10 text-red-400 border-red-500/20" },
    { name: "R", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { name: "Firebase", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
    { name: "Supabase", color: "bg-green-500/10 text-green-400 border-green-500/20" },
    { name: "VS Code", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" },
    { name: "Git", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
  ]

  return (
    <section id="tech" className="mb-12 sm:mb-16">
      <h2 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 flex items-center gap-2">
        <span className="text-gray-500">{"{"}</span>
        <span className="break-words">Things I've Learnt & I Love</span>
        <span className="text-gray-500">{"}"}</span>
      </h2>

      <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
        {technologies.map((tech) => (
          <span key={tech.name} className={`px-2 sm:px-3 py-1 sm:py-1.5 text-xs font-medium rounded-md ${tech.color.replace(/\bborder[^\s]*/g, '')} whitespace-nowrap`}>
            {tech.name}
          </span>
        ))}
      </div>

      {/* Work Experience */}
      <div className="mb-4 sm:mb-6">
        <h3 className="text-xs sm:text-sm text-gray-400 mb-3 flex items-center gap-2">
          <span className="text-gray-500">{"{"}</span>
          <span className="break-words">Where I've done my magic</span>
          <span className="text-gray-500">{"}"}</span>
        </h3>
        <div className="bg-gray-900/50 rounded-lg p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-xs font-bold flex-shrink-0">JG</div>
            <div>
              <div className="text-xs sm:text-sm font-medium">Jalan Gaming Studios</div>
              <div className="text-xs text-gray-400">Full Stack Dev Intern</div>
            </div>
          </div>
          <div className="text-xs text-gray-400 mb-2">May 2025 - Sep 2025 | India (Remote)</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 max-w-full overflow-hidden">
        {Array.from({ length: 364 }).map((_, i) => {
          const intensity = Math.random()
          let bgColor = "bg-gray-900"
          if (intensity > 0.7) bgColor = "bg-green-500"
          else if (intensity > 0.5) bgColor = "bg-green-600"
          else if (intensity > 0.3) bgColor = "bg-green-700"
          else if (intensity > 0.1) bgColor = "bg-green-900"

          return <div key={i} className={`w-2 h-2 rounded-sm ${bgColor}`} />
        })}
      </div>
    </section>
  )
}
