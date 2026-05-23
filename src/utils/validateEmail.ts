export function validateEmail(
  email: string,
) {

  const normalizedEmail =
    email.trim().toLowerCase()

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

  return regex.test(
    normalizedEmail,
  )
}