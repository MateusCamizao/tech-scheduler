import {
  ThemeToggle,
} from "@/components/ui/ThemeToggle"

export function Header() {

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

      {/* TITLE */}

      <div>

        <h2
          className="
            text-2xl
            font-bold

            text-text
          "
        >
          Sistema de Agendamento
        </h2>

        <p
          className="
            mt-1

            text-sm

            text-textSecondary
          "
        >
          Gestão operacional da plataforma
        </p>

      </div>

      {/* ACTIONS */}

      <div
        className="
          flex
          items-center

          gap-4
        "
      >

        <ThemeToggle />

        {/* AVATAR */}

        <div
          className="
            w-10
            h-10

            rounded-full

            bg-primary

            flex
            items-center
            justify-center

            text-white
            font-semibold
          "
        >
          M
        </div>

      </div>

    </header>
  )
}