import dayjs from "dayjs"

export function generateCalendar(
  currentMonth: dayjs.Dayjs,
) {

  /*
  |----------------------------------------------------------------------
  | MONTH LIMITS
  |----------------------------------------------------------------------
  */

  const startOfMonth =
    currentMonth.startOf("month")

  const endOfMonth =
    currentMonth.endOf("month")

  /*
  |----------------------------------------------------------------------
  | CALENDAR LIMITS
  |----------------------------------------------------------------------
  */

  const startDate =
    startOfMonth.startOf("week")

  const endDate =
    endOfMonth.endOf("week")

  /*
  |----------------------------------------------------------------------
  | DAYS
  |----------------------------------------------------------------------
  */

  const days: dayjs.Dayjs[] = []

  let date = startDate

  while (

    date.isBefore(endDate)
    ||
    date.isSame(endDate, "day")

  ) {

    days.push(date)

    date = date.add(1, "day")
  }

  return days
}