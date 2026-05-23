import type {
  InputHTMLAttributes,
} from "react"

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {

  variant?:
    | "default"
    | "error"
    | "success"
}

export function Input({

  variant = "default",

  className = "",

  ...props

}: InputProps) {

  const variants = {

    default: `
      border-border

      focus:border-primary
      focus:ring-primary/20
    `,

    error: `
      border-dangerBorder

      text-dangerText

      focus:border-dangerText
      focus:ring-dangerText/20
    `,

    success: `
      border-successBorder

      focus:border-successText
      focus:ring-successText/20
    `,
  }

  return (

    <input

      className={`
        w-full
        h-[52px]

        bg-input

        rounded-2xl

        px-4

        outline-none

        border

        text-text

        placeholder:text-textSecondary

        caret-caret

        focus:ring-2

        transition-all
        duration-200

        disabled:opacity-50
        disabled:pointer-events-none

        ${variants[variant]}

        ${className}
      `}

      {...props}
    />
  )
}