import {
  Calendar,
  Home,
  LogOut,
  Settings,
  Users,
} from "lucide-react"

import {
  NavLink,
  useNavigate,
} from "react-router-dom"

import { useAuth } from "@/contexts/AuthContext"

export function Sidebar() {

  const navigate = useNavigate()

  const { signOut } = useAuth()

  function handleLogout() {

    signOut()

    navigate("/login")
  }

  return (
    <aside
      className="
        w-72
        min-h-screen
        bg-card
        border-r
        border-border
        p-6
        flex
        flex-col
      "
    >

      <h1 className="text-2xl font-bold text-primary mb-10">
        Scheduler
      </h1>

      <nav className="flex flex-col gap-2 flex-1">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `
            flex
            items-center
            gap-3
            p-3
            rounded-xl
            transition

            ${isActive
              ? "bg-primary text-white"
              : "hover:bg-background"
            }
          `
          }
        >
          <Home size={20} />
          Home
        </NavLink>

        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            `
            flex
            items-center
            gap-3
            p-3
            rounded-xl
            transition

            ${isActive
              ? "bg-primary text-white"
              : "hover:bg-background"
            }
          `
          }
        >
          <Calendar size={20} />
          Agendamentos
        </NavLink>

        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `
            flex
            items-center
            gap-3
            p-3
            rounded-xl
            transition

            ${isActive
              ? "bg-primary text-white"
              : "hover:bg-background"
            }
          `
          }
        >
          <Users size={20} />
          Admin
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `
            flex
            items-center
            gap-3
            p-3
            rounded-xl
            transition

            ${isActive
              ? "bg-primary text-white"
              : "hover:bg-background"
            }
          `
          }
        >
          <Settings size={20} />
          Settings
        </NavLink>

      </nav>

      <button
        onClick={handleLogout}
        className="
          flex
          items-center
          gap-3
          p-3
          rounded-xl
          hover:bg-danger
          transition
        "
      >
        <LogOut size={20} />
        Sair
      </button>

    </aside>
  )
}