import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { KeywordTooltip } from './keyword-tooltip'

export function Projects() {
  const experiments = [
    {
      title: "AI Thumbnail Maker — Automated Design System",
      description:
        "An AI-powered platform that generates professional YouTube thumbnails and posters through intelligent segmentation, background removal, and modular design editing. Built with FastAPI, SAM, EfficientNet, and dynamic overlays — this system turns ideas into polished designs instantly.",
      tech: ["FastAPI", "SAM", "EfficientNet", "OpenCV"],
      image: "/news-platform.jpg",
      live: "#",
      github: "https://github.com/raahul-01",
    },
    {
      title: "Omnisphere — Automated AI News Engine",
      description:
        "A platform that detects trending topics, fetches real-time articles, and generates fresh, high-quality content using Gemini AI. Built with Next.js, FastAPI, Firebase, and News APIs.",
      tech: ["Next.js", "FastAPI", "Firebase", "Gemini AI"],
      image: "/news-platform.jpg",
      live: "#",
      github: "https://github.com/raahul-01",
    },
    {
      title: "Student Result Intelligence Dashboard",
      description:
        "Built using PySpark, Streamlit, Plotly, Matplotlib — this system processes massive datasets and transforms raw marks into beautiful performance insights, detailed statistics, and automated grading.",
      tech: ["PySpark", "Streamlit", "Plotly", "Matplotlib"],
      image: "/news-platform.jpg",
      live: "#",
      github: "https://github.com/raahul-01",
    },
  ]

  return (
    <section id="experiments" className="mb-12 sm:mb-16">
      <div className="mb-4">
        <h2 className="text-base sm:text-lg font-medium mb-1 text-gray-300">
          Experiments
        </h2>
        <p className="text-xs text-gray-600 italic">
          (NOT PROJECTS)
        </p>
        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          A showcase of things I've built, tried, tested, broken, and rebuilt.
        </p>
      </div>

      <div className="space-y-4">
        {experiments.map((experiment, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="text-gray-600 text-xs mt-0.5 font-mono">{String(index + 1).padStart(2, '0')}</span>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-semibold mb-1.5 text-gray-200">
                  {index === 0 && (
                    <>
                      <KeywordTooltip info="An AI-powered platform that generates professional YouTube thumbnails and posters through intelligent segmentation, background removal, and modular design editing. Built with FastAPI, SAM, EfficientNet, and dynamic overlays.">AI Thumbnail Maker</KeywordTooltip> — Automated Design System
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <KeywordTooltip info="A platform that detects trending topics, fetches real-time articles, and generates fresh, high-quality content using Gemini AI. Built with Next.js, FastAPI, Firebase, and News APIs.">Omnisphere</KeywordTooltip> — Automated AI News Engine
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <KeywordTooltip info="A system that processes massive datasets using PySpark, Streamlit, Plotly, and Matplotlib. Transforms raw marks into beautiful performance insights, detailed statistics, and automated grading.">Student Result Intelligence Dashboard</KeywordTooltip>
                    </>
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-2">{experiment.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {experiment.tech.map((t) => (
                    <span key={t} className="text-xs text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                  <a
                    href={experiment.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Live
                  </a>
                  <span className="text-gray-600">•</span>
                  <a
                    href={experiment.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
