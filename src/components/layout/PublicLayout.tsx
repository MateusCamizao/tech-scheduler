import type {
  ReactNode,
} from "react"

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

        text-text

        flex
        items-center
        justify-center

        px-4
        py-10
      "
    >

      {/* CONTENT */}

      <div
        className="
          w-full

          flex
          items-center
          justify-center
        "
      >

        {children}

      </div>

    </div>
  )
}