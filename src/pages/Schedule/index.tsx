import { useMemo, useState } from "react"

import dayjs from "dayjs"

import {
  CalendarDays,
  Check,
} from "lucide-react"

import { PrivateLayout } from "@/components/layout/PrivateLayout"

import { Card } from "@/components/ui/Card"

import { Button } from "@/components/ui/Button"

import { Input } from "@/components/ui/Input"

import { ScheduleCalendar } from "@/components/calendar/ScheduleCalendar"

import { TimeSlots } from "@/components/calendar/TimeSlots"

import { DurationSelector } from "@/components/calendar/DurationSelector"
export function Schedule() {

  const [selectedDate, setSelectedDate] =
    useState<Date>()

  const [selectedTime, setSelectedTime] =
    useState<string | null>(null)

  const [duration, setDuration] =
    useState(30)

  const [acceptTerms, setAcceptTerms] =
    useState(false)

  const [name, setName] =
    useState("")

  const [phone, setPhone] =
    useState("")

  const [email, setEmail] =
    useState("")

  const canConfirm = useMemo(() => {

    return (
      name.length > 3
      &&
      phone.length > 7
      &&
      email.length > 5
      &&
      acceptTerms
    )

  }, [
    name,
    phone,
    email,
    acceptTerms,
  ])

  return (
    <PrivateLayout>

      <Card>

        <div
      className="
            flex
            flex-col
            gap-10

          "
        >

          {/* TOPO */}

          <div
            className="
              flex
              flex-col

              2xl:flex-row

              items-start

              gap-0
            "
          >

            {/* ESQUERDA */}

            <div
              className="
                w-full

                max-w-[720px]

                flex
                flex-col
                gap-7
              "
            >

              <ScheduleCalendar
                selected={selectedDate}

                onSelect={(date) => {

                  setSelectedDate(date)

                  setSelectedTime(null)
                }}
              />

              {/* DURAÇÃO */}

              <div>

                <h2
                  className="
                    text-[24px]
                    font-black

                    mb-4
                  "
                >
                  Duração
                </h2>

                <DurationSelector
                  duration={duration}
                  onChange={setDuration}
                />

              </div>

            </div>

            {/* HORÁRIOS */}

            <div
              className="
                flex-1

                w-full

                pl-10

                pt-4
              "
            >

              <div className="mb-8">

                <h2
                  className="
                    text-[42px]
                    leading-none

                    font-black

                    mb-3
                  "
                >
                  Horários Disponíveis
                </h2>

                <p
                  className="
                    text-lg
                    text-textSecondary
                  "
                >
                  Horários ocupados ficam bloqueados.
                </p>

              </div>

              <TimeSlots
                selectedTime={selectedTime}
                onSelect={setSelectedTime}
              />

            </div>

          </div>

          {/* CONFIRMAÇÃO */}

          {selectedDate && selectedTime && (

            <div
              className="
                border-t
                border-border

                pt-8
              "
            >

              <div
                className="
                  grid
                  grid-cols-1

                  xl:grid-cols-[380px_1fr]

                  gap-6
                "
              >

                {/* INFO */}

                <div
                  className="
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

                      mb-8
                    "
                  >

                    <div
                      className="
                        h-14
                        w-14

                        rounded-2xl

                        bg-background

                        border
                        border-border

                        flex
                        items-center
                        justify-center

                        shrink-0
                      "
                    >

                      <CalendarDays size={24} />

                    </div>

                    <div>

                      <p
                        className="
                          text-[34px]
                          font-black
                          leading-none
                        "
                      >

                        {dayjs(selectedDate)
                          .format(
                            "DD/MM/YYYY",
                          )}

                      </p>

                      <p
                        className="
                          text-[18px]
                          text-textSecondary

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
                      gap-6
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

                      <p
                        className="
                          text-[18px]
                          font-bold
                        "
                      >
                        {duration} minutos
                      </p>

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

                      <p
                        className="
                          text-[18px]
                          font-bold
                        "
                      >
                        Reunião Online
                      </p>

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

                      <p
                        className="
                          text-[18px]
                          font-bold
                        "
                      >

                        {dayjs(selectedDate)
                          .format(
                            "DD/MM/YYYY",
                          )}{" "}

                        às{" "}

                        {selectedTime}

                      </p>

                    </div>

                  </div>

                </div>

                {/* FORM */}

                <div
                  className="
                    bg-card

                    border
                    border-border

                    rounded-[32px]

                    p-7

                    flex
                    flex-col
                    gap-5
                  "
                >

                  {/* NOME */}

                  <div>

                    <label
                      className="
                        text-sm
                        text-textSecondary

                        mb-2
                        block
                      "
                    >
                      Nome completo
                    </label>

                    <Input
                      value={name}

                      onChange={(e) =>
                        setName(
                          e.target.value,
                        )
                      }

                      placeholder="Digite seu nome"
                    />

                  </div>

                  {/* TELEFONE */}

                  <div>

                    <label
                      className="
                        text-sm
                        text-textSecondary

                        mb-2
                        block
                      "
                    >
                      Telefone
                    </label>

                    <Input
                      value={phone}

                      onChange={(e) =>
                        setPhone(
                          e.target.value,
                        )
                      }

                      placeholder="(11) 99999-9999 "
                    />

                  </div>

                  {/* EMAIL */}

                  <div>

                    <label
                      className="
                        text-sm
                        text-textSecondary

                        mb-2
                        block
                      "
                    >
                      E-mail
                    </label>

                    <Input
                      value={email}

                      onChange={(e) =>
                        setEmail(
                          e.target.value,
                        )
                      }

                      placeholder="seuemail@empresa.com"
                    />

                  </div>

                  {/* CHECK */}

                  <label
                    className="
                      flex
                      items-start
                      gap-4

                      cursor-pointer

                      pt-2
                    "
                  >

                    <button
                      type="button"

                      onClick={() =>
                        setAcceptTerms(
                          !acceptTerms,
                        )
                      }

                      className={`
                        h-6
                        w-6

                        mt-1

                        rounded-lg

                        border

                        flex
                        items-center
                        justify-center

                        transition-all

                        ${
                          acceptTerms
                            ? `
                              bg-green-500
                              border-green-500
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
                        leading-relaxed
                      "
                    >
                      Confirmo que li e concordo
                      com os termos do agendamento.
                    </span>

                  </label>

                  {/* BOTÃO */}

                  <div className="
                    flex
                    justify-center
                    pt-3"
>

                    <Button
                      title="Confirmar Agendamento"

                      disabled={!canConfirm}

                      className={`
                        w-[55%]
                        h-[74px]

                        rounded-[24px]

                        text-[22px]
                        font-black

                        border-0

                        transition-all
                        duration-200
                        flex
                        items-center
                        justify-center

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
                              text-zinc-400

                              cursor-not-allowed
                            `
                        }
                      `}
                    />

                  </div>

                </div>

              </div>

            </div>

          )}

        </div>

      </Card>

    </PrivateLayout>
  )
}