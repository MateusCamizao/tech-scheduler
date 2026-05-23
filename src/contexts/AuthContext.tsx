import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import type { ReactNode } from "react"

import { loginRequest }
from "@/services/auth"

type User = {
  name: string
  email: string
}

type AuthContextData = {
  user: User | null
  signed: boolean
  loading: boolean

  signIn: (
    email: string,
    password: string,
  ) => Promise<void>

  signOut: () => void
}

const AuthContext =
  createContext({} as AuthContextData)

interface Props {
  children: ReactNode
}

export function AuthProvider({
  children,
}: Props) {

  const [user, setUser] =
    useState<User | null>(null)

  const [loading, setLoading] =
    useState(true)

  useEffect(() => {

    try {

      const storageUser =
        localStorage.getItem("@user")

      if (storageUser) {
        setUser(JSON.parse(storageUser))
      }

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }

  }, [])

  async function signIn(
    email: string,
    password: string,
  ) {

    try {

      setLoading(true)

      const response =
        await loginRequest()

      localStorage.setItem(
        "@user",
        JSON.stringify(response.user),
      )

      localStorage.setItem(
        "@token",
        response.token,
      )

      setUser(response.user)

    } catch (error) {

      console.log(error)

    } finally {

      setLoading(false)

    }
  }

  function signOut() {

    localStorage.removeItem("@user")
    localStorage.removeItem("@token")

    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signed: !!user,
        loading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}