interface AvailabilityIndicatorProps {
    isAvailable: boolean
    text: string
}

export default function AvailabilityIndicator({ isAvailable, text }: AvailabilityIndicatorProps) {
    if (!isAvailable) return null

    return (
        <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full text-xs font-medium border border-green-500/20 w-auto">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
            <span className="text-green-400">{text}</span>
        </div>
    )
}