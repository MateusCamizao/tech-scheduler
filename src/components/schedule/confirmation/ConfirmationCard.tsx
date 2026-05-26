import dayjs from "dayjs"

import {
  CalendarDays,
} from "lucide-react"

type Props = {

  selectedDate: Date

  selectedTime: string

  duration: number
}

export function ConfirmationCard({

  selectedDate,
  selectedTime,
  duration,

}: Props) {

  return (

    <div
      className="
        w-[320px]
        min-h-[360px]

        bg-surface1

        border
        border-border

        rounded-[32px]

        shadow-sm

        p-7
      "
    >

      {/* HEADER */}

      <div
        className="
          flex
          items-start

          gap-4

          mb-10
        "
      >

        {/* ICON */}

        <div
          className="
            w-14
            h-14

            rounded-[18px]

            bg-surface2

            border
            border-border

            flex
            items-center
            justify-center
          "
        >

          <CalendarDays
            size={26}
            className="
              text-primary
            "
          />

        </div>

        {/* DATE */}

        <div>

          <h2
            className="
              text-[28px]
              font-black

              leading-none

              text-text
            "
          >

            {dayjs(selectedDate)
              .format("DD/MM/YYYY")}

          </h2>

          <p
            className="
              text-textSecondary

              text-[20px]

              mt-2
            "
          >

            às {selectedTime}

          </p>

        </div>

      </div>

      {/* CONTENT */}

      <div
        className="
          flex
          flex-col

          gap-7
        "
      >

        {/* DURATION */}

        <div>

          <p
            className="
              text-sm

              text-textSecondary

              mb-2
            "
          >
            Duração
          </p>

          <strong
            className="
              text-[18px]

              text-text
            "
          >
            {duration} minutos
          </strong>

        </div>

        {/* TYPE */}

        <div>

          <p
            className="
              text-sm

              text-textSecondary

              mb-2
            "
          >
            Tipo
          </p>

          <strong
            className="
              text-[18px]

              text-text
            "
          >
            Reunião Online
          </strong>

        </div>

        {/* DATE TIME */}

        <div>

          <p
            className="
              text-sm

              text-textSecondary

              mb-2
            "
          >
            Horário
          </p>

          <strong
            className="
              text-[18px]

              text-text
            "
          >
            {dayjs(selectedDate)
              .format("DD/MM/YYYY")} às {selectedTime}
          </strong>

        </div>

      </div>

    </div>
  )
}