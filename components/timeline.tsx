import { KeywordTooltip } from './keyword-tooltip'
import { TextScramble } from './ui/text-scramble'

export function Timeline() {
  const entries = [
    { date: "Late 2025", description: "Projected: Predictive Health Engine (v1 Launch)" },
    { date: "Mid 2025", description: "R&D: Graph-based Knowledge Feed using localized LLMs" },
    { date: "April 2025", description: "Deployed custom quantization for Thumbnail AI (4x cheaper inference)" },
    { date: "Feb 2025", description: "Re-engineered segmentation pipeline with SAM-B + ONNX" },
    { date: "Jan 2025", description: "Scaled PySpark cluster to handle 50GB+ daily student logs" },
    { date: "Dec 2024", description: "Shipped Omnisphere: Autonomous news crawler v1.0" },
    { date: "Oct 2024", description: "Published ML research on cardiovascular risk prediction" },
    { date: "Early 2024", description: "Commit: 'Build one production-grade system every month'" },
  ]

  return (
    <section id="timeline" className="mb-12 sm:mb-16">
      <div className="mb-4">
        <h2 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-200 mb-1">
          <TextScramble text="Journey & Roadmap" />
        </h2>
        <div className="h-px w-12 bg-gray-300 dark:bg-gray-700 mt-2"></div>
      </div>

      <div className="space-y-2.5">
        {entries.map((entry, index) => (
          <div key={index} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed">
            <span className={`text-xs font-mono mt-0.5 whitespace-nowrap ${index < 2 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-500'}`}>
              {entry.date}
            </span>
            <span className="text-gray-700 dark:text-gray-400 flex-1">
               {entry.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

