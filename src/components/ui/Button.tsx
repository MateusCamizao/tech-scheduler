import type {
  ButtonHTMLAttributes,
} from "react"

import { Spinner } from "./Spinner"

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {

  title: string
  loading?: boolean
}

export function Button({
  title,
  loading,
  ...rest
}: ButtonProps) {

  return (
    <button
      className="
        bg-primary
        hover:bg-[var(--primary-hover)]
        transition-all
        duration-300
        px-5
        py-4
        rounded-2xl
        font-semibold
        text-text
        shadow-lg
        disabled:opacity-50
        flex
        items-center
        justify-center
        gap-2
        hover:scale-[1.01]
        active:scale-[0.99]
      "
      disabled={loading}
      {...rest}
    >

      {loading ? (
        <Spinner />
      ) : (
        title
      )}

    </button>
  )
}