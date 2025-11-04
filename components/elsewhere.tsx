export function Elsewhere() {
  const links = [
    { label: "GitHub", href: "https://github.com/raahul-01" },
    { label: "Twitter", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/raahul01" },
  ]

  return (
    <section id="elsewhere" className="mb-12 sm:mb-16">
      <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6 flex items-center gap-2">
        <span className="text-gray-500">{"{"}</span>
        <span className="break-words">Elsewhere</span>
        <span className="text-gray-500">{"}"}</span>
      </h2>

      <div className="flex flex-wrap gap-4 text-sm sm:text-base">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}


