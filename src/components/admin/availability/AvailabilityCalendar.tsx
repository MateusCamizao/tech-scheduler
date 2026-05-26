import dayjs from "dayjs"

import type {
  AvailabilityDay,
} from "@/types/availability.types"

import type {
  User,
} from "@/types/user.types"

type Props = {

  availability: AvailabilityDay[]

  users: User[]

  selectedAvailabilityId: string

  onSelectAvailability: (
    value: string,
  ) => void
}

export function AvailabilityCalendar({
  availability,
  users,
  selectedAvailabilityId,
  onSelectAvailability,
}: Props) {

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

      <h2
        className="
          text-2xl
          font-black
          text-text
          mb-5
        "
      >
        Calendário
      </h2>

      <div
        className="
          flex
          flex-col
          gap-3
        "
      >

        {availability.map((day) => {

          const responsible =
  users.find((user) =>
    user.id === day.responsibleId
  )

          const active =
            selectedAvailabilityId === day.id

          const bookedCount =
            day.slots.filter((slot) =>
              slot.status === "booked"
            ).length

          const blockedCount =
            day.slots.filter((slot) =>
              slot.status === "blocked"
            ).length

          return (

            <button
              key={`${day.date}-${responsible?.name}`}
              onClick={() =>
                onSelectAvailability(day.id)
              }
              className={`
                w-full

                rounded-2xl

                border

                p-4

                text-left

                transition-all

                ${
                  active
                    ? `
                      bg-primary
                      border-primary
                      text-white
                    `
                    : `
                      bg-surface2
                      border-border
                      text-text
                      hover:border-primary
                      hover:bg-hover
                    `
                }
              `}
            >

              <strong
                className="
                  block
                  text-lg
                "
              >
                {dayjs(day.date).format("DD/MM/YYYY")}
              </strong>

              <span
                className={`
                  mt-1
                  block
                  text-sm

                  ${
                    active
                      ? "text-white/80"
                      : "text-textSecondary"
                  }
                `}
              >
                {responsible?.name}
              </span>

              <div
                className="
                  mt-3
                  flex
                  gap-2
                  text-xs
                  font-semibold
                "
              >
                <span>
                  {day.slots.length} horários
                </span>

                <span>
                  {bookedCount} agendados
                </span>

                <span>
                  {blockedCount} bloqueados
                </span>
              </div>

            </button>
          )
        })}

      </div>

    </div>
  )
}