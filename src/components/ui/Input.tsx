import type {
  InputHTMLAttributes,
} from "react"

export function Input(
  props: InputHTMLAttributes<HTMLInputElement>,
) {

  return (
    <input
      className="
        w-full
        bg-input
        border
        border-border
        rounded-2xl
        px-4
        py-4
        outline-none

        text-text

        placeholder:text-textSecondary

        caret-white

        focus:border-primary
        focus:ring-2
        focus:ring-primary/20

        transition-all
      "
      {...props}
    />
  )
}