import {
  Filter,
  Search,
} from "lucide-react"

type Props = {

  search: string

  onSearchChange: (value: string) => void

  onOpenFilters: () => void
}

export function SchedulesFilters({
  search,
  onSearchChange,
  onOpenFilters,
}: Props) {

  return (

    <div
      className="
        flex
        items-center
        gap-4
      "
    >

      <div
        className="
          relative
          flex-1
        "
      >

        <Search
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
          value={search}
          onChange={(e) =>
            onSearchChange(e.target.value)
          }
          placeholder="Buscar cliente ou responsável..."
          className="
            w-full
            h-[52px]
            rounded-2xl
            border
            border-border
            bg-surface1
            pl-12
            pr-5
            outline-none
            text-text
            placeholder:text-textSecondary
            focus:border-primary
            transition-all
          "
        />

      </div>

      <button
        onClick={onOpenFilters}
        className="
          h-[52px]
          px-5
          rounded-2xl
          border
          border-border
          bg-surface1
          text-text
          font-semibold
          flex
          items-center
          gap-2
          hover:bg-hover
          hover:border-primary
          transition-all
        "
      >
        <Filter size={18} />
        Filtros
      </button>

    </div>
  )
}