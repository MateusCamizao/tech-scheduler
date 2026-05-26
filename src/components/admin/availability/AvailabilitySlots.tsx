import dayjs from "dayjs"

import {
  AvailabilitySlotActions,
} from "./AvailabilitySlotActions"

import type {
  AvailabilityDay,
  AvailabilitySlot,
} from "@/types/availability.types"

import type {
  User,
} from "@/types/user.types"

type Props = {

  day: AvailabilityDay | undefined

  users: User[]

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

const statusMap = {

  available: {
    label: "Disponível",
    className: `
      bg-successBg
      border-successBorder
      text-successText
    `,
  },

  blocked: {
    label: "Bloqueado",
    className: `
      bg-dangerBg
      border-dangerBorder
      text-dangerText
    `,
  },

  booked: {
    label: "Agendado",
    className: `
      bg-warningBg
      border-warningBorder
      text-warningText
    `,
  },
}

function getUserName(
  users: User[],
  userId: string,
) {

  return users.find((user) =>
    user.id === userId
  )?.name || "Responsável não encontrado"
}

export function AvailabilitySlots({

  day,
  users,

  onBlock,

  onRelease,

  onView,

}: Props) {

  if (!day) {

    return (

      <div
        className="
          min-h-[420px]
          rounded-3xl
          border
          border-border
          bg-surface1
          flex
          items-center
          justify-center
          text-textSecondary
        "
      >
        Selecione um dia para visualizar os horários.
      </div>
    )
  }

  const responsibleName =
    getUserName(
      users,
      day.responsibleId,
    )

  return (

    <div
      className="
        rounded-3xl
        border
        border-border
        bg-surface1
        p-6
      "
    >

      <div
        className="
          mb-6
        "
      >

        <h2
          className="
            text-2xl
            font-black
            text-text
          "
        >
          {dayjs(day.date).format("DD/MM/YYYY")}
        </h2>

        <p
          className="
            mt-1
            text-textSecondary
          "
        >
          Responsável: {responsibleName}
        </p>

      </div>

      <div
        className="
          flex
          flex-col
          gap-3
        "
      >

        {day.slots.map((slot) => {

          const current =
            statusMap[slot.status]

          const slotResponsibleName =
            getUserName(
              users,
              slot.responsibleId,
            )

          return (

            <div
              key={slot.id}
              className="
                flex
                items-center
                justify-between
                gap-4

                rounded-2xl
                border
                border-border
                bg-surface2

                px-5
                py-4
              "
            >

              <div>

                <strong
                  className="
                    text-text
                  "
                >
                  {dayjs(slot.startAt).format("HH:mm")}
                  {" - "}
                  {dayjs(slot.endAt).format("HH:mm")}
                </strong>

                <p
                  className="
                    mt-1
                    text-sm
                    text-textSecondary
                  "
                >
                  {
                    slot.status === "booked"
                      ? slot.client || "Cliente não informado"
                      : slotResponsibleName
                  }
                </p>

              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <span
                  className={`
                    min-w-[110px]

                    rounded-xl
                    border

                    px-3
                    py-1.5

                    text-center
                    text-sm
                    font-semibold

                    ${current.className}
                  `}
                >
                  {current.label}
                </span>

                <AvailabilitySlotActions
                  slot={slot}
                  onBlock={onBlock}
                  onRelease={onRelease}
                  onView={onView}
                />

              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}