export function sanitizePhone(
  value: string,
) {

  return value.replace(
    /\D/g,
    "",
  )
}