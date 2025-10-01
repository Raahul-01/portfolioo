interface DecorativeSlashProps {
  className?: string
}

export function DecorativeSlash({ className = "" }: DecorativeSlashProps) {
  return <div className={`absolute w-12 h-0.5 bg-gray-800 rotate-45 ${className}`} />
}
