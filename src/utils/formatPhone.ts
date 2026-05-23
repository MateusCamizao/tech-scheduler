export function formatPhone(
  value: string,
) {

  const numbers =
    value.replace(/\D/g, "")

  if (
    numbers.length <= 2
  ) {
    return numbers
  }

  if (
    numbers.length <= 7
  ) {

    return numbers.replace(
      /(\d{2})(\d+)/,
      "($1) $2",
    )
  }

  if (
    numbers.length <= 11
  ) {

    return numbers.replace(
      /(\d{2})(\d{5})(\d+)/,
      "($1) $2-$3",
    )
  }

  return numbers.replace(
    /(\d{2})(\d{5})(\d{4}).*/,
    "($1) $2-$3",
  )
}