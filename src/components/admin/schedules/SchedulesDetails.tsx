import {
  Loader2,
  X,
} from "lucide-react"

import { Schedule } from "@/types/schedule.types"

import {
  SchedulesStatus,
} from "@/components/admin/schedules/SchedulesStatus"

type Props = {

  schedule: Schedule | null

  loading: boolean

  onClose: () => void
}

export function SchedulesDetails({

  schedule,

  loading,

  onClose,

}: Props) {

  const visible =
    loading || schedule

  return (

    <>

      {/* OVERLAY */}

      <div

        className={`
          fixed
          inset-0

          bg-black/70

          backdrop-blur-sm

          z-40

          transition-all
          duration-300

          ${
            visible
              ? `
                opacity-100
                pointer-events-auto
              `
              : `
                opacity-0
                pointer-events-none
              `
          }
        `}
      />

      {/* MODAL */}

      <div
      onClick={onClose}
        className={`
          fixed
          inset-0

          z-50

          flex
          items-center
          justify-center

          p-6

          transition-all
          duration-300

          ${
            visible
              ? `
                opacity-100
                scale-100
              `
              : `
                opacity-0
                scale-95

                pointer-events-none
              `
          }
        `}
      >

        <div
        onClick={(event) =>
  event.stopPropagation()
}
          className="
            w-full
            max-w-[680px]

            rounded-[32px]

            border
            border-border

            bg-card

            shadow-2xl
          "
        >

          {/* LOADING */}

          {loading ? (

            <div
              className="
                h-[420px]

                flex
                flex-col
                items-center
                justify-center

                gap-5
              "
            >

              <Loader2
                size={42}
                className="
                  animate-spin

                  text-primary
                "
              />

              <span
                className="
                  text-textSecondary
                "
              >
                Carregando detalhes...
              </span>

            </div>

          ) : !schedule ? null : (

            <div
              className="
                p-8
              "
            >

              {/* HEADER */}

              <div
                className="
                  flex
                  items-start
                  justify-between
                "
              >

                <div>

                  <h2
                    className="
                      text-4xl
                      font-black
                    "
                  >
                    Detalhes
                  </h2>

                  <p
                    className="
                      mt-2

                      text-textSecondary
                    "
                  >
                    Informações do
                    agendamento.
                  </p>

                </div>

                <button

                  onClick={onClose}

                  className="
                    h-12
                    w-12

                    rounded-2xl

                    border
                    border-border

                    bg-surface1

                    flex
                    items-center
                    justify-center

                    hover:border-primary

                    transition-all
                  "
                >

                  <X size={18} />

                </button>

              </div>

              {/* CONTENT */}
              
              <div
                className="
                  mt-10

                  grid

                  grid-cols-2

                  gap-7
                "
              >

                <Info
                  label="Cliente"
                  value={schedule.client}
                />

                <Info
                  label="Responsável"
                  value={schedule.responsible}
                />

                <Info
                  label="E-mail"
                  value={schedule.email}
                />

                <Info
                  label="Telefone"
                  value={schedule.phone}
                />

                <Info
                  label="Data"
                  value={
                    new Date(schedule.startAt)
                      .toLocaleDateString(
                        "pt-BR",
                      )
                  }
                />

                <Info
                  label="Horário"
                  value={
                    new Date(schedule.startAt)
                      .toLocaleTimeString(
                        "pt-BR",
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )
                  }
                />

                <Info
                  label="Duração"
                  value={`${schedule.duration} min`}
                />

                <div>

                  <span
                    className="
                      text-sm
                      text-textSecondary
                    "
                  >
                    Status
                  </span>

                  <div className="mt-3">

                    <SchedulesStatus
                      status={schedule.status}
                    />

                  </div>

                </div>

              </div>

            </div>
          )}

        </div>

      </div>

    </>
  )
}

type InfoProps = {

  label: string

  value: string
}

function Info({
  label,
  value,
}: InfoProps) {

  return (

    <div>

      <span
        className="
          text-sm
          text-textSecondary
        "
      >
        {label}
      </span>

      <strong
        className="
          mt-2

          block

          text-lg
          font-bold
        "
      >
        {value}
      </strong>

    </div>
  )
}