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

import {
  useAuth,
} from "@/contexts/AuthContext"

export function Sidebar() {

  const navigate =
    useNavigate()

  const {
    signOut,
  } = useAuth()

  function handleLogout() {

    signOut()

    navigate("/login")
  }

  const itemClass = ({
    isActive,
  }: {
    isActive: boolean
  }) => `

    flex
    items-center

    gap-3

    p-3

    rounded-2xl

    transition-all
    duration-200

    font-medium

    ${
      isActive
        ? `
          bg-primary
          text-white
        `
        : `
          text-textSecondary

          hover:bg-hover
          hover:text-text
        `
    }
  `

  return (

    <aside
      className="
        w-72
        min-h-screen

        bg-backgroundSecondary

        border-r
        border-border

        p-6

        flex
        flex-col
      "
    >

      {/* LOGO */}

      <div
        className="
          mb-10
        "
      >

        <h1
          className="
            text-2xl
            font-black

            text-text
          "
        >
          Scheduler
        </h1>

        <p
          className="
            mt-1

            text-sm

            text-textSecondary
          "
        >
          Management Panel
        </p>

      </div>

      {/* NAVIGATION */}

      <nav
        className="
          flex
          flex-col

          gap-2

          flex-1
        "
      >

        <NavLink
          to="/"
          className={itemClass}
        >
          <Home size={20} />
          Home
        </NavLink>

        <NavLink
          to="/schedule"
          className={itemClass}
        >
          <Calendar size={20} />
          Agendamentos
        </NavLink>

        <NavLink
          to="/admin"
          className={itemClass}
        >
          <Users size={20} />
          Admin
        </NavLink>

        <NavLink
          to="/settings"
          className={itemClass}
        >
          <Settings size={20} />
          Configurações
        </NavLink>

      </nav>

      {/* FOOTER */}

      <div
        className="
          pt-6

          border-t
          border-border
        "
      >

        <button

          onClick={handleLogout}

          className="
            w-full

            flex
            items-center

            gap-3

            p-3

            rounded-2xl

            text-dangerText

            hover:bg-dangerBg

            transition-all
            duration-200
          "
        >

          <LogOut size={20} />

          Sair

        </button>

      </div>

    </aside>
  )
}