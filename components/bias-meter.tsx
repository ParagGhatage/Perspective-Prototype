"use client"

import { useState, useEffect } from "react"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

interface BiasMeterProps {
  score: number
  className?: string
}

export default function BiasMeter({ score, className }: BiasMeterProps) {
  const [animatedScore, setAnimatedScore] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score)
    }, 500)

    return () => clearTimeout(timer)
  }, [score])

  // Determine color based on score
  const getColor = (value: number) => {
    if (value < 20) return "bg-green-500"
    if (value < 40) return "bg-blue-500"
    if (value < 60) return "bg-amber-500"
    if (value < 80) return "bg-orange-500"
    return "bg-red-500"
  }

  const getBiasLabel = (value: number) => {
    if (value < 20) return "Minimal Bias"
    if (value < 40) return "Slight Bias"
    if (value < 60) return "Moderate Bias"
    if (value < 80) return "Significant Bias"
    return "Strong Bias"
  }

  const getBiasDescription = (value: number) => {
    if (value < 20) return "Content presents a balanced view with minimal bias detected."
    if (value < 40) return "Content shows some bias but generally presents multiple perspectives."
    if (value < 60) return "Content shows noticeable bias with some perspectives emphasized over others."
    if (value < 80) return "Content shows significant bias with limited alternative viewpoints."
    return "Content shows strong bias with very limited or no alternative perspectives."
  }

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-medium text-sm">Bias Meter</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p className="text-xs">
                  The bias meter measures the degree to which the content presents a single perspective versus multiple
                  balanced viewpoints. Lower scores indicate more balanced content.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <span className="text-sm font-semibold">{getBiasLabel(score)}</span>
      </div>

      <div className="relative h-4 w-full bg-secondary rounded-full overflow-hidden">
        <div
          className={`absolute top-0 left-0 h-full ${getColor(score)} transition-all duration-1000 ease-out rounded-full`}
          style={{ width: `${animatedScore}%` }}
        />

        {/* Markers */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-between px-[2px]">
          {[0, 25, 50, 75, 100].map((mark) => (
            <div key={mark} className="h-full w-[1px] bg-background/30" />
          ))}
        </div>
      </div>

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Balanced</span>
        <span>Biased</span>
      </div>

      <p className="text-xs text-muted-foreground mt-1">{getBiasDescription(score)}</p>
    </div>
  )
}

