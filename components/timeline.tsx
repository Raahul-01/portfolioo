import { KeywordTooltip } from './keyword-tooltip'
import { TextScramble } from './ui/text-scramble'

export function Timeline() {
  const entries = [
    { date: "Now", description: "Scaling Cuddl past 1,000+ active users with behavioral engagement mechanics — Burn, Lore, The Rivalry" },
    { date: "2025", description: "Took CouponLink from idea to 500+ users in under 5 months — live at couponlink.in" },
    { date: "2025", description: "Shipped Cuddl: resolved cross-OEM Android notification fragmentation (ColorOS, MIUI, OxygenOS)" },
    { date: "2025", description: "Architected ANANTKAAL: civic-tech ranking issues by neglect, built solo end to end" },
    { date: "April 2025", description: "Deployed custom quantization for Thumbnail AI (4x cheaper inference)" },
    { date: "Dec 2024", description: "Shipped Omnisphere: autonomous news crawler v1.0" },
    { date: "Early 2024", description: "Commit: 'Ship real products, not demos' — 0 to 1, twice and counting" },
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

