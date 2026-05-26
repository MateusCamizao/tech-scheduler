import dayjs from "dayjs"

import {
  X,
} from "lucide-react"

import type {
  AvailabilitySlot,
} from "@/types/availability.types"

type Props = {

  slot: AvailabilitySlot | null

  onClose: () => void
}

const sourceMap = {

  appointment: "Agendamento",

  manual: "Manual",

  outlook: "Outlook",

  system: "Sistema",
}

const statusMap = {

  available: "Disponível",

  blocked: "Bloqueado",

  booked: "Agendado",
}

export function AvailabilitySlotDetails({
  slot,
  onClose,
}: Props) {

  if (!slot) return null

  return (

    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        bg-overlay
        flex
        items-center
        justify-center
        p-4
      "
    >

      <div
        onClick={(event) =>
          event.stopPropagation()
        }
        className="
          w-full
          max-w-[560px]
          rounded-3xl
          border
          border-border
          bg-surface1
          shadow-xl
          p-7
        "
      >

        <div className="flex items-start justify-between mb-8">

          <div>

            <h2 className="text-3xl font-black text-text">
              Detalhes do horário
            </h2>

            <p className="mt-2 text-textSecondary">
              Informações do horário selecionado.
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              w-[42px]
              h-[42px]
              rounded-xl
              border
              border-border
              bg-surface2
              text-text
              flex
              items-center
              justify-center
              hover:bg-hover
              hover:border-primary
              transition-all
            "
          >
            <X size={18} />
          </button>

        </div>

        <div className="grid grid-cols-1 gap-5">

          <Info
            label="Status"
            value={statusMap[slot.status]}
          />

          <Info
            label="Cliente"
            value={slot.client || "Cliente não informado"}
          />

          <Info
            label="E-mail"
            value={slot.email || "E-mail não informado"}
          />

          <Info
            label="Responsável"
            value={slot.responsible}
          />

          <Info
            label="Data"
            value={
              dayjs(slot.startAt).format("DD/MM/YYYY")
            }
          />

          <Info
            label="Horário"
            value={`${dayjs(slot.startAt).format("HH:mm")} - ${dayjs(slot.endAt).format("HH:mm")}`}
          />

          <Info
            label="Origem"
            value={
              slot.source
                ? sourceMap[slot.source]
                : "Não informado"
            }
          />

        </div>

      </div>

    </div>
  )
}

function Info({
  label,
  value,
}: {
  label: string
  value: string
}) {

  return (

    <div
      className="
        rounded-2xl
        border
        border-border
        bg-surface2
        p-4
      "
    >

      <span className="text-sm text-textSecondary">
        {label}
      </span>

      <strong className="mt-1 block text-text">
        {value}
      </strong>

    </div>
  )
}