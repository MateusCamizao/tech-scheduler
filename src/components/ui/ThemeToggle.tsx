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

      aria-label="Alternar tema"

      className="
        w-[46px]
        h-[46px]

        rounded-2xl

        border
        border-border

        bg-surface2

        shadow-sm

        flex
        items-center
        justify-center

        hover:bg-hover
        hover:border-primary

        active:scale-[0.98]

        transition-all
        duration-200
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