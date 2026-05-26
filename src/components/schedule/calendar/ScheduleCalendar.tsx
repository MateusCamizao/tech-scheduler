import dayjs from "dayjs"

import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import {
  useMemo,
  useState,
} from "react"

type Props = {

  selectedDate: Date | null

  onSelect: (
    date: Date,
  ) => void
}

const weekDays = [
  "Dom",
  "Seg",
  "Ter",
  "Qua",
  "Qui",
  "Sex",
  "Sáb",
]

export function ScheduleCalendar({
  selectedDate,
  onSelect,
}: Props) {

  const [currentMonth, setCurrentMonth] =
    useState(dayjs())

  /*
  |----------------------------------------------------------------------
  | DAYS
  |----------------------------------------------------------------------
  */

  const days = useMemo(() => {

    const startOfMonth =
      currentMonth.startOf("month")

    const endOfMonth =
      currentMonth.endOf("month")

    const startDay =
      startOfMonth.day()

    const totalDays =
      endOfMonth.date()

    const previousMonth =
      currentMonth.subtract(1, "month")

    const previousMonthDays =
      previousMonth.daysInMonth()

    const result: {
      date: Date
      currentMonth: boolean
    }[] = []

    /*
    |----------------------------------------------------------------------
    | PREVIOUS MONTH
    |----------------------------------------------------------------------
    */

    for (
      let i = startDay - 1;
      i >= 0;
      i--
    ) {

      result.push({

        date:
          previousMonth
            .date(previousMonthDays - i)
            .toDate(),

        currentMonth: false,
      })
    }

    /*
    |----------------------------------------------------------------------
    | CURRENT MONTH
    |----------------------------------------------------------------------
    */

    for (
      let day = 1;
      day <= totalDays;
      day++
    ) {

      result.push({

        date:
          currentMonth
            .date(day)
            .toDate(),

        currentMonth: true,
      })
    }

    /*
    |----------------------------------------------------------------------
    | NEXT MONTH
    |----------------------------------------------------------------------
    */

    const remaining =
      42 - result.length

    for (
      let i = 1;
      i <= remaining;
      i++
    ) {

      result.push({

        date:
          currentMonth
            .add(1, "month")
            .date(i)
            .toDate(),

        currentMonth: false,
      })
    }

    return result

  }, [currentMonth])

  /*
  |----------------------------------------------------------------------
  | NAVIGATION
  |----------------------------------------------------------------------
  */

  function previousMonth() {

    setCurrentMonth(
      currentMonth.subtract(1, "month"),
    )
  }

  function nextMonth() {

    setCurrentMonth(
      currentMonth.add(1, "month"),
    )
  }

  /*
  |----------------------------------------------------------------------
  | RENDER
  |----------------------------------------------------------------------
  */

  return (

    <div
      className="
        w-full

        bg-surface1

        border
        border-border

        rounded-[32px]

        p-6
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

        <button

          onClick={previousMonth}

          className="
            w-11
            h-11

            rounded-2xl

            bg-surface2

            border
            border-border

            flex
            items-center
            justify-center

            hover:bg-hover
            hover:border-primary

            transition-all
            duration-200

            active:scale-[0.96]
          "
        >

          <ChevronLeft
            size={20}
            className="
              text-text
            "
          />

        </button>

        <strong
          className="
            text-[22px]
            font-black

            text-text
          "
        >

          {
            currentMonth
              .format("MMMM YYYY")
          }

        </strong>

        <button

          onClick={nextMonth}

          className="
            w-11
            h-11

            rounded-2xl

            bg-surface2

            border
            border-border

            flex
            items-center
            justify-center

            hover:bg-hover
            hover:border-primary

            transition-all
            duration-200

            active:scale-[0.96]
          "
        >

          <ChevronRight
            size={20}
            className="
              text-text
            "
          />

        </button>

      </div>

      {/* WEEK DAYS */}

      <div
        className="
          grid

          grid-cols-7

          gap-3

          mb-4
        "
      >

        {weekDays.map((day) => (

          <div

            key={day}

            className="
              h-10

              flex
              items-center
              justify-center

              text-sm
              font-semibold

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

          gap-3
        "
      >

        {days.map((item) => {

          const isSelected =
            selectedDate
              ? dayjs(item.date)
                  .format("YYYY-MM-DD")
                ===
                dayjs(selectedDate)
                  .format("YYYY-MM-DD")
              : false

          const isToday =
            dayjs(item.date)
              .format("YYYY-MM-DD")
            ===
            dayjs()
              .format("YYYY-MM-DD")

          return (

            <button

              key={item.date.toISOString()}

              disabled={!item.currentMonth}

              onClick={() =>
                onSelect(item.date)
              }

              className={`
                h-[58px]

                rounded-2xl

                border

                flex
                items-center
                justify-center

                text-[16px]
                font-semibold

                transition-all
                duration-200

                active:scale-[0.96]

                ${
                  isSelected
                    ? `
                      bg-primary

                      border-primary

                      text-white

                      shadow-lg
                      ring-2
                      ring-primary/30
                    `
                    : isToday
                      ? `
                        bg-primary/10

                        border-primary/40

                        text-primary
                        ring-2
                      ring-primary/30
                      `
                      : item.currentMonth
                        ? `
                          bg-surface1

                          border-border

                          text-text

                          hover:bg-hover

                          hover:border-primary

                          hover:text-text

                          hover:scale-[1.02]
                        `
                        : `
                          bg-surface2

                          border-border

                          text-textMuted

                          cursor-not-allowed

                          opacity-60
                        `
                }
              `}
            >

              {
                dayjs(item.date)
                  .date()
              }

            </button>
          )
        })}

      </div>

    </div>
  )
}