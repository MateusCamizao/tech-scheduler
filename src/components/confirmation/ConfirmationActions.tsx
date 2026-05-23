import { Check } from "lucide-react"

import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"

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
          flex-col
          gap-5
        "
      >

        <Input
          label="Nome completo"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <Input
          label="Telefone"
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

        <Input
          label="E-mail"
          placeholder="seuemail@empresa.com"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

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

              ${
                acceptTerms
                  ? `
                    bg-green-500
                    border-green-400
                  `
                  : `
                    border-border
                    bg-background
                  `
              }
            `}
          >

            {acceptTerms && (
              <Check size={16} />
            )}

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

        <div
          className="
            flex
            justify-center

            pt-4
          "
        >

          <Button
            title="Confirmar Agendamento"
            onClick={onConfirm}
            disabled={!canConfirm}
            className={`
              w-[420px]
              h-[72px]

              rounded-[24px]

              text-[22px]
              font-black

              transition-all
              duration-200

              ${
                canConfirm
                  ? `
                    bg-green-500

                    hover:bg-green-400

                    hover:scale-[1.01]

                    active:scale-[0.98]

                    shadow-lg
                    shadow-green-500/20
                  `
                  : `
                    bg-zinc-700
                    text-textSecondary

                    cursor-not-allowed
                  `
              }
            `}
          />

        </div>

      </div>

    </div>
  )
}