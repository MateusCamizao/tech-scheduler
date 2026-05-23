import dayjs from "dayjs"

import { PrivateLayout } from "@/components/layout/PrivateLayout"

import { Card } from "@/components/ui/Card"

import { ScheduleCalendar } from "@/components/calendar/ScheduleCalendar"

import { TimeSlots } from "@/components/calendar/TimeSlots"

import { DurationSelector } from "@/components/calendar/DurationSelector"

import {
  ConfirmationCard,
} from "@/components/confirmation/ConfirmationCard"

import {
  ConfirmationActions,
} from "@/components/confirmation/ConfirmationActions"

import {
  useSchedule,
} from "./hooks/useSchedule"

export function Schedule() {

  const {

    selectedDate,
    setSelectedDate,

    selectedTime,
    setSelectedTime,

    duration,
    setDuration,

    acceptTerms,
    setAcceptTerms,

    name,
    setName,

    phone,
    setPhone,

    email,
    setEmail,

    canConfirm,

    confirmSchedule,

  } = useSchedule()

  return (

    <PrivateLayout>

      <Card>

        <div
          className="
            flex
            flex-col

            gap-6
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

                gap-5
              "
            >

              {/* CALENDÁRIO */}

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
                    text-[22px]
                    font-black

                    mb-3
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

            {/* DIREITA */}

            <div
              className="
                flex-1

                w-full

                pl-4

                pt-1
              "
            >

              <div
                className="
                  mb-6
                "
              >

                <h2
                  className="
                    text-[30px]

                    leading-none

                    font-black

                    mb-2
                  "
                >
                  Horários Disponíveis
                </h2>

                <p
                  className="
                    text-sm

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

                pt-5
              "
            >

              <div
                className="
                  flex
                  flex-col

                  xl:flex-row

                  gap-5
                "
              >

                {/* CARD */}

                <ConfirmationCard
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                  duration={duration}
                />

                {/* AÇÕES */}

                <ConfirmationActions

                  name={name}
                  setName={setName}

                  phone={phone}
                  setPhone={setPhone}

                  email={email}
                  setEmail={setEmail}

                  acceptTerms={acceptTerms}
                  setAcceptTerms={setAcceptTerms}

                  canConfirm={canConfirm}

                  onConfirm={confirmSchedule}
                />

              </div>

            </div>

          )}

        </div>

      </Card>

    </PrivateLayout>
  )
}