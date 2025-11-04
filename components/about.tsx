import React from 'react'
export function About() {
  return (
    <section id="about" className="mb-12 sm:mb-16">
      <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6 flex items-center gap-2">
        <span className="text-gray-500">{"{"}</span>
        <span className="break-words">About</span>
        <span className="text-gray-500">{"}"}</span>
      </h2>

      <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
        <p>
          I'm Rahul Kumar Verma, a developer focused on building practical, high-quality products with a
          bias for shipping. I enjoy working across the stack and keeping things simple, fast, and
          understandable.
        </p>
        <p>
          Currently exploring applied AI, developer tooling, and clean product experiences. I value clear
          thinking, thoughtful execution, and steady progress.
        </p>
        <p>
          Email: <a className="text-blue-400 hover:underline" href="mailto:raahul.yxz@gmail.com">raahul.yxz@gmail.com</a>
        </p>
      </div>
    </section>
  )
}


