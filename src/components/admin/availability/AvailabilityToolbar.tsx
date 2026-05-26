import {
  Ban,
  Plus,
  RefreshCcw,
} from "lucide-react"

type Props = {

  onCreateSlot: () => void

  onBlockPeriod: () => void

  onRefresh: () => void
}

export function AvailabilityToolbar({

  onCreateSlot,

  onBlockPeriod,

  onRefresh,

}: Props) {

  return (

    <div
      className="
        flex
        flex-wrap
        items-center
        gap-3
      "
    >

      <button
        onClick={onCreateSlot}
        className="
          h-[52px]

          px-5

          rounded-2xl

          bg-primary

          text-white
          font-semibold

          flex
          items-center
          gap-2

          hover:bg-primaryHover

          transition-all
        "
      >

        <Plus size={18} />

        Novo Slot

      </button>

      <button
        onClick={onBlockPeriod}
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

          hover:border-dangerBorder
          hover:bg-dangerBg
          hover:text-dangerText

          transition-all
        "
      >

        <Ban size={18} />

        Bloquear Período

      </button>

      <button
        onClick={onRefresh}
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

          hover:border-primary
          hover:bg-hover

          transition-all
        "
      >

        <RefreshCcw size={18} />

        Atualizar

      </button>

    </div>
  )
}