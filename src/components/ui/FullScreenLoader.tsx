import { Spinner } from "./Spinner"

export function FullScreenLoader() {

  return (
    <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-background
      "
    >
      <Spinner />
    </div>
  )
}