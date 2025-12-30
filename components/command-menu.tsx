'use client'

import * as React from 'react'
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
  Code,
  Github,
  Mail,
  Home,
  Book,
  Lightbulb,
  Twitter
} from 'lucide-react'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from 'cmdk'

export function CommandMenu() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = (command: () => void) => {
    setOpen(false)
    command()
  }

  return (
    <>
      <div className="fixed bottom-4 left-4 z-40 text-xs text-gray-500 font-mono hidden md:block opacity-50">
        Press <kbd className="bg-gray-800 px-1 rounded">⌘K</kbd> to open command menu
      </div>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-lg overflow-hidden rounded-xl border border-gray-800 bg-black shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <CommandInput 
              placeholder="Type a command or search..." 
              className="w-full border-none bg-transparent px-4 py-3 text-base text-gray-200 placeholder:text-gray-500 focus:outline-none"
            />
            <CommandList className="max-h-[300px] overflow-y-auto border-t border-gray-800 p-2">
              <CommandEmpty className="py-6 text-center text-sm text-gray-500">No results found.</CommandEmpty>
              
              <CommandGroup heading="Navigation">
                <CommandItem onSelect={() => runCommand(() => window.location.hash = '#my-story')} className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                  <User className="mr-2 h-4 w-4" />
                  <span>My Story</span>
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => window.location.hash = '#problem-library')} className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                  <Code className="mr-2 h-4 w-4" />
                  <span>Problem Library</span>
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => window.location.hash = '#timeline')} className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                  <Lightbulb className="mr-2 h-4 w-4" />
                  <span>Roadmap</span>
                </CommandItem>
              </CommandGroup>
              
              <CommandSeparator className="my-1 h-px bg-gray-800" />
              
              <CommandGroup heading="Social">
                <CommandItem onSelect={() => runCommand(() => window.open('https://github.com/raahul-01', '_blank'))} className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </CommandItem>
                <CommandItem onSelect={() => runCommand(() => window.open('mailto:raahul.inbox@gmail.com', '_blank'))} className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </CommandItem>
              </CommandGroup>

              <CommandSeparator className="my-1 h-px bg-gray-800" />

              <CommandGroup heading="System">
                <CommandItem onSelect={() => runCommand(() => window.print())} className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-300 hover:bg-white/10 hover:text-white rounded cursor-pointer transition-colors aria-selected:bg-white/10 aria-selected:text-white">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Print Resume</span>
                  {/* CommandShortcut support varies by version, removing to be safe */}
                  <span className="ml-auto text-xs text-gray-500">⌘P</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </div>
        </div>
      </CommandDialog>
    </>
  )
}
