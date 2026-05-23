import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
}

export function Card({
  children,
}: CardProps) {

  return (
    <div
      className="
        bg-card/90
        backdrop-blur-sm
        border
        border-border
        rounded-3xl
        p-8
        shadow-2xl
      "
    >
      {children}
    </div>
  )
}