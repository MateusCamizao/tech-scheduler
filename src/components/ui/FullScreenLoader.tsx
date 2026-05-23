import {
  Spinner,
} from "./Spinner"

interface FullScreenLoaderProps {

  message?: string
}

export function FullScreenLoader({

  message = "Carregando...",

}: FullScreenLoaderProps) {

  return (

    <div
      className="
        min-h-screen

        flex
        flex-col

        items-center
        justify-center

        gap-5

        bg-background
      "
    >

      <Spinner
        size="lg"
      />

      <span
        className="
          text-sm

          text-textSecondary
        "
      >
        {message}
      </span>

    </div>
  )
}