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

        onClick={onView}

        className="
          w-[42px]
          h-[42px]

          rounded-xl

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

        <Eye
          size={18}
          className="
            text-text
          "
        />

      </button>

      {/* RESCHEDULE */}

      <button

        onClick={onReschedule}

        className="
          w-[42px]
          h-[42px]

          rounded-xl

          border
          border-border

          bg-input

          flex
          items-center
          justify-center

          hover:border-yellow-500

          transition-all
        "
      >

        <RotateCcw
          size={18}
          className="
            text-yellow-400
          "
        />

      </button>

      {/* CANCEL */}

      <button

        onClick={onCancel}

        className="
          w-[42px]
          h-[42px]

          rounded-xl

          border
          border-border

          bg-input

          flex
          items-center
          justify-center

          hover:border-red-500

          transition-all
        "
      >

        <Trash2
          size={18}
          className="
            text-red-400
          "
        />

      </button>

    </div>
  )
}