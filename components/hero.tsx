'use client'

import { useEffect, useState } from 'react'
import { Mail, MessageSquare } from 'lucide-react'
import { KeywordTooltip } from './keyword-tooltip'
import { TextScramble } from './ui/text-scramble'

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
      <div className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex items-center gap-2">
        <span className="text-lg">⚡</span> Engineer. Builder. Obsessive.
      </div>

      <div className="flex flex-row items-start justify-between gap-4 sm:gap-6 mb-6">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              <TextScramble text="Rahul Kumar" />
            </h1>
            <span className="px-3 py-1 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm rounded-full whitespace-nowrap flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
              Building scalable engines
            </span>
          </div>
          
          {/* Location and Time */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4 font-mono">
            <span className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors cursor-default">
              BLR, India
            </span>
            <span className="text-gray-400 dark:text-gray-700">/</span>
            <span className="flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors cursor-default">
              {currentTime || '00:00:00'}
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 group">
          <div className="relative w-full h-full rounded-2xl overflow-hidden ring-1 ring-black/10 dark:ring-white/10 group-hover:ring-black/30 dark:group-hover:ring-white/30 transition-all duration-500">
            <img
              src="/profile.png"
              alt="Rahul Kumar Verma"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      <div className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed space-y-6 mb-8">
        <p>
          I don't just write code; I engineer <span className="text-black dark:text-white font-medium">clarity</span> out of chaos. 
          Most developers build features. I build <KeywordTooltip info="Self-sustaining software architectures that require minimal maintenance and scale efficiently.">systems</KeywordTooltip> that allow others to move faster.
        </p>
        
        <div className="pl-4 border-l-2 border-gray-200 dark:border-gray-800 space-y-4">
          <p className="italic text-gray-500 dark:text-gray-400">
            "The code is not the asset. The <span className="text-gray-900 dark:text-gray-200 not-italic font-medium">insight</span> behind the code is the asset."
          </p>
        </div>

        <p>
          My work creates leverage. Whether it's optimizing a <KeywordTooltip info="Distributed data processing engine handling terabytes of data.">PySpark pipeline</KeywordTooltip> to process 10k+ records in seconds, or designing an <KeywordTooltip info="A minimalist, high-performance UI framework focused on user intent.">AI interface</KeywordTooltip> that feels like magic—I am obsessed with the <span className="underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4 decoration-1">0.1% details</span> that majority ignore.
        </p>
      </div>

      {/* CTA Buttons - High Signal */}
      <div className="flex flex-wrap gap-3 mb-6">
        <a
          href="#problem-library"
          className="group flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-700 dark:hover:bg-gray-200 rounded-lg transition-all font-medium text-sm"
        >
          View The Case Studies
          <span className="group-hover:translate-x-0.5 transition-transform">→</span>
        </a>
        <a
          href="mailto:raahul.inbox@gmail.com"
          className="flex items-center gap-2 px-5 py-2.5 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 rounded-lg transition-all text-sm text-gray-700 dark:text-gray-200"
        >
          Work With Me
        </a>
      </div>
    </section>
  )
}
