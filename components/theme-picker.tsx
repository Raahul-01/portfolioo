"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemePicker() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const hasSeenPicker = sessionStorage.getItem("theme-picker-seen")
    if (!hasSeenPicker) {
      setIsOpen(true)
    }
  }, [])

  const handleSelect = (theme: "light" | "dark") => {
    setTheme(theme)
    sessionStorage.setItem("theme-picker-seen", "true")
    setIsOpen(false)
  }

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-zinc-950 border border-white/10 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        <div className="text-center mb-8">
          <p className="text-blue-500 text-xs font-mono mb-2 uppercase tracking-widest">System Initialization</p>
          <h2 className="text-xl font-medium text-white">Select Interface Mode</h2>
          <p className="text-zinc-400 text-sm mt-2">Choose your preferred viewing experience.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleSelect("light")}
            className="group relative p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-white hover:border-transparent transition-all duration-300 flex flex-col items-center gap-4 hover:scale-105 active:scale-95"
          >
            <div className="p-3 rounded-full bg-zinc-900 group-hover:bg-zinc-100 transition-colors">
              <Sun className="w-6 h-6 text-zinc-400 group-hover:text-zinc-900" />
            </div>
            <span className="text-zinc-400 font-medium group-hover:text-zinc-900">Light Mode</span>
          </button>

          <button
            onClick={() => handleSelect("dark")}
            className="group relative p-6 rounded-xl border border-white/5 bg-white/5 hover:bg-zinc-900 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center gap-4 hover:scale-105 active:scale-95"
          >
            <div className="p-3 rounded-full bg-zinc-900 group-hover:bg-blue-500/20 transition-colors">
              <Moon className="w-6 h-6 text-zinc-400 group-hover:text-blue-400" />
            </div>
            <span className="text-zinc-400 font-medium group-hover:text-white">Dark Mode</span>
          </button>
        </div>
      </div>
    </div>
  )
}
