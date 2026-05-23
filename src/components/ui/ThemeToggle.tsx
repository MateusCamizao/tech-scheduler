import {

  Moon,
  Sun,

} from "lucide-react"

import {
  useTheme,
} from "@/hooks/useTheme"

export function ThemeToggle() {

  const {
    theme,
    toggleTheme,
  } = useTheme()

  return (

    <button

      onClick={toggleTheme}

      className="
        w-[46px]
        h-[46px]

        rounded-2xl

        border
        border-border

        bg-input

        flex
        items-center
        justify-center

        hover:border-primary

        transition-all
      "
    >

      {
        theme === "dark"
          ? (
            <Sun
              size={18}
              className="
                text-text
              "
            />
          )
          : (
            <Moon
              size={18}
              className="
                text-text
              "
            />
          )
      }

    </button>
  )
}