import type { ReactNode } from "react"

import { Navigate } from "react-router-dom"

import { useAuth }
from "@/contexts/AuthContext"

import { FullScreenLoader }
from "@/components/ui/FullScreenLoader"

interface Props {
  children: ReactNode
}

export function PrivateRoute({
  children,
}: Props) {

  const {
    signed,
    loading,
  } = useAuth()

  if (loading) {
    return <FullScreenLoader />
  }

  if (!signed) {
    return <Navigate to="/login" />
  }

  return children
}