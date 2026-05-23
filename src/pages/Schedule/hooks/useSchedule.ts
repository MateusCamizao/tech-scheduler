import { useMemo }
from "react"

import { useNavigate }
from "react-router-dom"

import {
  validateScheduleForm,
} from "../validators/validateScheduleForm"

import {
  buildSchedulePayload,
} from "../utils/buildSchedulePayload"

import {
  useScheduleStore,
} from "@/store/scheduleStore"

export function useSchedule() {

  const navigate =
    useNavigate()

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

  } = useScheduleStore()

  /*
  |--------------------------------------------------------------------------
  | VALIDATION
  |--------------------------------------------------------------------------
  */

  const validationError =
    useMemo(() => {

      return validateScheduleForm({

        name,
        phone,
        email,
        acceptTerms,
      })

    }, [
      name,
      phone,
      email,
      acceptTerms,
    ])

  const canConfirm =
    !validationError

  /*
  |--------------------------------------------------------------------------
  | ACTIONS
  |--------------------------------------------------------------------------
  */

  function confirmSchedule() {

    if (
      !selectedDate
      ||
      !selectedTime
    ) return

    if (validationError) {

      alert(validationError)

      return
    }

    buildSchedulePayload({

      selectedDate,

      selectedTime,

      duration,

      name,
      phone,
      email,
    })

    navigate(
      "/schedule/success",
    )
  }

  /*
  |--------------------------------------------------------------------------
  | RETURN
  |--------------------------------------------------------------------------
  */

  return {

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

    validationError,

    canConfirm,

    confirmSchedule,
  }
}