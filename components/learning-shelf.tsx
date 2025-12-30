import { KeywordTooltip } from './keyword-tooltip'

export function LearningShelf() {
  const items = [
    "Designing Data-Intensive Applications — Martin Kleppmann",
    "Neural Networks (Zero to Hero) — Andrej Karpathy",
    "Systems Design Primer — Donne Martin",
    "The bitter lesson — Rich Sutton",
    "Just Ship It — Pieter Levels",
  ]

  return (
    <section id="learning-shelf" className="mb-12 sm:mb-16">
      <div className="mb-4">
        <h2 className="text-sm font-normal text-gray-500 uppercase tracking-wider mb-2">
          The Input Stack
        </h2>
        <p className="text-xs text-gray-600">
          Consumption determines output. My diet:
        </p>
      </div>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
            <span className="text-gray-400 dark:text-gray-500 mr-2 font-mono text-xs">0{index + 1}</span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

