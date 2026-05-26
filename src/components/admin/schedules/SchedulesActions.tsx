import {
  Eye,
  RotateCcw,
  Trash2,
} from "lucide-react"

type Props = {

  onView?: () => void

  onReschedule?: () => void

  onCancel?: () => void
}

export function SchedulesActions({

  onView,
  onReschedule,
  onCancel,

}: Props) {

  const baseClass = `
    w-[42px]
    h-[42px]

    rounded-xl

    border
    border-border

    bg-surface2

    flex
    items-center
    justify-center

    hover:bg-hover

    transition-all
    duration-200
  `

  return (

    <div
      className="
        flex
        items-center
        gap-2
      "
    >

      <button
        aria-label="Visualizar"
        onClick={onView}
        className={`
          ${baseClass}

          text-text

          hover:border-primary
          hover:text-primary
        `}
      >
        <Eye size={18} />
      </button>

      <button
        aria-label="Reagendar"
        onClick={onReschedule}
        className={`
          ${baseClass}

          text-warningText

          hover:border-warningBorder
          hover:bg-warningBg
        `}
      >
        <RotateCcw size={18} />
      </button>

      <button
        aria-label="Cancelar"
        onClick={onCancel}
        className={`
          ${baseClass}

          text-dangerText

          hover:border-dangerBorder
          hover:bg-dangerBg
        `}
      >
        <Trash2 size={18} />
      </button>

    </div>
  )
}