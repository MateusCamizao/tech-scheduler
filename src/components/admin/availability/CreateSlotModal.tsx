import {
  useEffect,
  useMemo,
} from "react"

import {
  X,
} from "lucide-react"

import type {
  User,
} from "@/types/user.types"

type Props = {
  open: boolean
  onClose: () => void

  responsibleId: string
  onResponsibleIdChange: (value: string) => void

  client: string
  onClientChange: (value: string) => void

  email: string
  onEmailChange: (value: string) => void

  date: string
  onDateChange: (value: string) => void

  startTime: string
  onStartTimeChange: (value: string) => void

  endTime: string
  onEndTimeChange: (value: string) => void

  users: User[]

  onCreate: () => void
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

export function CreateSlotModal({
  open,
  onClose,

  responsibleId,
  onResponsibleIdChange,

  client,
  onClientChange,

  email,
  onEmailChange,

  date,
  onDateChange,

  startTime,
  onStartTimeChange,

  endTime,
  onEndTimeChange,

  users,

  onCreate,
}: Props) {

  const isValidEmail =
    useMemo(() => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }, [email])

  const canCreate =
    responsibleId.trim().length > 0
    &&
    client.trim().length > 2
    &&
    isValidEmail
    &&
    date.trim().length === 10
    &&
    startTime.trim().length === 5
    &&
    endTime.trim().length === 5

  const hasInvalidFields =
    responsibleId.length > 0
    ||
    client.length > 0
    ||
    email.length > 0
    ||
    date.length > 0
    ||
    startTime.length > 0
    ||
    endTime.length > 0

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

  function formatDate(value: string) {
    const numbers =
      value.replace(/\D/g, "").slice(0, 8)

    if (numbers.length <= 2) {
      return numbers
    }

    if (numbers.length <= 4) {
      return `${numbers.slice(0, 2)}/${numbers.slice(2)}`
    }

    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4)}`
  }

  function formatTime(value: string) {
    const numbers =
      value.replace(/\D/g, "").slice(0, 4)

    if (numbers.length <= 2) {
      return numbers
    }

    return `${numbers.slice(0, 2)}:${numbers.slice(2)}`
  }

  function handleCreate() {
    if (!canCreate) return

    onCreate()
  }

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
              Novo Slot
            </h2>

            <p className="mt-2 text-textSecondary">
              Cadastre um novo horário/agendamento.
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
          <Field label="Responsável">
            <select
              value={responsibleId}
              onChange={(event) =>
                onResponsibleIdChange(event.target.value)
              }
              className={inputClass}
            >
              <option value="">
                Selecione
              </option>

              {users.map((user) => (
                <option
                  key={user.id}
                  value={user.id}
                >
                  {user.name}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Cliente">
            <input
              value={client}
              onChange={(event) =>
                onClientChange(event.target.value)
              }
              placeholder="Nome do cliente"
              className={inputClass}
            />
          </Field>

          <Field label="E-mail">
            <input
              value={email}
              onChange={(event) =>
                onEmailChange(event.target.value)
              }
              placeholder="cliente@email.com"
              className={`
                ${inputClass}

                ${
                  email.length > 0 && !isValidEmail
                    ? `
                      border-warningBorder
                      focus:border-warningBorder
                    `
                    : ""
                }
              `}
            />
          </Field>

          <Field label="Data">
            <input
              value={date}
              onChange={(event) =>
                onDateChange(formatDate(event.target.value))
              }
              placeholder="dd/mm/aaaa"
              className={inputClass}
            />
          </Field>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Field label="Hora inicial">
              <input
                value={startTime}
                onChange={(event) =>
                  onStartTimeChange(formatTime(event.target.value))
                }
                placeholder="08:00"
                className={inputClass}
              />
            </Field>

            <Field label="Hora final">
              <input
                value={endTime}
                onChange={(event) =>
                  onEndTimeChange(formatTime(event.target.value))
                }
                placeholder="09:00"
                className={inputClass}
              />
            </Field>
          </div>
        </div>

        {
          hasInvalidFields && !canCreate
            ? (
              <p className="mt-5 text-sm font-medium text-warningText">
                Preencha responsável, cliente, e-mail válido, data e horários.
              </p>
            )
            : null
        }

        <div className="mt-8 flex justify-end gap-3">
          <button
            onClick={onClose}
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
            Cancelar
          </button>

          <button
            onClick={handleCreate}
            disabled={!canCreate}
            className={`
              h-[52px]
              px-5
              rounded-2xl
              font-semibold
              transition-all

              ${
                canCreate
                  ? `
                    bg-successBg
                    text-successText
                    border
                    border-successBorder
                    hover:brightness-110
                  `
                  : hasInvalidFields
                    ? `
                      bg-warningBg
                      text-warningText
                      border
                      border-warningBorder
                      cursor-not-allowed
                    `
                    : `
                      bg-dangerBg
                      text-dangerText
                      border
                      border-dangerBorder
                      cursor-not-allowed
                    `
              }
            `}
          >
            Criar slot
          </button>
        </div>
      </div>
    </div>
  )
}

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