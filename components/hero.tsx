'use client'

import { useEffect, useState } from 'react'
import { Mail, MessageSquare } from 'lucide-react'
import { KeywordTooltip } from './keyword-tooltip'

export function Hero() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
      }))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="my-story" className="mb-12 sm:mb-16">
      {/* Greeting */}
      <div className="text-gray-400 text-sm mb-4 flex items-center gap-2">
        Hey It's me <span className="text-lg">🚀</span>
      </div>

      <div className="flex flex-row items-start justify-between gap-4 sm:gap-6 mb-6">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Rahul Kumar </h1>
            <span className="px-3 py-1 bg-green-500/10 text-green-500 text-sm rounded-full whitespace-nowrap flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Open to work
            </span>
          </div>
          
          {/* Location and Time */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-4">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Bangalore, India
            </span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
              </svg>
              {currentTime || '4:30:04 AM'}
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
          <img
            src="/profile.png"
            alt="Rahul Kumar Verma"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
      </div>

      <div className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-4 mb-6">
        <p className="text-sm sm:text-base">
          I'm Rahul — a <KeywordTooltip info="A software developer who builds applications, systems, and solutions using programming languages and technologies.">developer</KeywordTooltip>, product thinker, and early-stage founder mindset creator. I design <KeywordTooltip info="Products and applications that leverage artificial intelligence and machine learning to provide intelligent, automated solutions.">AI-powered products</KeywordTooltip>, automation workflows, and scalable platforms that solve real-world problems with clarity and efficiency.
        </p>
        
        <div className="space-y-4 mt-6">
          <div>
            <h3 className="text-base font-semibold mb-2 text-gray-200">How I Started Building</h3>
            <p className="text-sm sm:text-base">
              I never began with the goal of collecting certificates or academic achievements. I began because I love <KeywordTooltip info="The process of identifying, analyzing, and finding effective solutions to complex challenges and obstacles.">solving problems</KeywordTooltip>. My curiosity for how systems work slowly turned into building things that make life easier — from <KeywordTooltip info="Tools and software that use artificial intelligence to assist in graphic design, image generation, and visual content creation.">AI design tools</KeywordTooltip> to automated news engines and large-scale analytics dashboards.
            </p>
          </div>
          
          <p className="text-sm sm:text-base">
            I believe <KeywordTooltip info="The application of scientific knowledge for practical purposes, especially in industry and innovation.">technology</KeywordTooltip> should feel effortless. Fast. Useful. Human.
          </p>
          
          <p className="text-sm sm:text-base">
            Every project I build starts with one question:
          </p>
          
          <p className="text-gray-200 font-medium italic text-sm sm:text-base">
            "What <span className="underline decoration-gray-600 underline-offset-2">problem</span> is worth solving today?"
          </p>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <a
          href="#experiments"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
        >
          Explore My Work →
        </a>
        <a
          href="mailto:raahul.inbox@gmail.com"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm"
        >
          Let's Build Something →
        </a>
      </div>
    </section>
  )
}
