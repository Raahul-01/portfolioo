export function Interests() {
  const interests = [
    { title: "Economic growth", note: "Building useful software that compounds in value." },
    { title: "Entrepreneurship", note: "Shipping quickly, iterating, learning from users." },
    { title: "Climate", note: "Tools and automation that reduce waste and friction." },
    { title: "Housing production", note: "Policy, data, and modeling; streamlining approvals." },
    { title: "Books and ideas", note: "Reading widely, distilling, and applying in code." },
    { title: "Science", note: "AI for research workflows, reproducibility, and discovery." },
  ]

  return (
    <section id="interests" className="mb-12 sm:mb-16">
      <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6 flex items-center gap-2">
        <span className="text-gray-500">{"{"}</span>
        <span className="break-words">Areas of interest</span>
        <span className="text-gray-500">{"}"}</span>
      </h2>

      <ul className="space-y-3">
        {interests.map((item) => (
          <li key={item.title} className="text-sm sm:text-base text-gray-300">
            <span className="font-medium text-white">{item.title}.</span>{" "}
            <span className="text-gray-400">{item.note}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}


