import type {
  ReactNode,
} from "react"

interface CardProps {

  children: ReactNode

  variant?:
    | "default"
    | "elevated"
    | "outlined"
    | "transparent"

  className?: string
}

export function Card({

  children,

  variant = "default",

  className = "",

}: CardProps) {

  const variants = {

    default: `
      bg-surface1

      border
      border-border

      shadow-sm
    `,

    elevated: `
      bg-surface1

      border
      border-border

      shadow-xl
    `,

    outlined: `
      bg-transparent

      border
      border-border
    `,

    transparent: `
      bg-transparent
    `,
  }

  return (

    <div
      className={`
        rounded-3xl
        
        p-8

        transition-all
        duration-200

        ${variants[variant]}

        ${className}
      `}
    >

      {children}

    </div>
  )
}