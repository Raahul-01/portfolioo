import { KeywordTooltip } from './keyword-tooltip'

export function FounderPlaybook() {
  const principles = [
    "Build fast → Learn fast → Improve with user feedback.",
    "Design for humans, not for systems.",
    "AI should automate the boring, so people can do the meaningful.",
    "Good products remove friction — great products remove thinking.",
    "Ship ideas. Don't wait for perfection.",
  ]

  return (
    <section id="founder-playbook" className="mb-12 sm:mb-16">
      <div className="mb-4">
        <span className="text-gray-500 text-xs">{"{"}</span>
        <h2 className="text-base sm:text-lg font-medium inline mx-2 text-gray-200">
          The Founder Playbook
        </h2>
        <span className="text-gray-500 text-xs">{"}"}</span>
        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          My principles for building useful products.
        </p>
      </div>

      <ul className="space-y-3">
        {principles.map((principle, index) => (
          <li key={index} className="text-sm sm:text-base text-gray-300">
            {index === 0 && (
              <>
                <KeywordTooltip info="Rapid development and iteration approach that prioritizes speed over perfection, allowing quick learning from real-world usage.">Build fast</KeywordTooltip> → <KeywordTooltip info="The process of gathering insights and understanding from user interactions, feedback, and data to improve products.">Learn fast</KeywordTooltip> → Improve with user feedback.
              </>
            )}
            {index === 1 && (
              <>
                Design for <KeywordTooltip info="People who will actually use the product, focusing on their needs, behaviors, and experiences rather than technical constraints.">humans</KeywordTooltip>, not for systems.
              </>
            )}
            {index === 2 && (
              <>
                <KeywordTooltip info="Artificial Intelligence - technology that enables machines to perform tasks that typically require human intelligence.">AI</KeywordTooltip> should automate the boring, so people can do the meaningful.
              </>
            )}
            {index === 3 && (
              <>
                <KeywordTooltip info="Well-designed products that effectively solve user problems and provide value.">Good products</KeywordTooltip> remove <KeywordTooltip info="Obstacles, delays, or complications that prevent users from easily achieving their goals.">friction</KeywordTooltip> — great products remove thinking.
              </>
            )}
            {index === 4 && (
              <>
                <KeywordTooltip info="The practice of releasing products, features, or concepts quickly rather than waiting for them to be perfect.">Ship ideas</KeywordTooltip>. Don't wait for <KeywordTooltip info="The state of being flawless or complete, which often delays product launches unnecessarily.">perfection</KeywordTooltip>.
              </>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

