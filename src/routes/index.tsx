import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Home } from "@/pages/Home"
import { Login } from "@/pages/Login"
import { Schedule } from "@/pages/Schedule"
import { Confirmation } from "@/pages/Confirmation"
import { Admin } from "@/pages/Admin"

import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        <Route
          path="/agendamento"
          element={
            <PrivateRoute>
              <Schedule />
            </PrivateRoute>
          }
        />

        <Route
          path="/confirmacao"
          element={
            <PrivateRoute>
              <Confirmation />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}