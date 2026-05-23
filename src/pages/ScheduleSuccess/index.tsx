import { useNavigate,} from "react-router-dom"

import { useScheduleStore } from "@/store/scheduleStore"

import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  Phone,
  RotateCcw,
  Trash2,
} from "lucide-react"
import { Card } from "@/components/ui/Card"

import { Button } from "@/components/ui/Button"

import { PrivateLayout } from "@/components/layout/PrivateLayout"

export function ScheduleSuccess() {

  const navigate = useNavigate()
  const {

    selectedDate,
    selectedTime,

    duration,

    name,
    phone,
    email,

    reset,

  } = useScheduleStore()
  function handleNewSchedule() {

    reset()

    navigate("/schedule")
  }

  function handleReschedule() {

    navigate("/schedule")
  }

  function handleCancel() {

    reset()
    navigate("/schedule")
  }
  return (
    <PrivateLayout>
    <div
      className="
        min-h-[80vh]

        bg-[#050816]

        flex
        items-center
        justify-center

        px-4
      "
    >

      <div
        className="
          w-full
          max-w-[760px]

          rounded-[32px]

          border
          border-white/10

          bg-[#070d1f]

          p-6
        "
      >

        {/* HEADER */}

        <div
          className="
            flex
            flex-col
            items-center

            text-center
          "
        >

          <div
            className="
              h-[90px]
              w-[90px]

              rounded-full

              bg-green-500/10

              border
              border-green-500/20

              flex
              items-center
              justify-center

              mb-5
            "
          >

            <CheckCircle2
              size={48}
              className="
                text-green-400
              "
            />

          </div>

          <h1
            className="
              text-[36px]
              font-black

              text-white
            "
          >
            Agendamento Confirmado
          </h1>

          <p
            className="
              mt-3

              text-[16px]
              text-zinc-400

              max-w-[520px]
            "
          >
            Sua reunião foi agendada com sucesso.
            Você receberá futuras confirmações
            e informações por e-mail.
          </p>
          <p
            className="
              mt-4

              text-white
              text-[18px]

              font-semibold
            "
          >

  {name}

</p>
        </div>

        {/* CARD INFO */}

        <div
          className="
            mt-8

            rounded-[28px]

            border
            border-white/10

            bg-[#0f172f]

            p-6
          "
        >

          <div
            className="
              grid
              grid-cols-1

              md:grid-cols-2

              gap-5
            "
          >

            {/* DATA */}

            <div
              className="
                rounded-[20px]
                bg-[#091126]

                border
                border-white/10

                p-5
              "
            >

              <div
                className="
                  flex
                  items-center

                  gap-3

                  mb-3
                "
              >

                <CalendarDays
                  size={20}
                  className="
                    text-blue-400
                  "
                />

                <span
                  className="
                    text-zinc-400
                    text-[14px]
                  "
                >
                  Data
                </span>

              </div>

              <strong
                className="
                  text-white
                  text-[20px]
                "
              >
                {
                  selectedDate
                    ?.toLocaleDateString(
                      "pt-BR",
                    )
                }
              </strong>

            </div>

            {/* HORÁRIO */}

            <div
              className="
                rounded-[20px]

                bg-[#091126]

                border
                border-white/10

                p-5
              "
            >

              <div
                className="
                  flex
                  items-center

                  gap-3

                  mb-3
                "
              >

                <Clock3
                  size={20}
                  className="
                    text-blue-400
                  "
                />

                <span
                  className="
                    text-zinc-400
                    text-[14px]
                  "
                >
                  Horário
                </span>

              </div>

              <strong
                className="
                  text-white
                  text-[20px]
                "
              >
                {selectedTime}
              </strong>

            </div>

            {/* EMAIL */}

            <div
              className="
                rounded-[20px]

                bg-[#091126]

                border
                border-white/10

                p-5
              "
            >

              <div
                className="
                  flex
                  items-center

                  gap-3

                  mb-3
                "
              >

                <Mail
                  size={20}
                  className="
                    text-blue-400
                  "
                />

                <span
                  className="
                    text-zinc-400
                    text-[14px]
                  "
                >
                  E-mail
                </span>

              </div>

              <strong
                className="
                  text-white
                  text-[16px]
                "
              >
                {email}
              </strong>

            </div>

            {/* TELEFONE */}

            <div
              className="
                rounded-[20px]

                bg-[#091126]

                border
                border-white/10

                p-5
              "
            >

              <div
                className="
                  flex
                  items-center

                  gap-3

                  mb-3
                "
              >

                <Phone
                  size={20}
                  className="
                    text-blue-400
                  "
                />

                <span
                  className="
                    text-zinc-400
                    text-[14px]
                  "
                >
                  Telefone
                </span>

              </div>

              <strong
                className="
                  text-white
                  text-[16px]
                "
              >
                {phone}
              </strong>

            </div>
                
          </div>

          <div
              className="
                rounded-[20px]
                mt-5
                bg-[#091126]

                border
                border-white/10
                p-5
              "
            >
              {/* DURAÇÃO */}

              <div
                className="
                  flex
                  items-center
                  text-center
                  justify-center
                  gap-3
                  mb-2
                "
              >

              <span
              className="
                text-textSecondary
                text-lg
              "
            >
              Duração da reunião
            </span>

              </div>

              <strong
                className="
                  text-white
                  text-[16px]
                "
              >
                <h2
              className="
                mt-2
                text-2xl
                font-black
                flex
                items-center
                justify-center
              "
            >
              {duration} minutos
            </h2>
              </strong>

            </div>

          {/* ACTIONS */}

          <div
            className="
              flex
              flex-col

              md:flex-row

              items-center
              justify-center

              gap-4
            "
          ></div>
        </div>

        {/* BOTÕES */}

        <div
          className="
            mt-8

            grid
            grid-cols-1

            md:grid-cols-3

            gap-4
          "
        >

          {/* NOVO */}

          <button
            title="Novo Agendamento"
            onClick={handleNewSchedule}
            className="
              h-[56px]

              rounded-[18px]

              bg-blue-600

              hover:bg-blue-500

              transition-all

              text-white
              font-bold

              flex
              items-center
              justify-center

              gap-3
            "
          >

            <CalendarDays size={18} />

            Novo Agendamento

          </button>

          {/* REAGENDAR */}

          <button
            title="Reagendar"
            onClick={handleReschedule}
            className="
              h-[56px]

              rounded-[18px]

              bg-[#111a33]

              border
              border-white/10

              hover:bg-[#16213d]

              transition-all

              text-white
              font-bold

              flex
              items-center
              justify-center

              gap-3
            "
          >

            <RotateCcw size={18} />

            Reagendar

          </button>

          {/* CANCELAR */}

          <button
            title="Cancelar"
            onClick={handleCancel}
            className="
              h-[56px]

              rounded-[18px]

              bg-red-500/10

              border
              border-red-500/20

              hover:bg-red-500/20

              transition-all

              text-red-300
              font-bold

              flex
              items-center
              justify-center

              gap-3
            "
            
          >
            
            <Trash2 size={18} />

            Cancelar

          </button>

        </div>

      </div>
    
    </div>
    </PrivateLayout>
  )
}