export function validateEmail(
  email: string,
) {

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  return regex.test(email)
}

export function validatePhone(
  phone: string,
) {

  const numbers =
    phone.replace(/\D/g, "")

  return (
    numbers.length >= 10
    &&
    numbers.length <= 11
  )
}

interface ValidateScheduleFormDTO {

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

}: ValidateScheduleFormDTO) {

  if (!name.trim()) {

    return "Informe seu nome."
  }

  if (!validatePhone(phone)) {

    return "Telefone inválido."
  }

  if (!validateEmail(email)) {

    return "E-mail inválido."
  }

  if (!acceptTerms) {

    return "Aceite os termos para continuar."
  }

  return null
}