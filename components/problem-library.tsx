import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { KeywordTooltip } from './keyword-tooltip'

const experiments = [
  {
    title: 'Problem 1 — Creators waste hours designing thumbnails',
    intro: 'I’m building',
    label: 'AI Thumbnail Maker',
    tooltip:
      'An AI-powered platform that generates professional YouTube thumbnails and posters through intelligent segmentation, background removal, and modular design editing.',
    summary:
      '— an automated design system that segments with SAM + EfficientNet and exports ready-to-use thumbnails.',
    stack: [],
    detail:
      'Creators still open heavyweight design tools for every thumbnail. There’s no fast, opinionated system for segmenting subjects and rebuilding layouts, so publishing slows down.',
    live: '#',
    github: 'https://github.com/raahul-01',
  },
  {
    title: 'Problem 2 — Students only get marks, not insights',
    intro: 'I created',
    label: 'a PySpark-powered analytics engine',
    tooltip:
      'A distributed data processing framework built on Apache Spark, used for analyzing large-scale datasets with high performance.',
    summary: 'to analyze 10k+ results and surface signal for mentors.',
    stack: [],
    detail:
      'A single scoreboard doesn’t tell students or mentors where performance drops. No cohort views, no topic-level breakdown, so feedback is blind.',
    live: '#',
    github: 'https://github.com/raahul-01',
  },
  {
    title: 'Problem 3 — News is noisy, repetitive, and low quality',
    intro: 'I built',
    label: 'Omnisphere',
    tooltip:
      'An automated news and article generation system that detects trending topics, fetches real-time articles, and generates fresh content using AI.',
    summary:
      '— an automated news engine that listens to live feeds and publishes high-signal briefs with Gemini AI.',
    stack: [],
    detail:
      'News feeds are noise-heavy, duplicates everywhere, and human editors can’t keep up with emerging spikes in real time.',
    live: '#',
    github: 'https://github.com/raahul-01',
  },
  {
    title: 'Problem 4 — Manual workflows slow down businesses',
    intro: 'I design',
    label: 'automation tools',
    tooltip:
      'Software tools and systems that automate repetitive manual tasks, reducing human effort and increasing business efficiency.',
    summary: 'to kill repetitive tasks and keep teams shipping.',
    stack: [],
    detail:
      'Internal ops teams still copy data between tools and chase status updates manually—huge time sink and very error prone.',
    live: '#',
    github: 'https://github.com/raahul-01',
  },
]

export function ProblemLibrary() {
  return (
    <section id="problem-library" className="mb-12 sm:mb-16">
      <div className="mb-6 space-y-1">
        <h2 className="text-lg sm:text-xl font-normal text-gray-200">Problem Library & Experiments</h2>
        <p className="text-xs sm:text-sm text-gray-500">
          Questions I chase and the experiments I ship to answer them.
        </p>
      </div>

      <div className="space-y-4 border-t border-gray-800 pt-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Experiments</p>
          <p className="text-xs text-gray-600">Built, tested, broken, rebuilt.</p>
        </div>

        <div className="space-y-6">
          {experiments.map((experiment, index) => (
            <div
              key={experiment.title}
              className="text-sm sm:text-base leading-relaxed space-y-3"
            >
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <div>
                  <p className="text-gray-400 text-xs mb-1">#{String(index + 1).padStart(2, '0')}</p>
                  <p className="text-gray-200 font-medium">{experiment.title}</p>
                </div>
                <div className="flex gap-3 text-xs text-gray-500">
                  <a
                    href={experiment.live}
                    className="inline-flex items-center gap-1 hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Live
                  </a>
                  <a
                    href={experiment.github}
                    className="inline-flex items-center gap-1 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-3 h-3" />
                    GitHub
                  </a>
                </div>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm">
                {experiment.intro}{' '}
                <KeywordTooltip info={experiment.tooltip}>{experiment.label}</KeywordTooltip>{' '}
                {experiment.summary}
              </p>
              <p className="text-[11px] sm:text-xs text-gray-500">
                {experiment.detail}
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                {experiment.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-gray-800 px-2 py-0.5">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

