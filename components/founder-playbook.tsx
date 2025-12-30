import { KeywordTooltip } from './keyword-tooltip'

export function FounderPlaybook() {
  const models = [
    {
      title: "Speed is a feature",
      desc: "If you're not embarrassed by v1, you shipped too late. Momentum solves more problems than deliberation."
    },
    {
      title: "Complexity is a tax",
      desc: "Every line of code you write is a liability. The best engineer deletes code. I optimize for subtraction."
    },
    {
      title: "User psychology > Tech stack",
      desc: "Nobody cares if it's written in Rust. They care if it solves their pain in < 3 seconds."
    },
    {
      title: "Distribution first",
      desc: "Building is easy. Getting people to care is hard. Bake distribution into the product DNA."
    },
  ]

  return (
    <section id="founder-playbook" className="mb-12 sm:mb-16">
      <div className="mb-6">
        <span className="text-gray-600 text-xs font-mono">{"// The Operating System"}</span>
        <h2 className="text-lg sm:text-xl font-normal text-gray-200 mt-1">
          Mental Models.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {models.map((model, index) => (
          <div key={index} className="p-4 bg-white/5 border border-white/5 rounded-lg hover:border-white/10 transition-colors">
            <h3 className="text-sm font-medium text-gray-200 mb-2 font-mono">
              0{index + 1}. {model.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              {model.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

