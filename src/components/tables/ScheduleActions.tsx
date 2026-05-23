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

export function ScheduleActions({

  onView,
  onReschedule,
  onCancel,

}: Props) {

  const actionClass = `
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

      {/* VIEW */}

      <button

        aria-label="Visualizar"

        onClick={onView}

        className={`
          ${actionClass}

          hover:border-primary
        `}
      >

        <Eye
          size={18}
          className="
            text-text
          "
        />

      </button>

      {/* RESCHEDULE */}

      <button

        aria-label="Reagendar"

        onClick={onReschedule}

        className={`
          ${actionClass}

          hover:border-warningBorder
        `}
      >

        <RotateCcw
          size={18}
          className="
            text-warningText
          "
        />

      </button>

      {/* CANCEL */}

      <button

        aria-label="Cancelar"

        onClick={onCancel}

        className={`
          ${actionClass}

          hover:border-dangerBorder
        `}
      >

        <Trash2
          size={18}
          className="
            text-dangerText
          "
        />

      </button>

    </div>
  )
}