import {

  ScheduleStatus,

} from "./ScheduleStatus"

import {

  ScheduleActions,

} from "./ScheduleActions"

const schedules = [

  {

    id: 1,

    client: "Biomagistral",

    date: "27/05/2026",

    hour: "14:00",

    duration: 60,

    responsible: "Mateus",

    status: "confirmed",
  },

  {

    id: 2,

    client: "Originares",

    date: "27/05/2026",

    hour: "15:30",

    duration: 30,

    responsible: "Carlos",

    status: "pending",
  },

  {

    id: 3,

    client: "Integrativa",

    date: "27/05/2026",

    hour: "16:00",

    duration: 90,

    responsible: "Eduardo",

    status: "rescheduled",
  },
]

export function SchedulesTable() {

  return (

    <div
      className="
        overflow-hidden

        rounded-3xl

        border
        border-border

        bg-card
      "
    >

      {/* HEADER */}

      <div
        className="
          grid

          grid-cols-[2fr_1fr_1fr_1fr_1fr_180px]

          gap-4

          px-6
          py-5

          border-b
          border-border

          text-sm
          font-semibold

          text-textSecondary
        "
      >

        <span>
          Cliente
        </span>

        <span>
          Data
        </span>

        <span>
          Horário
        </span>

        <span>
          Duração
        </span>

        <span>
          Status
        </span>

        <span>
          Ações
        </span>

      </div>

      {/* BODY */}

      <div
        className="
          flex
          flex-col
        "
      >

        {schedules.map((item) => (

          <div

            key={item.id}

            className="
              grid

              grid-cols-[2fr_1fr_1fr_1fr_1fr_180px]

              gap-4

              px-6
              py-5

              border-b
              border-border

              items-center

              hover:bg-white/[0.02]

              transition-all
            "
          >

            <strong
              className="
                text-text
              "
            >
              {item.client}
            </strong>

            <span>
              {item.date}
            </span>

            <span>
              {item.hour}
            </span>

            <span>
              {item.duration} min
            </span>

            <ScheduleStatus
              status={item.status as any}
            />

            <ScheduleActions />

          </div>
        ))}

      </div>

    </div>
  )
}