import { api } from "./api"

export async function loginRequest() {

  await new Promise((resolve) =>
    setTimeout(resolve, 1000)
  )

  return {
    user: {
      name: "Mateus",
      email: "mateus@email.com",
    },
    token: "TOKEN_JWT",
  }
}