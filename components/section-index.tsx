export function SectionIndex() {
  const items: { href: string; label: string }[] = []

  return (
    <nav aria-label="Section index" className="mb-8 sm:mb-10">
      <ul className="flex flex-wrap gap-3 text-sm text-gray-400">
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="hover:underline hover:text-white">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}


