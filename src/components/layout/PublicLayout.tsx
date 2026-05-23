import type { ReactNode } from "react"

interface Props {
  children: ReactNode
}

export function PublicLayout({
  children,
}: Props) {

  return (
    <div
      className="
        min-h-screen
        bg-background
        text-textPrimary
        flex
        items-center
        justify-center
      "
    >
      {children}
    </div>
  )
}