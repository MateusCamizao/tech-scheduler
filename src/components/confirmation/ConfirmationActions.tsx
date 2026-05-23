import {
  Check,
} from "lucide-react"

import {
  Input,
} from "@/components/ui/Input"

import {
  Button,
} from "@/components/ui/Button"

import {
  formatPhone,
} from "@/utils/formatPhone"

type Props = {

  name: string
  setName: (value: string) => void

  phone: string
  setPhone: (value: string) => void

  email: string
  setEmail: (value: string) => void

  acceptTerms: boolean
  setAcceptTerms: (value: boolean) => void

  canConfirm: boolean

  onConfirm: () => void
}

export function ConfirmationActions({

  name,
  setName,

  phone,
  setPhone,

  email,
  setEmail,

  acceptTerms,
  setAcceptTerms,

  canConfirm,

  onConfirm,

}: Props) {

  return (

    <div
      className="
        flex-1

        bg-surface1

        border
        border-border

        rounded-[32px]

        p-7

        shadow-sm
      "
    >

      <div
        className="
          flex
          flex-col

          gap-5
        "
      >

        {/* NAME */}

        <div>

          <label
            className="
              mb-2

              block

              text-sm

              text-textSecondary
            "
          >
            Nome completo
          </label>

          <Input
            placeholder="Digite seu nome"

            value={name}

            onChange={(e) =>
              setName(e.target.value)
            }
          />

        </div>

        {/* PHONE */}

        <div>

          <label
            className="
              mb-2

              block

              text-sm

              text-textSecondary
            "
          >
            Telefone
          </label>

          <Input
            placeholder="(11) 99999-9999"

            value={phone}

            onChange={(e) =>
              setPhone(
                formatPhone(
                  e.target.value,
                ),
              )
            }
          />

        </div>

        {/* EMAIL */}

        <div>

          <label
            className="
              mb-2

              block

              text-sm

              text-textSecondary
            "
          >
            E-mail
          </label>

          <Input
            placeholder="seuemail@empresa.com"

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

        </div>

        {/* TERMS */}

        <label
          className="
            flex
            items-center

            gap-4

            pt-2

            cursor-pointer
          "
        >

          <button

            type="button"

            aria-checked={acceptTerms}

            onClick={() =>
              setAcceptTerms(!acceptTerms)
            }

            className={`
              w-7
              h-7

              rounded-[10px]

              border

              flex
              items-center
              justify-center

              transition-all
              duration-200

              ${
                acceptTerms
                  ? `
                    bg-successBg

                    border-successBorder

                    text-successText
                  `
                  : `
                    border-border

                    bg-surface2
                  `
              }
            `}
          >

            {
              acceptTerms && (
                <Check size={16} />
              )
            }

          </button>

          <span
            className="
              text-textSecondary
            "
          >
            Confirmo que li e concordo
            com os termos do agendamento.
          </span>

        </label>

        {/* ACTION */}

        <div
          className="
            flex
            justify-center

            pt-4
          "
        >

          <Button
            variant={
              canConfirm? "success": "primary"
          }
            title="Confirmar Agendamento"

            onClick={onConfirm}

            disabled={!canConfirm}

            className="
              w-full
              max-w-[420px]

              h-[72px]

              rounded-[24px]

              text-[22px]
              font-black
            "
          />

        </div>

      </div>

    </div>
  )
}