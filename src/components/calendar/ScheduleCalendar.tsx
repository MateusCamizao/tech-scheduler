import { useMemo, useState }
from "react"

import dayjs from "dayjs"

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import {
  generateCalendar,
} from "./calendar.utils"

interface Props {
  selected: Date | undefined

  onSelect: (
    date: Date,
  ) => void
}

const weekDays = [
  "Su",
  "Mo",
  "Tu",
  "We",
  "Th",
  "Fr",
  "Sa",
]

export function ScheduleCalendar({
  selected,
  onSelect,
}: Props) {

  const [currentMonth, setCurrentMonth] =
    useState(dayjs())

  const days = useMemo(() => {

    return generateCalendar(
      currentMonth,
    )

  }, [currentMonth])

  function previousMonth() {

    setCurrentMonth(
      currentMonth.subtract(
        1,
        "month",
      ),
    )
  }

  function nextMonth() {

    setCurrentMonth(
      currentMonth.add(
        1,
        "month",
      ),
    )
  }

  return (
    <div
      className="
        bg-card
        border
        border-border

        rounded-[28px]

        px-6
        py-5

        w-full
        max-w-[530px]
      "
    >

      {/* HEADER */}

      <div
        className="
          flex
          items-center
          justify-between

          mb-6
        "
      >

        <h2
          className="
            text-[38px]
            leading-none

            font-black
          "
        >

          {currentMonth.format(
            "MMMM YYYY",
          )}

        </h2>

        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          <button
            onClick={previousMonth}

            className="
              h-10
              w-10

              rounded-2xl

              border
              border-border

              bg-background

              flex
              items-center
              justify-center

              hover:border-primary
              hover:bg-primary/10

              transition-all
            "
          >

            <ChevronLeft size={16} />

          </button>

          <button
            onClick={nextMonth}

            className="
              h-10
              w-10

              rounded-2xl

              border
              border-border

              bg-background

              flex
              items-center
              justify-center

              hover:border-primary
              hover:bg-primary/10

              transition-all
            "
          >

            <ChevronRight size={16} />

          </button>

        </div>

      </div>

      {/* WEEK */}

      <div
        className="
          grid
          grid-cols-7

          mb-3
        "
      >

        {weekDays.map((day) => (

          <div
            key={day}

            className="
              text-center

              text-[13px]
              font-bold

              text-textSecondary
            "
          >

            {day}

          </div>

        ))}

      </div>

      {/* DAYS */}

      <div
        className="
          grid
          grid-cols-7

          gap-y-1
        "
      >

        {days.map((day) => {

          const isCurrentMonth =
            day.month() ===
            currentMonth.month()

          const isSelected =
            selected
            &&
            day.isSame(
              selected,
              "day",
            )

          const isToday =
            day.isSame(
              dayjs(),
              "day",
            )

          return (

            <button
              key={day.toString()}

              onClick={() =>
                onSelect(
                  day.toDate(),
                )
              }

              className={`
                h-[52px]
                w-[52px]

                mx-auto

                rounded-[16px]

                text-[16px]
                font-semibold

                flex
                items-center
                justify-center

                transition-all
                duration-200

                ${
                  isCurrentMonth
                    ? "text-white"
                    : `
                      text-gray-600
                      opacity-40
                    `
                }

                ${
                  isSelected
                    ? `
                      bg-primary
                      text-white

                      shadow-lg
                    `
                    : `
                      hover:bg-primary
                      hover:text-white
                    `
                }

                ${
                  isToday
                    ? `
                      border
                      border-primary
                    `
                    : ""
                }
              `}
            >

              {day.format("D")}

            </button>

          )
        })}

      </div>

    </div>
  )
}