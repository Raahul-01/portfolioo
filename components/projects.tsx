import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "SecureZPA",
      description:
        "An AI-powered cybersecurity platform that automates vulnerability detection and provides real-time threat intelligence using machine learning algorithms.",
      tech: ["Next.js", "FastAPI", "TensorFlow", "PostgreSQL"],
      image: "/cybersecurity-dashboard.png",
      live: "#",
      github: "https://github.com/raahul-01",
    },
    {
      title: "Omnisphere",
      description:
        "Architected an intelligent news ecosystem, leveraging AI to uncover emerging trends, aggregate real-time data, and craft compelling articles with Gemini AI.",
      tech: ["Next.js", "FastAPI", "Firebase", "Gemini AI"],
      image: "/news-platform.jpg",
      live: "#",
      github: "https://github.com/raahul-01",
    },
  ]

  const inProgress = [
    {
      title: "AI Thumbnail Maker",
      description:
        "Spearheaded a visionary AI system that generates eye-catching, high-impact YouTube thumbnails and posters, transforming user prompts into artistic output.",
      tech: ["Diffusers", "Transformers", "OpenCV", "FastAPI"],
    },
  ]

  return (
    <section id="projects" className="mb-12 sm:mb-16">
      <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6 flex items-center gap-2">
        <span className="text-gray-500">{"{"}</span>
        <span className="break-words">Things I've Built</span>
        <span className="text-gray-500">{"}"}</span>
      </h2>

      <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900/30 border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-gray-900">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-48 md:h-full object-cover"
                />
              </div>
              <div className="flex-1 p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-3 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded whitespace-nowrap">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs sm:text-sm text-blue-400 hover:underline"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs sm:text-sm text-blue-400 hover:underline"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6 flex items-center gap-2">
        <span className="text-gray-500">{"{"}</span>
        <span className="break-words">Projects in works</span>
        <span className="text-gray-500">{"}"}</span>
      </h2>

      <div className="space-y-4">
        {inProgress.map((project, index) => (
          <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 sm:p-5">
            <h3 className="text-base sm:text-lg font-semibold mb-2">{project.title}</h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-3 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 sm:mt-8 text-center">
        <a
          href="https://github.com/raahul-01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs sm:text-sm text-blue-400 hover:underline inline-flex items-center gap-1"
        >
          More Projects →
        </a>
      </div>
    </section>
  )
}
