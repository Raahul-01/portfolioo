export function Elsewhere() {
  const links = [
    { label: "GitHub", href: "https://github.com/raahul-01" },
    { label: "LinkedIn", href: "https://linkedin.com/in/raahul01" },
  ]

  return (
    <section id="elsewhere" className="mb-12 sm:mb-16">
      <div className="mb-4">
        <h2 className="text-lg sm:text-xl font-light text-gray-300 mb-1">
          Contact
        </h2>
      </div>

      <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
        <p>
          Let's <span className="text-gray-200">connect</span> to <span className="underline decoration-gray-600 underline-offset-2">build</span> something <span className="text-gray-200">impactful</span>.
        </p>
        <p>
          📧 <a href="mailto:raahul.inbox@gmail.com" className="text-blue-400 hover:underline">raahul.inbox@gmail.com</a>
        </p>
        <div className="flex flex-wrap gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              🔗 {l.label}
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-xs sm:text-sm">
          Open to collaborations, product ideas, startup discussions, and AI experiments.
        </p>
      </div>
    </section>
  )
}


