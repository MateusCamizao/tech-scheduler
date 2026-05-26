import {
  useEffect,
} from "react"

import {
  X,
} from "lucide-react"

type Props = {
  open: boolean
  onClose: () => void

  onApply: () => void

  startDate: string
  onStartDateChange: (value: string) => void

  endDate: string
  onEndDateChange: (value: string) => void

  startTime: string
  onStartTimeChange: (value: string) => void

  endTime: string
  onEndTimeChange: (value: string) => void

  duration: string
  onDurationChange: (value: string) => void

  responsible: string
  onResponsibleChange: (value: string) => void

  responsibles: string[]

  onClear: () => void
}

const hours = [
  "",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
]

export function SchedulesFilterModal({
  open,
  onClose,

  startDate,
  onStartDateChange,

  endDate,
  onEndDateChange,

  startTime,
  onStartTimeChange,

  endTime,
  onEndTimeChange,

  duration,
  onDurationChange,

  responsible,
  onResponsibleChange,

  responsibles,

  onClear,

  onApply,
}: Props) {

  useEffect(() => {

    function handleEsc(event: KeyboardEvent) {

      if (event.key === "Escape") {
        onClose()
      }
    }

    if (open) {
      window.addEventListener("keydown", handleEsc)
    }

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }

  }, [open, onClose])

  if (!open) return null

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
          max-w-[620px]
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
              Filtros
            </h2>

            <p className="mt-2 text-textSecondary">
              Refine os agendamentos exibidos.
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <Field label="Data inicial">
            <input
              value={startDate}
              onChange={(e) =>
                onStartDateChange(e.target.value)
              }
              placeholder="dd/mm/aaaa"
              className={inputClass}
            />
          </Field>

          <Field label="Data final">
            <input
              value={endDate}
              onChange={(e) =>
                onEndDateChange(e.target.value)
              }
              placeholder="dd/mm/aaaa"
              className={inputClass}
            />
          </Field>

          <Field label="Hora inicial">
            <select
              value={startTime}
              onChange={(e) =>
                onStartTimeChange(e.target.value)
              }
              className={inputClass}
            >
              <option value="">Todas</option>

              {hours
                .filter(Boolean)
                .map((hour) => (
                  <option
                    key={hour}
                    value={hour}
                  >
                    {hour}
                  </option>
                ))}
            </select>
          </Field>

          <Field label="Hora final">
            <select
              value={endTime}
              onChange={(e) =>
                onEndTimeChange(e.target.value)
              }
              className={inputClass}
            >
              <option value="">Todas</option>

              {hours
                .filter(Boolean)
                .map((hour) => (
                  <option
                    key={hour}
                    value={hour}
                  >
                    {hour}
                  </option>
                ))}
            </select>
          </Field>

          <Field label="Duração">
            <select
              value={duration}
              onChange={(e) =>
                onDurationChange(e.target.value)
              }
              className={inputClass}
            >
              <option value="">Todas</option>
              <option value="30">30 min</option>
              <option value="60">60 min</option>
              <option value="90">90 min</option>
            </select>
          </Field>

          <Field label="Responsável">
            <select
              value={responsible}
              onChange={(e) =>
                onResponsibleChange(e.target.value)
              }
              className={inputClass}
            >
              <option value="">Todos</option>

              {responsibles.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </select>
          </Field>

        </div>

        <div className="mt-8 flex justify-end gap-3">

          <button
            onClick={() => {
              onClear()
              onClose()
            }}
            
            className="
              h-[52px]
              px-5
              rounded-2xl
              border
              border-border
              bg-surface2
              text-text
              hover:bg-hover
              transition-all
            "
          >
            Limpar
          </button>

          <button
            onClick={onApply}
            className="
              h-[52px]
              px-5
              rounded-2xl
              bg-primary
              text-white
              font-semibold
              hover:bg-primaryHover
              transition-all
            "
          >
            Aplicar filtros
          </button>

        </div>

      </div>

    </div>
  )
}

const inputClass = `
  w-full
  h-[52px]
  rounded-2xl
  border
  border-border
  bg-input
  px-4
  outline-none
  text-text
  placeholder:text-textSecondary
  focus:border-primary
  transition-all
`

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {

  return (
    <label>
      <span className="text-sm text-textSecondary">
        {label}
      </span>

      <div className="mt-2">
        {children}
      </div>
    </label>
  )
}