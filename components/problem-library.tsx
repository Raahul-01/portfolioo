import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { KeywordTooltip } from './keyword-tooltip'
import { SpotlightCard } from './ui/spotlight-card'
import { TextScramble } from './ui/text-scramble'

type Experiment = {
  title: string
  intro: string
  label: string
  tooltip: string
  summary: string
  detail: string
  stack: string[]
  live?: string
  github?: string
}

const selectedWorks: Experiment[] = [
  {
    title: 'Rebuilding the interaction model for couples apps',
    intro: 'Built and scaled',
    label: 'Cuddl',
    tooltip: 'A couples app built around behavioral engagement mechanics — Burn, Lore, The Rivalry — instead of feeds and streaks.',
    summary: 'to 1,000+ active users by designing behavioral engagement mechanics instead of another feed.',
    detail: 'Most couples apps default to feeds and streaks. I designed variable-reward mechanics — Burn, Lore, The Rivalry — grounded in loss-aversion and scarcity, then resolved cross-OEM Android notification fragmentation (ColorOS, MIUI, OxygenOS) to ship it reliably.',
    stack: ['Flutter', 'Firebase', 'Product Strategy', 'Behavioral Design'],
    github: 'https://github.com/raahul-01',
  },
  {
    title: 'Building the home creator coupon codes never had',
    intro: 'Took',
    label: 'CouponLink',
    tooltip: 'A three-sided marketplace connecting shoppers, creators, and brands around creator discount codes.',
    summary: 'from idea to 500+ users in under 5 months by fixing a discovery gap, not building another app.',
    detail: 'Creator discount codes were scattered across Reels, Stories, and bios with no home. I designed a three-sided marketplace connecting shoppers, creators, and brands — live at couponlink.in.',
    stack: ['Product Strategy', 'Marketplace Design', 'Go-to-Market'],
    live: 'https://couponlink.in',
  },
  {
    title: 'Ranking civic issues by neglect, not headlines',
    intro: 'Architected',
    label: 'ANANTKAAL',
    tooltip: 'A civic-tech platform that ranks public issues by how long they have been ignored — structurally immune to news-cycle manipulation.',
    summary: ', a civic-tech platform that ranks public issues by how long they have been ignored — structurally immune to news-cycle manipulation.',
    detail: 'Most civic platforms rank by recency, which rewards outrage over real neglect. I designed the full system — data model, ranking logic, user flows — solo, end to end.',
    stack: ['Systems Design', 'Civic Tech', 'Architecture'],
    github: 'https://github.com/raahul-01',
  },
]

const technicalDepth: Experiment[] = [
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

function ExperimentRow({ experiment, index }: { experiment: Experiment; index: number }) {
  return (
    <div className="group py-4 border-b border-gray-400 dark:border-gray-700 last:border-0">
      <div className="text-sm sm:text-base leading-relaxed space-y-3">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <p className="text-gray-900 dark:text-gray-200 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
              <span className="text-xs mr-2">0{index + 1}.</span>
              {experiment.title}
            </p>
          </div>
          <div className="flex gap-3 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
            {experiment.live && (
              <a
                href={experiment.live}
                className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Live
              </a>
            )}
            {experiment.github && (
              <a
                href={experiment.github}
                className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-3 h-3" />
                GitHub
              </a>
            )}
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
  )
}

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
          {selectedWorks.map((experiment, index) => (
            <ExperimentRow key={experiment.title} experiment={experiment} index={index} />
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-8">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 dark:text-gray-500">Technical Depth</p>
        </div>

        <div className="space-y-0">
          {technicalDepth.map((experiment, index) => (
            <ExperimentRow key={experiment.title} experiment={experiment} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
