import {
  Ban,
  CheckCircle2,
  Eye,
} from "lucide-react"

import type {
  AvailabilitySlot,
} from "@/types/availability.types"

type Props = {

  slot: AvailabilitySlot

  onBlock: (
    slot: AvailabilitySlot,
  ) => void

  onRelease: (
    slot: AvailabilitySlot,
  ) => void

  onView: (
    slot: AvailabilitySlot,
  ) => void
}

export function AvailabilitySlotActions({

  slot,

  onBlock,

  onRelease,

  onView,

}: Props) {

  if (slot.status === "available") {

    return (

      <button
        onClick={() =>
          onBlock(slot)
        }
        className="
          h-10
          px-4

          rounded-xl

          border
          border-dangerBorder

          bg-dangerBg

          text-dangerText
          text-sm
          font-semibold

          flex
          items-center
          gap-2

          hover:brightness-110

          transition-all
        "
      >
        <Ban size={16} />
        Bloquear
      </button>
    )
  }

  if (slot.status === "blocked") {

    return (

      <button
        onClick={() =>
          onRelease(slot)
        }
        className="
          h-10
          px-4

          rounded-xl

          border
          border-successBorder

          bg-successBg

          text-successText
          text-sm
          font-semibold

          flex
          items-center
          gap-2

          hover:brightness-110

          transition-all
        "
      >
        <CheckCircle2 size={16} />
        Liberar
      </button>
    )
  }

  return (

    <button
      onClick={() =>
        onView(slot)
      }
      className="
        h-10
        px-4

        rounded-xl

        border
        border-warningBorder

        bg-warningBg

        text-warningText
        text-sm
        font-semibold

        flex
        items-center
        gap-2

        hover:brightness-110

        transition-all
      "
    >
      <Eye size={16} />
      Ver
    </button>
  )
}