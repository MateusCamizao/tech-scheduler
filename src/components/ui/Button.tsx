import type {
  ButtonHTMLAttributes,
} from "react"

import {
  Spinner,
} from "./Spinner"

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  title: string

  loading?: boolean

  className?: string

  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "ghost"
    | "success"
}

export function Button({

  title,

  loading,

  className = "",

  variant = "primary",

  ...rest

}: ButtonProps) {

  const variants = {

    primary: `
      bg-primary

      text-white

      hover:bg-primaryHover
    `,

    success: `
      bg-successText

      text-white

      hover:brightness-110
    `,

    secondary: `
      bg-surface2

      border
      border-border

      text-text

      hover:bg-hover
    `,

    danger: `
      bg-dangerBg

      border
      border-dangerBorder

      text-dangerText

      hover:opacity-90
    `,

    ghost: `
      bg-transparent

      text-textSecondary

      hover:bg-hover
      hover:text-text
    `,
  }

  return (

    <button

      className={`
        h-[52px]

        px-5

        rounded-2xl

        font-semibold

        flex
        items-center
        justify-center

        gap-2

        transition-all
        duration-200

        disabled:opacity-50
        disabled:pointer-events-none

        active:scale-[0.98]

        ${variants[variant]}

        ${className}
      `}

      disabled={loading}

      {...rest}
    >

      {
        loading
          ? (
            <Spinner
              size="sm"
              variant="white"
            />
          )
          : title
      }

    </button>
  )
}