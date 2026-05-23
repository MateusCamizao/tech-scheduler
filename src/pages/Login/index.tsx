import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { useForm } from "react-hook-form"

import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"

import { PublicLayout } from "@/components/layout/PublicLayout"

import { Card } from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"

import { useAuth } from "@/contexts/AuthContext"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

type LoginFormData =
  z.infer<typeof loginSchema>

export function Login() {

  const navigate = useNavigate()

  const { signIn } = useAuth()

  const [loading, setLoading] =
    useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver:
      zodResolver(loginSchema),
  })

  async function onSubmit(
    data: LoginFormData,
  ) {

    try {

      setLoading(true)

      await signIn(
        data.email,
        data.password,
      )

      navigate("/")

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }
  }

  return (
  <PublicLayout>

    <div
      className="
        w-full
        max-w-md
      "
    >

      <div className="mb-8 text-center">

        <h1
          className="
            text-5xl
            font-black
            mb-3
            bg-gradient-to-r
            from-primary
            to-secondary
            bg-clip-text
            text-transparent
          "
        >
          Scheduler
        </h1>

        <p className="text-textSecondary">
          Plataforma de agendamentos
        </p>

      </div>

      <Card>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
        >

          <div>

            <h2 className="text-2xl font-bold mb-2">
              Entrar
            </h2>

            <p className="text-textSecondary">
              Acesse sua plataforma
            </p>

          </div>

          <div>

            <Input
              placeholder="Email"
              type="email"
              {...register("email")}
            />

            {errors.email && (
              <p className="text-danger text-sm mt-2">
                Email inválido
              </p>
            )}

          </div>

          <div>

            <Input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />

            {errors.password && (
              <p className="text-danger text-sm mt-2">
                Senha inválida
              </p>
            )}

          </div>

          <Button
            type="submit"
            title="Entrar"
            loading={loading}
          />

        </form>

      </Card>

    </div>

  </PublicLayout>
)
}