import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { KeywordTooltip } from './keyword-tooltip'
import { SpotlightCard } from './ui/spotlight-card'
import { TextScramble } from './ui/text-scramble'

const experiments = [
  {
    title: 'Automating high-fidelity image segmentation',
    intro: 'Engineered',
    label: 'AI Thumbnail System',
    tooltip: 'A production-grade pipeline combining Segment Anything Model (SAM) with custom heuristics for subject isolation.',
    summary: 'that reduced design time by 90% using computer vision.',
    stack: ['Python', 'Torch', 'FastAPI', 'React'],
    detail: 'Solved the "hair-matting" edge case by fine-tuning SAM on a custom dataset of 5,000+ YouTube thumbnails. Reduced inference time from 4s to 800ms using quantized ONNX runtime.',
    live: '#',
    github: 'https://github.com/raahul-01',
  },
  {
    title: 'Distributed analytics for 10k+ concurrent users',
    intro: 'Architected',
    label: 'Edu-Tech Data Lake',
    tooltip: 'A scalable ETL pipeline processing student performance data in real-time.',
    summary: 'to kill the "blind feedback" loop for mentors.',
    stack: ['PySpark', 'Airflow', 'Postgres', 'Redis'],
    detail: 'Mentors needed signal, not noise. Built a rolling-window aggregation engine in PySpark that surfaces student "stuck points" with < 5min latency. Handled 50GB daily ingest.',
    live: '#',
    github: 'https://github.com/raahul-01',
  },
  {
    title: 'Autonomous news aggregation at scale',
    intro: 'Built',
    label: 'Omnisphere Engine',
    tooltip: 'An event-driven content engine that scrapes, clusters, and summarizes news using LLMs.',
    summary: 'that outpaces human editors during breaking events.',
    stack: ['Node.js', 'Puppeteer', 'OpenAI API', 'Vector DB'],
    detail: 'Designed a self-healing crawler that bypasses anti-bot measures. Implemented semantic clustering (DBSCAN) to group duplicate stories before summarizing them with GPT-4.',
    live: '#',
    github: 'https://github.com/raahul-01',
  },
]

export function ProblemLibrary() {
  return (
    <section id="problem-library" className="mb-12 sm:mb-16">
      <div className="mb-6 space-y-1">
        <h2 className="text-lg sm:text-xl font-normal text-gray-900 dark:text-gray-200">
          <TextScramble text="Architectural Case Studies" />
        </h2>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-500">
          Engineering clarity out of chaos. 
        </p>
      </div>

      <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">Selected Works</p>
        </div>

        <div className="space-y-0">
          {experiments.map((experiment, index) => (
            <div key={experiment.title} className="group py-4 border-b border-gray-400 dark:border-gray-700 last:border-0">
              <div className="text-sm sm:text-base leading-relaxed space-y-3">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <p className="text-gray-900 dark:text-gray-200 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                      <span className="text-xs mr-2">0{index + 1}.</span>
                      {experiment.title}
                    </p>
                  </div>
                  <div className="flex gap-3 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={experiment.live}
                      className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live
                    </a>
                    <a
                      href={experiment.github}
                      className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      GitHub
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  {experiment.intro}{' '}
                  <KeywordTooltip info={experiment.tooltip}>{experiment.label}</KeywordTooltip>{' '}
                  {experiment.summary}
                </p>
                <p className="text-[11px] sm:text-xs text-gray-500">
                  {experiment.detail}
                </p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                  {experiment.stack.map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-gray-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

