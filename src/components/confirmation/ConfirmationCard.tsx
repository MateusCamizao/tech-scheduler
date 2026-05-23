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

        bg-card

        border
        border-border

        rounded-[32px]

        p-7
      "
    >

      <div
        className="
          flex
          items-start
          gap-4

          mb-10
        "
      >

        <div
          className="
            w-14
            h-14

            rounded-[18px]

            bg-background

            border
            border-border

            flex
            items-center
            justify-center
          "
        >

          <CalendarDays size={26} />

        </div>

        <div>

          <h2
            className="
              text-[28px]
              font-black
              leading-none
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

      <div
        className="
          flex
          flex-col
          gap-8
        "
      >

        <div>

          <p
            className="
              text-textSecondary
              mb-1
            "
          >
            Duração
          </p>

          <strong
            className="
              text-[18px]
            "
          >
            {duration} minutos
          </strong>

        </div>

        <div>

          <p
            className="
              text-textSecondary
              mb-1
            "
          >
            Tipo
          </p>

          <strong
            className="
              text-[18px]
            "
          >
            Reunião Online
          </strong>

        </div>

        <div>

          <p
            className="
              text-textSecondary
              mb-1
            "
          >
            Horário
          </p>

          <strong
            className="
              text-[18px]
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