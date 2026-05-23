interface SpinnerProps {

  size?: "sm" | "md" | "lg"

  variant?:
    | "primary"
    | "white"
    | "danger"
}

export function Spinner({

  size = "md",

  variant = "primary",

}: SpinnerProps) {

  const sizes = {

    sm: `
      w-4
      h-4

      border-2
    `,

    md: `
      w-5
      h-5

      border-2
    `,

    lg: `
      w-10
      h-10

      border-4
    `,
  }

  const variants = {

    primary: `
      border-primary
    `,

    white: `
      border-white
    `,

    danger: `
      border-dangerText
    `,
  }

  return (

    <div
      className={`
        rounded-full

        border-t-transparent

        animate-spin

        ${sizes[size]}

        ${variants[variant]}
      `}
    />
  )
}