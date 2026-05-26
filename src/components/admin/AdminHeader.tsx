import {

  Bell,
  Search,

} from "lucide-react"

import {
  ThemeToggle,
} from "@/components/ui/ThemeToggle"

export function AdminHeader() {

  return (

    <header
      className="
        h-[80px]

        border-b
        border-border

        bg-surface1

        px-8

        flex
        items-center
        justify-between
      "
    >

      {/* SEARCH */}

      <div
        className="
          w-full
          max-w-[420px]

          relative
        "
      >

      {/*  <Search
          size={18}

          className="
            absolute

            left-4
            top-1/2

            -translate-y-1/2

            text-textSecondary
          "
        />

        <input

          placeholder="Pesquisar..."

          className="
            w-full
            h-[48px]

            rounded-2xl

            border
            border-border

            bg-input

            pl-12
            pr-4

            outline-none

            text-text

            placeholder:text-textSecondary

            focus:border-primary

            transition-all
          "
        /> */}

      </div>

      {/* ACTIONS */}

      <div
        className="
          flex
          items-center

          gap-4
        "
      >

        {/* THEME */}

        <ThemeToggle />

        {/* NOTIFICATION */}

        <button
          className="
            w-[46px]
            h-[46px]

            rounded-2xl

            border
            border-border

            bg-surface2

            flex
            items-center
            justify-center

            hover:bg-hover
            hover:border-primary

            transition-all
          "
        >

          <Bell
            size={18}
            className="
              text-text
            "
          />

        </button>

        {/* AVATAR */}

        <div
          className="
            w-[46px]
            h-[46px]

            rounded-2xl

            bg-primary

            flex
            items-center
            justify-center

            text-white
            font-bold
          "
        >
          M
        </div>

      </div>

    </header>
  )
}