import { KeywordTooltip } from './keyword-tooltip'

export function Timeline() {
  const entries = [
    { date: "April 2025", description: "Optimizing AI Thumbnail Maker's segmentation accuracy" },
    { date: "Feb 2025", description: "Integrated SAM model → 40% faster rendering" },
    { date: "Jan 2025", description: "PySpark analytics engine scaled to 10k+ records" },
    { date: "Dec 2024", description: "Completed Omnisphere's real-time news pipeline" },
    { date: "Oct 2024", description: "Built ML model for heart disease prediction" },
    { date: "Early 2024", description: "Started my journey of building real products" },
  ]

  return (
    <section id="timeline" className="mb-12 sm:mb-16">
      <div className="mb-4">
        <h2 className="text-base sm:text-lg font-medium text-gray-200 mb-1">
          Build-in-Public Timeline
        </h2>
        <div className="h-px w-12 bg-gray-700 mt-2"></div>
      </div>

      <div className="space-y-2.5">
        {entries.map((entry, index) => (
          <div key={index} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
            <span className="text-gray-500 text-xs font-mono mt-0.5 whitespace-nowrap">{entry.date}</span>
            <span className="text-gray-400 flex-1">
              {index === 0 && (
                <>
                  Optimizing <KeywordTooltip info="An AI-powered platform that generates professional YouTube thumbnails and posters through intelligent segmentation, background removal, and modular design editing.">AI Thumbnail Maker</KeywordTooltip>'s segmentation accuracy
                </>
              )}
              {index === 1 && (
                <>
                  Integrated <KeywordTooltip info="Segment Anything Model - a powerful AI model by Meta that can segment any object in an image with high accuracy.">SAM model</KeywordTooltip> → 40% faster rendering
                </>
              )}
              {index === 2 && (
                <>
                  <KeywordTooltip info="A distributed data processing framework built on Apache Spark, used for analyzing large-scale datasets with high performance.">PySpark analytics engine</KeywordTooltip> scaled to 10k+ records
                </>
              )}
              {index === 3 && (
                <>
                  Completed <KeywordTooltip info="An automated news and article generation system that detects trending topics, fetches real-time articles, and generates fresh content using AI.">Omnisphere</KeywordTooltip>'s real-time news pipeline
                </>
              )}
              {index === 4 && (
                <>
                  Built <KeywordTooltip info="Machine Learning model - an algorithm that learns patterns from data to make predictions or decisions.">ML model</KeywordTooltip> for heart disease prediction
                </>
              )}
              {index === 5 && (
                <>
                  Started my journey of building <KeywordTooltip info="Actual working software applications and systems that solve real problems and provide value to users.">real products</KeywordTooltip>
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

