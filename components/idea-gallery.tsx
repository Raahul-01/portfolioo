export function IdeaGallery() {
  const ideas = [
    "AI tool that explains complex topics in simple visuals",
    "Smart engine that converts text into product wireframes",
    "Real-time personal health risk predictor",
    "Auto-curated knowledge feed powered by behavior analysis",
    "Marketplace for automated design assets",
  ]

  return (
    <section id="idea-gallery" className="mb-12 sm:mb-16">
      <div className="mb-4">
        <h2 className="text-sm sm:text-base font-normal text-gray-400 mb-1">
          Idea Gallery
        </h2>
        <p className="text-xs text-gray-600">
          Concepts I want to build next.
        </p>
      </div>

      <div className="space-y-2.5">
        {ideas.map((idea, index) => (
          <div key={index} className="flex items-start gap-2 text-sm sm:text-base text-gray-300 leading-relaxed">
            <span className="text-gray-600 text-xs mt-0.5">•</span>
            <span>
              {index === 0 && (
                <>
                  <span className="text-gray-200">AI tool</span> that explains complex topics in simple visuals
                </>
              )}
              {index === 1 && (
                <>
                  <span className="text-gray-200">Smart engine</span> that converts text into product wireframes
                </>
              )}
              {index === 2 && (
                <>
                  <span className="text-gray-200">Real-time</span> personal health risk predictor
                </>
              )}
              {index === 3 && (
                <>
                  <span className="text-gray-200">Auto-curated</span> knowledge feed powered by behavior analysis
                </>
              )}
              {index === 4 && (
                <>
                  <span className="text-gray-200">Marketplace</span> for automated design assets
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

