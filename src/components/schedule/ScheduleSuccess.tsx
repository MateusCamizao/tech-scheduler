import dayjs from "dayjs"

import {

  CheckCircle2,
  CalendarDays,
  Clock3,
  Mail,
  Phone,

} from "lucide-react"

import {
  Button,
} from "@/components/ui/Button"

type Props = {

  selectedDate: string

  selectedTime: string

  duration: number

  email: string

  phone: string

  onNewSchedule: () => void

  onReschedule: () => void

  onCancel: () => void
}

export function ScheduleSuccess({

  selectedDate,
  selectedTime,
  duration,

  email,
  phone,

  onNewSchedule,
  onReschedule,
  onCancel,

}: Props) {

  return (

    <div
      className="
        w-full
        max-w-[760px]
        pt-40
        
        mx-auto
      "
    >

      {/* CARD */}

      <div
        className="
          bg-surface1

          border
          border-border

          rounded-[36px]

          shadow-sm

          p-6
          md:p-8
        "
      >

        {/* SUCCESS */}

        <div
          className="
            flex
            flex-col

            items-center

            text-center
          "
        >

          <div
            className="
              w-20
              h-20

              rounded-full

              bg-successBg

              border
              border-successBorder

              flex
              items-center
              justify-center

              mb-6
            "
          >

            <CheckCircle2
              size={42}
              className="
                text-successText
              "
            />

          </div>

          <h1
            className="
              text-5xl
              font-black

              text-text
            "
          >
            Agendamento Confirmado
          </h1>

          <p
            className="
              mt-5

              max-w-[520px]

              text-lg

              leading-relaxed

              text-textSecondary
            "
          >
            Sua reunião foi agendada com sucesso.
            Você receberá futuras confirmações
            e informações por e-mail.
          </p>

        </div>

        {/* CONTENT */}

        <div
          className="
            mt-10

            bg-surface2

            border
            border-border

            rounded-[30px]

            p-6
          "
        >

          {/* GRID */}

          <div
            className="
              grid

              grid-cols-1
              md:grid-cols-2

              gap-5
            "
          >

            {/* DATE */}

            <div
              className="
                bg-surface1

                border
                border-border

                rounded-3xl

                p-5
              "
            >

              <div
                className="
                  flex
                  items-start

                  gap-4
                "
              >

                <CalendarDays
                  size={22}
                  className="
                    mt-1

                    text-primary
                  "
                />

                <div>

                  <p
                    className="
                      text-sm

                      text-textSecondary
                    "
                  >
                    Data
                  </p>

                  <strong
                    className="
                      mt-2

                      block

                      text-[18px]

                      text-text
                    "
                  >
                    {
                      selectedDate
                        ? dayjs(selectedDate)
                            .format("DD/MM/YYYY")
                        : ""
                    }
                  </strong>

                </div>

              </div>

            </div>

            {/* TIME */}

            <div
              className="
                bg-surface1

                border
                border-border

                rounded-3xl

                p-5
              "
            >

              <div
                className="
                  flex
                  items-start

                  gap-4
                "
              >

                <Clock3
                  size={22}
                  className="
                    mt-1

                    text-primary
                  "
                />

                <div>

                  <p
                    className="
                      text-sm

                      text-textSecondary
                    "
                  >
                    Horário
                  </p>

                  <strong
                    className="
                      mt-2

                      block

                      text-[18px]

                      text-text
                    "
                  >
                    {selectedTime}
                  </strong>

                </div>

              </div>

            </div>

            {/* EMAIL */}

            <div
              className="
                bg-surface1

                border
                border-border

                rounded-3xl

                p-5
              "
            >

              <div
                className="
                  flex
                  items-start

                  gap-4
                "
              >

                <Mail
                  size={22}
                  className="
                    mt-1

                    text-primary
                  "
                />

                <div>

                  <p
                    className="
                      text-sm

                      text-textSecondary
                    "
                  >
                    E-mail
                  </p>

                  <strong
                    className="
                      mt-2

                      block

                      text-[18px]

                      text-text
                    "
                  >
                    {email}
                  </strong>

                </div>

              </div>

            </div>

            {/* PHONE */}

            <div
              className="
                bg-surface1

                border
                border-border

                rounded-3xl

                p-5
              "
            >

              <div
                className="
                  flex
                  items-start

                  gap-4
                "
              >

                <Phone
                  size={22}
                  className="
                    mt-1

                    text-primary
                  "
                />

                <div>

                  <p
                    className="
                      text-sm

                      text-textSecondary
                    "
                  >
                    Telefone
                  </p>

                  <strong
                    className="
                      mt-2

                      block

                      text-[18px]

                      text-text
                    "
                  >
                    {phone}
                  </strong>

                </div>

              </div>

            </div>

          </div>

          {/* DURATION */}

          <div
            className="
              mt-5

              bg-surface1

              border
              border-border

              rounded-3xl

              p-6

              text-center
            "
          >

            <p
              className="
                text-textSecondary
              "
            >
              Duração da reunião
            </p>

            <strong
              className="
                mt-2

                block

                text-[20px]

                text-text
              "
            >
              {duration} minutos
            </strong>

          </div>

        </div>

        {/* ACTIONS */}

        <div
          className="
            mt-8

            grid

            grid-cols-1
            md:grid-cols-3

            gap-4
          "
        >

          <Button

            title="Novo Agendamento"

            variant="primary"

            onClick={onNewSchedule}

            className="
              h-[56px]

              rounded-3xl
            "
          />

          <Button

            title="Reagendar"

            variant="secondary"

            onClick={onReschedule}

            className="
              h-[56px]

              rounded-3xl
            "
          />

          <Button

            title="Cancelar"

            variant="danger"

            onClick={onCancel}

            className="
              h-[56px]

              rounded-3xl
            "
          />

        </div>

      </div>

    </div>
  )
}