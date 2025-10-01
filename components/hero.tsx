'use client'

import { useEffect, useState } from 'react'
import { Mail, MessageSquare } from 'lucide-react'

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
    <section className="mb-12 sm:mb-16">
      {/* Greeting */}
      <div className="text-gray-400 text-sm mb-4 flex items-center gap-2">
        Hey It's me <span className="text-lg">🚀</span>
      </div>

      <div className="flex flex-row items-start justify-between gap-4 sm:gap-6 mb-6">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Rahul Kumar </h1>
            <span className="px-3 py-1 bg-green-500/10 text-green-500 text-sm rounded-full border border-green-500/20 whitespace-nowrap flex items-center gap-2">
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
              Punjab, india
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
            className="w-full h-full rounded-2xl object-cover border-4 border-gray-800"
          />
        </div>
      </div>

      <div className="text-sm sm:text-base text-gray-300 leading-relaxed space-y-4 mb-6">
        <p>
          Yup! I'm a <span className="text-white font-semibold">Full Stack Developer</span>. Big deal, right? But wait... there's more! I'm not just any developer, I love building solutions and solving problems. I enjoy crafting websites with{" "}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-xs sm:text-sm">
            ⚛️ React
          </span>
          ,{" "}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-600/10 text-blue-300 rounded text-xs sm:text-sm">
            📘 TypeScript
          </span>
          ,{" "}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-700/50 text-gray-200 rounded text-xs sm:text-sm">
            ⚡ Express
          </span>
          ,{" "}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-600/10 text-green-400 rounded text-xs sm:text-sm">
            🍃 Spring Boot
          </span>
          {" "}using{" "}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-500/10 text-green-400 rounded text-xs sm:text-sm">
            🔥 MongoDB
          </span>
          ,{" "}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded text-xs sm:text-sm">
            🐬 MySQL
          </span>
          {" "}databases and I live on the{" "}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gray-800 text-white rounded text-xs sm:text-sm">
            ▶️ terminal
          </span>
          {" "}mostly.
        </p>
        
        <p>
          I love both <span className="text-white font-semibold">Development</span> &{" "}
          <span className="text-white font-semibold">Design</span>. So, that means I can create beautiful and functional websites. I'm always looking for new opportunities to learn and grow.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        <a
          href="https://twitter.com/messages/compose?recipient_id=YOUR_TWITTER_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors text-sm"
        >
          <MessageSquare className="w-4 h-4" />
          Twitter DM
        </a>
        <span className="text-gray-600 flex items-center">OR</span>
        <a
          href="mailto:raahul.yxz@gmail.com"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg transition-colors text-sm"
        >
          <Mail className="w-4 h-4" />
          Email Me
        </a>
      </div>
    </section>
  )
}
