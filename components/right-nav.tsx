'use client'

import { useEffect, useMemo, useState } from 'react'

type SectionItem = { id: string; label: string }

export function RightNav() {
  const items: SectionItem[] = useMemo(
    () => [
      { id: 'my-story', label: 'My Story' },
      { id: 'problem-library', label: 'Problem Library' },
      { id: 'experiments', label: 'Experiments' },
      { id: 'founder-playbook', label: 'Founder Playbook' },
      { id: 'idea-gallery', label: 'Idea Gallery' },
      { id: 'timeline', label: 'Timeline' },
      { id: 'learning-shelf', label: 'Learning Shelf' },
      { id: 'elsewhere', label: 'Contact' },
    ],
    []
  )

  const [activeId, setActiveId] = useState<string>('')
  const [showMobileHint, setShowMobileHint] = useState<boolean>(false)

  useEffect(() => {
    const sectionElements = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[]

    if (sectionElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1))

        if (visible[0]) setActiveId(visible[0].target.id)
      },
      {
        root: null,
        rootMargin: '0px 0px -60% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      }
    )

    sectionElements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [items])

  // Show a temporary mobile hint with the current section label on change
  useEffect(() => {
    if (!activeId) return
    setShowMobileHint(true)
    const t = setTimeout(() => setShowMobileHint(false), 1000)
    return () => clearTimeout(t)
  }, [activeId])

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveId(id)
  }

  return (
    <>
      {/* Desktop right nav */}
      <aside className="hidden md:block fixed right-32 lg:right-40 top-1/2 -translate-y-1/2 z-20">
        <nav aria-label="On this page" className="h-full">
          <ul className="flex flex-col gap-2 text-xs sm:text-sm text-gray-400">
            {items.map((item) => {
              const isActive = activeId === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={handleClick(item.id)}
                    className={
                      isActive
                        ? 'text-white font-medium'
                        : 'hover:text-white hover:underline'
                    }
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile section change hint (right side) */}
      <div className={`md:hidden fixed top-20 right-4 z-20 transition-all duration-300 ${showMobileHint ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}`} aria-live="polite" aria-atomic="true">
        <span className="px-3 py-1.5 rounded-full text-xs bg-gray-800/80 text-gray-200 shadow-sm">
          {items.find((i) => i.id === activeId)?.label || ''}
        </span>
      </div>
    </>
  )
}


