'use client'

import { ExternalLink } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

interface KeywordTooltipProps {
  children: React.ReactNode
  info: string
}

export function KeywordTooltip({ children, info }: KeywordTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-flex items-center gap-1 underline decoration-gray-600 underline-offset-2 cursor-help text-blue-400 hover:text-blue-300 transition-colors">
          {children}
          <ExternalLink className="w-3 h-3 opacity-70 text-blue-400" />
        </span>
      </TooltipTrigger>
      <TooltipContent 
        side="top"
        className="bg-gray-800 text-gray-100 border-gray-700 max-w-xs shadow-lg [&>svg]:fill-gray-800 [&>svg]:stroke-gray-800"
        sideOffset={6}
      >
        <p className="text-xs leading-relaxed text-gray-100">{info}</p>
      </TooltipContent>
    </Tooltip>
  )
}

