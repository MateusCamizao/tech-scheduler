import {
  ThemeToggle,
} from "@/components/ui/ThemeToggle"

export function Header() {
  return (
    <header
      className="
        h-20
        border-b
        border-border
        bg-card
        px-8
        flex
        items-center
        justify-between
      "
    >
      <h2 className="text-xl font-semibold">
        Sistema de Agendamento
      </h2>

      <div className="flex items-center gap-4">
        <ThemeToggle />
        <div
          className="
            w-10
            h-10
            rounded-full
            bg-primary
          "
        />
      </div>
      
    </header>
  )
}