import { KeywordTooltip } from './keyword-tooltip'

export function LearningShelf() {
  const items = [
    "Zero to One — Peter Thiel",
    "The Lean Startup — Eric Ries",
    "Think Fast, Think Slow — Daniel Kahneman",
    "AI & Machine Learning Fundamentals — NPTEL",
    "Data Science & ML Programs — LinkedIn Learning",
  ]

  return (
    <section id="learning-shelf" className="mb-12 sm:mb-16">
      <div className="mb-4">
        <h2 className="text-sm font-normal text-gray-500 uppercase tracking-wider mb-2">
          Learning Shelf
        </h2>
        <p className="text-xs text-gray-600">
          Books, courses, and people who shaped my thinking:
        </p>
      </div>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="text-sm sm:text-base text-gray-300">
            {index === 0 && (
              <>
                <KeywordTooltip info="A book by Peter Thiel about building startups that create something new rather than competing in existing markets.">Zero to One</KeywordTooltip> — Peter Thiel
              </>
            )}
            {index === 1 && (
              <>
                The <KeywordTooltip info="A methodology for developing businesses and products that aims to shorten product development cycles and rapidly discover if a proposed business model is viable.">Lean Startup</KeywordTooltip> — Eric Ries
              </>
            )}
            {index === 2 && (
              <>
                <KeywordTooltip info="A book by Daniel Kahneman exploring the two systems of thinking: fast, intuitive thinking and slow, deliberate thinking.">Think Fast, Think Slow</KeywordTooltip> — Daniel Kahneman
              </>
            )}
            {index === 3 && (
              <>
                <KeywordTooltip info="Artificial Intelligence and Machine Learning - technologies that enable computers to learn and make decisions from data.">AI & Machine Learning</KeywordTooltip> Fundamentals — NPTEL
              </>
            )}
            {index === 4 && (
              <>
                <KeywordTooltip info="Data Science and Machine Learning - interdisciplinary fields that use scientific methods, processes, and algorithms to extract knowledge from data.">Data Science & ML</KeywordTooltip> Programs — LinkedIn Learning
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

