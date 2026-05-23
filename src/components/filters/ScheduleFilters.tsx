type Props = {

  open: boolean

  onClose: () => void
}

export function ScheduleFilters({
  open,
  onClose,
}: Props) {

  if (!open) return null

  return (

    <div
      className="
        fixed
        inset-0

        z-50

        bg-black/50

        flex
        items-center
        justify-center

        p-4
      "
    >

      <div
        className="
          w-full
          max-w-[520px]

          rounded-3xl

          border
          border-border

          bg-card

          p-7
        "
      >

        {/* HEADER */}

        <div
          className="
            flex
            items-center
            justify-between

            mb-8
          "
        >

          <div>

            <h2
              className="
                text-3xl
                font-black
              "
            >
              Filtros
            </h2>

            <p
              className="
                mt-2

                text-textSecondary
              "
            >
              Refine os agendamentos.
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

              hover:border-primary

              transition-all
            "
          >
            ✕
          </button>

        </div>

        {/* FORM */}

        <div
          className="
            grid

            grid-cols-1
            md:grid-cols-2

            gap-5
          "
        >

          {/* STATUS */}

          <div>

            <label
              className="
                text-sm
                text-textSecondary
              "
            >
              Status
            </label>

            <select
              className="
                mt-2

                w-full
                h-[52px]

                rounded-2xl

                border
                border-border

                bg-input

                px-4

                outline-none

                text-text
              "
            >

              <option>
                Todos
              </option>

              <option>
                Confirmado
              </option>

              <option>
                Pendente
              </option>

              <option>
                Cancelado
              </option>

              <option>
                Reagendado
              </option>

            </select>

          </div>

          {/* RESPONSÁVEL */}

          <div>

            <label
              className="
                text-sm
                text-textSecondary
              "
            >
              Responsável
            </label>

            <select
              className="
                mt-2

                w-full
                h-[52px]

                rounded-2xl

                border
                border-border

                bg-input

                px-4

                outline-none

                text-text
              "
            >

              <option>
                Todos
              </option>

              <option>
                Mateus
              </option>

              <option>
                Eduardo
              </option>

              <option>
                Carlos
              </option>

            </select>

          </div>

          {/* DATA */}

          <div>

            <label
              className="
                text-sm
                text-textSecondary
              "
            >
              Data
            </label>

            <input
              type="date"

              className="
                mt-2

                w-full
                h-[52px]

                rounded-2xl

                border
                border-border

                bg-input

                px-4

                outline-none

                text-text
              "
            />

          </div>

          {/* DURAÇÃO */}

          <div>

            <label
              className="
                text-sm
                text-textSecondary
              "
            >
              Duração
            </label>

            <select
              className="
                mt-2

                w-full
                h-[52px]

                rounded-2xl

                border
                border-border

                bg-input

                px-4

                outline-none

                text-text
              "
            >

              <option>
                Todas
              </option>

              <option>
                30 min
              </option>

              <option>
                60 min
              </option>

              <option>
                90 min
              </option>

            </select>

          </div>

        </div>

        {/* ACTIONS */}

        <div
          className="
            flex
            items-center
            justify-end

            gap-4

            mt-8
          "
        >

          <button
            className="
              h-[48px]

              px-6

              rounded-2xl

              border
              border-border

              hover:border-primary

              transition-all
            "
          >
            Limpar
          </button>

          <button
            className="
              h-[48px]

              px-6

              rounded-2xl

              bg-primary

              text-text
              font-semibold

              hover:opacity-90

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