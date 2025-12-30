'use client'

import { useEffect, useRef, useState } from 'react'

export function InteractiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Grid configuration
  const gridSize = 40 // px
  const hoverSize = 100 // px radius
  
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.15]"
      style={{
        backgroundImage: `
          linear-gradient(to right, #333 1px, transparent 1px),
          linear-gradient(to bottom, #333 1px, transparent 1px)
        `,
        backgroundSize: `${gridSize}px ${gridSize}px`,
        // Mask the grid to only show near mouse (optional, or show full grid)
        // maskImage: `radial-gradient(circle ${hoverSize * 3}px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`
      }}
    >
      {/* The "Flashlight" reveal effect for the grid */}
      <div 
        className="absolute inset-0 transition-opacity duration-0"
        style={{
          background: `radial-gradient(circle ${hoverSize * 1.5}px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.1), transparent 70%)`
        }}
      />
    </div>
  )
}
