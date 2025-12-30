'use client'

import { useEffect, useMemo, useState, useRef } from 'react'
import { cn } from '@/lib/utils' // Assuming you have a utils file, otherwise I'll mock it or use template literal

type SectionItem = { id: string; label: string }

export function RightNav() {
  const items: SectionItem[] = useMemo(
    () => [
      { id: 'my-story', label: 'My Story' },
      { id: 'problem-library', label: 'Problem Library' },
      { id: 'founder-playbook', label: 'Founder Playbook' },
      { id: 'timeline', label: 'Roadmap' },
      { id: 'learning-shelf', label: 'Learning Shelf' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  )

  const [activeId, setActiveId] = useState<string>('')
  const [indicatorTop, setIndicatorTop] = useState<number>(0)
  
  // Ref to track the nav list to calculate indicator position locally
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    // 1. Optimized Observer: Only intersect relative to viewport center
    const observer = new IntersectionObserver(
      (entries) => {
        // Find which section is most visible
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio) // Sort by most visible

        if (visibleSections.length > 0) {
          const targetId = visibleSections[0].target.id
          setActiveId(targetId)
        }
      },
      {
        rootMargin: '-40% 0px -40% 0px', // Active only when in middle 20% of screen
        threshold: [0, 0.2, 0.5],
      }
    )

    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  // 2. Update Indicator Position when activeId changes
  useEffect(() => {
    if (!listRef.current || !activeId) return

    const activeIndex = items.findIndex(item => item.id === activeId)
    if (activeIndex === -1) return

    // Rough calculation: item height + gap. 
    // Assuming each li is ~24px height + 8px gap = 32px step. 
    // Ideally we measure the DOM node but a constrained calculation is faster/optimized.
    const ITEM_HEIGHT = 28 // Approximate height of text item
    const ITEM_GAP = 8 
    
    // Better: Get actual DOM element position relative to UL
    const activeItemEl = listRef.current.children[activeIndex] as HTMLElement
    if (activeItemEl) {
      setIndicatorTop(activeItemEl.offsetTop + (activeItemEl.offsetHeight / 2))
    }
    
  }, [activeId, items])

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveId(id)
  }

  return (
    <aside className="hidden md:block fixed right-12 lg:right-20 top-1/2 -translate-y-1/2 z-20">
      <nav aria-label="On this page" className="relative pr-4">
        {/* The Sliding Indicator Track */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-800" />
        
        {/* The Active Pill */}
        <div 
          className="absolute right-[-1px] w-0.5 h-6 bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.3)] transition-all duration-500 ease-out rounded-full"
          style={{ 
            top: indicatorTop,
            transform: 'translateY(-50%)',
            opacity: activeId ? 1 : 0
          }}
        />

        <ul ref={listRef} className="flex flex-col gap-3 text-xs sm:text-sm text-right">
          {items.map((item) => {
            const isActive = activeId === item.id
            return (
              <li key={item.id} className="relative group">
                <a
                  href={`#${item.id}`}
                  onClick={handleClick(item.id)}
                  className={`
                    block transition-all duration-300 ease-out px-4 py-1
                    ${isActive 
                      ? 'text-white translate-x-0 scale-105 font-medium' 
                      : 'text-gray-500 hover:text-gray-300 hover:translate-x-1'
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
