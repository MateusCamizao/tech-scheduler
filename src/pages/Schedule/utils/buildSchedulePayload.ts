import dayjs from "dayjs"

import type {
  SchedulePayload,
} from "../types/schedule.types"

type Params = {

  selectedDate: Date

  selectedTime: string

  duration: number

  name: string

  phone: string

  email: string
}

export function buildSchedulePayload({
  selectedDate,
  selectedTime,
  duration,
  name,
  phone,
  email,
}: Params): SchedulePayload {

  return {

    date:
      dayjs(selectedDate)
        .format(
          "DD/MM/YYYY",
        ),

    hour: selectedTime,

    duration,

    name,

    phone,

    email,
  }
}