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

        bg-overlay

        flex
        items-center
        justify-center

        p-4
      "
    >

      {/* MODAL */}

      <div
        className="
          w-full
          max-w-[520px]

          rounded-3xl

          border
          border-border

          bg-surface1

          shadow-xl

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

                text-text
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

          {/* CLOSE */}

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
              duration-200
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

                transition-all
                duration-200

                focus:border-primary
                focus:ring-2
                focus:ring-primary/20
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

                transition-all
                duration-200

                focus:border-primary
                focus:ring-2
                focus:ring-primary/20
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

                transition-all
                duration-200

                focus:border-primary
                focus:ring-2
                focus:ring-primary/20
              "
            />

          </div>

        </div>

        {/* ACTIONS */}

        <div
          className="
            mt-8

            flex
            items-center
            justify-end

            gap-3
          "
        >

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
              duration-200
            "
          >
            Cancelar
          </button>

          <button
            className="
              h-[52px]

              px-5

              rounded-2xl

              bg-primary

              text-white
              font-semibold

              hover:bg-primaryHover

              transition-all
              duration-200
            "
          >
            Aplicar filtros
          </button>

        </div>

      </div>

    </div>
  )
}