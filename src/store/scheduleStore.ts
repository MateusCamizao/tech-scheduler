import { create }
from "zustand"

import { persist }
from "zustand/middleware"

type ScheduleStore = {

  selectedDate?: Date

  selectedTime: string | null

  duration: number

  acceptTerms: boolean

  name: string

  phone: string

  email: string

  setSelectedDate:
    (date?: Date) => void

  setSelectedTime:
    (time: string | null) => void

  setDuration:
    (duration: number) => void

  setAcceptTerms:
    (value: boolean) => void

  setName:
    (value: string) => void

  setPhone:
    (value: string) => void

  setEmail:
    (value: string) => void

  reset:
    () => void
}

export const useScheduleStore =
  create<ScheduleStore>()(

    persist(

      (set) => ({

        selectedDate: undefined,

        selectedTime: null,

        duration: 30,

        acceptTerms: false,

        name: "",

        phone: "",

        email: "",

        setSelectedDate:
          (selectedDate) =>
            set({ selectedDate }),

        setSelectedTime:
          (selectedTime) =>
            set({ selectedTime }),

        setDuration:
          (duration) =>
            set({ duration }),

        setAcceptTerms:
          (acceptTerms) =>
            set({ acceptTerms }),

        setName:
          (name) =>
            set({ name }),

        setPhone:
          (phone) =>
            set({ phone }),

        setEmail:
          (email) =>
            set({ email }),

        reset:
          () =>
            set({

              selectedDate: undefined,

              selectedTime: null,

              duration: 30,

              acceptTerms: false,

              name: "",

              phone: "",

              email: "",
            }),
      }),

      {
        name:
          "schedule-storage",
      },
    ),
  )