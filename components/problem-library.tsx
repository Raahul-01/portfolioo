import React from 'react'
import { KeywordTooltip } from './keyword-tooltip'

export function ProblemLibrary() {
  const problems = [
    {
      title: "Problem 1 — Creators waste hours designing thumbnails",
      solution: "I'm building AI Thumbnail Maker, a solution that automates design, segmentation, and layouts.",
    },
    {
      title: "Problem 2 — Students only get marks, not insights",
      solution: "I created a PySpark-powered analytics engine analyzing 10,000+ results.",
    },
    {
      title: "Problem 3 — News is noisy, repetitive, and low quality",
      solution: "I built Omnisphere, an automated news and article generation system.",
    },
    {
      title: "Problem 4 — Manual workflows slow down businesses",
      solution: "I design automation tools that reduce repetitive tasks and increase efficiency.",
    },
  ]

  return (
    <section id="problem-library" className="mb-12 sm:mb-16">
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl font-normal mb-1 text-gray-200">
          Problem Library
        </h2>
        <p className="text-xs sm:text-sm text-gray-500">
          A database of real-world problems I'm exploring.
        </p>
      </div>

      <div className="space-y-3">
        {problems.map((problem, index) => {
          const parts = problem.title.split('—')
          const problemNum = parts[0]?.trim() || ''
          const problemDesc = parts[1]?.trim() || ''
          return (
            <div key={index} className="text-sm sm:text-base leading-relaxed">
              <div className="flex items-start gap-2">
                <span className="text-gray-600 text-xs mt-0.5">{String(index + 1).padStart(2, '0')}</span>
                <div className="flex-1">
                  <span className="text-gray-200">{problemNum}</span>
                  {problemDesc && (
                    <>
                      <span className="text-gray-600 mx-1.5">—</span>
                      <span className="text-gray-400">{problemDesc}</span>
                    </>
                  )}
                  <div className="mt-1.5 text-xs sm:text-sm text-gray-400">
                    {index === 0 && (
                      <>
                        I'm building <KeywordTooltip info="An AI-powered platform that generates professional YouTube thumbnails and posters through intelligent segmentation, background removal, and modular design editing.">AI Thumbnail Maker</KeywordTooltip>, a solution that automates design, segmentation, and layouts.
                      </>
                    )}
                    {index === 1 && (
                      <>
                        I created a <KeywordTooltip info="A distributed data processing framework built on Apache Spark, used for analyzing large-scale datasets with high performance.">PySpark-powered analytics engine</KeywordTooltip> analyzing 10,000+ results.
                      </>
                    )}
                    {index === 2 && (
                      <>
                        I built <KeywordTooltip info="An automated news and article generation system that detects trending topics, fetches real-time articles, and generates fresh content using AI.">Omnisphere</KeywordTooltip>, an automated news and article generation system.
                      </>
                    )}
                    {index === 3 && (
                      <>
                        I design <KeywordTooltip info="Software tools and systems that automate repetitive manual tasks, reducing human effort and increasing business efficiency.">automation tools</KeywordTooltip> that reduce repetitive tasks and increase efficiency.
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

