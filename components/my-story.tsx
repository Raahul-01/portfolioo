export function MyStory() {
  return (
    <section id="my-story" className="mb-12 sm:mb-16">
      <h2 className="text-base sm:text-lg font-medium mb-4 sm:mb-6 flex items-center gap-2">
        <span className="text-gray-500">{"{"}</span>
        <span className="break-words">My Story</span>
        <span className="text-gray-500">{"}"}</span>
      </h2>

      <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
        <div>
          <h3 className="text-lg font-semibold mb-3 text-gray-200">How I Started Building</h3>
          <p>
            I never began with the goal of collecting certificates or academic achievements. I began because I love <span className="underline decoration-gray-600 underline-offset-2">solving problems</span>. My curiosity for how systems work slowly turned into building things that make life easier — from AI design tools to automated news engines and large-scale analytics dashboards.
          </p>
        </div>
        
        <p>
          I believe <span className="text-gray-200">technology</span> should feel <span className="underline decoration-gray-600 underline-offset-2">effortless</span>. Fast. Useful. Human.
        </p>
        
        <p>
          Every project I build starts with one question:
        </p>
        
        <p className="text-gray-200 font-medium italic">
          "What <span className="underline decoration-gray-600 underline-offset-2">problem</span> is worth solving today?"
        </p>
      </div>
    </section>
  )
}

