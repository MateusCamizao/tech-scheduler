import {
  Eye,
  RotateCcw,
  Trash2,
} from "lucide-react"

import {
  SchedulesActions,
} from "@/components/admin/schedules/SchedulesActions"

import { Schedule } from "@/types/schedule.types"

import {
  SchedulesStatus,
} from "@/components/admin/schedules/SchedulesStatus"

interface Props {

  schedules: Schedule[]

  onView: (
    schedule: Schedule,
  ) => void

  onReschedule: (
    schedule: Schedule,
  ) => void

  onDelete: (
    schedule: Schedule,
  ) => void
}

export function SchedulesTable({

  schedules,

  onView,

  onReschedule,

  onDelete,

}: Props) {

  return (

    <div
      className="
        overflow-hidden

        rounded-[28px]

        border
        border-border

        bg-card
      "
    >

      {/* HEADER */}

      <div
        className="
  grid
  items-center
  gap-6

  grid-cols-[1.6fr_1.1fr_0.9fr_0.9fr_0.9fr_220px_190px]

  border-b
  border-border

  px-6
  py-5

  text-sm
  font-semibold

  text-textSecondary
"
      >

        <span>
          Cliente
        </span>

        <span>
          Responsável
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

      {/* ROWS */}

      <div>

        {schedules.map((item) => {

          const startDate =
            new Date(item.startAt)

          return (

            <div
              key={item.id}

              className="
  grid
  items-center
  gap-6

  grid-cols-[1.6fr_1.1fr_0.9fr_.9fr_0.9fr_220px_190px]

  border-b
  border-border

  px-6
  py-5

  last:border-none
"
            >

              {/* CLIENT */}

              <div>

                <strong
                  className="
                    text-lg
                    font-bold
                  "
                >
                  {item.client}
                </strong>

              </div>

              {/* RESPONSIBLE */}

              <div>

                <span
                  className="
                    text-textSecondary
                  "
                >
                  {item.responsible}
                </span>

              </div>

              {/* DATE */}

              <div>

                <span>

                  {startDate.toLocaleDateString(
                    "pt-BR",
                  )}

                </span>

              </div>

              {/* TIME */}

              <div>

                <span>

                  {startDate.toLocaleTimeString(
                    "pt-BR",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    },
                  )}

                </span>

              </div>

              {/* DURATION */}

              <div>

                <span>
                  {item.duration} min
                </span>

              </div>

              {/* STATUS */}

              <div>

                <SchedulesStatus
                  status={item.status}
                />

              </div>

              {/* ACTIONS */}

              <SchedulesActions

  onView={() =>
    onView(item)
  }

  onReschedule={() =>
    onReschedule(item)
  }

  onCancel={() =>
    onDelete(item)
  }
/>

            </div>
          )
        })}

      </div>

    </div>
  )
}