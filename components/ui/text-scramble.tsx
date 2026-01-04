'use client'

import { useEffect, useState, useRef } from 'react'

interface TextScrambleProps {
  text: string
  className?: string
  speed?: number
}

const CHARS = 'AMQRXVZ_+-*/^~&'

export function TextScramble({
  text,
  className = '',
  speed = 40,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startScramble = () => {
    if (isScrambling) return
    setIsScrambling(true)

    let iteration = 0
    clearInterval(intervalRef.current!)

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index]
            }
            // Return random char for unfinished letters
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )

      if (iteration >= text.length) {
        clearInterval(intervalRef.current!)
        setIsScrambling(false)
      }

      iteration += 1 / 2
    }, speed)
  }

  useEffect(() => {
    startScramble()
    return () => clearInterval(intervalRef.current!)
  }, [text])

  return (
    <span className={`relative inline-block group ${className}`}>
      {/* 
        Layer 1: The REAL text.
        Invisible but selectable and accessible.
        Selection works because this element physically exists in the DOM at the right size.
      */}
      <span className="opacity-0 select-text cursor-text pointer-events-auto">
        {text}
      </span>

      {/* 
        Layer 2: The ANIMATED text.
        Absolute positioned over the real text.
        Pointer events none so clicks pass through to Layer 1.
        Aria-hidden so screen readers ignore this garbage text.
      */}
      <span 
        className="absolute top-0 left-0 select-none pointer-events-none whitespace-nowrap" 
        aria-hidden="true"
      >
        {displayText}
      </span>
      
      {/* Trigger hover on the parent container */}
      <span 
        className="absolute inset-0 z-10 block" 
        onMouseEnter={startScramble}
      />
    </span>
  )
}
