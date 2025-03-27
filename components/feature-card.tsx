import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-8 text-card-foreground shadow-sm">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">{icon}</div>
      <h3 className="mt-4 font-bold">{title}</h3>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">{description}</p>
    </div>
  )
}

