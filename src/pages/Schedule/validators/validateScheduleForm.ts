import {
  sanitizePhone,
} from "@/utils/sanitizePhone"

import {
  validateEmail,
} from "@/utils/validateEmail"

type Params = {

  name: string

  phone: string

  email: string

  acceptTerms: boolean
}

export function validateScheduleForm({

  name,
  phone,
  email,
  acceptTerms,

}: Params) {

  const sanitizedPhone =
    sanitizePhone(phone)

  const validName =
    name.trim().length >= 3

  if (!validName) {

    return "Informe um nome válido."
  }

  const validPhone =
    sanitizedPhone.length === 11

  if (!validPhone) {

    return "Telefone inválido."
  }

  const validEmail =
    validateEmail(email)

  if (!validEmail) {

    return "E-mail inválido."
  }

  if (!acceptTerms) {

    return "Aceite os termos para continuar."
  }

  return null
}