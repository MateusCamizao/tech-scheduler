import {

  LayoutDashboard,
  CalendarDays,
  Clock3,
  Users,
  Settings,

} from "lucide-react"

import {
  NavLink,
} from "react-router-dom"

const items = [

  {
    label: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin",
  },

  {
    label: "Agendamentos",
    icon: CalendarDays,
    path: "/admin/schedules",
  },

  {
    label: "Disponibilidade",
    icon: Clock3,
    path: "/admin/availability",
  },

  {
    label: "Usuários",
    icon: Users,
    path: "/admin/users",
  },

  {
    label: "Configurações",
    icon: Settings,
    path: "/admin/settings",
  },
]

export function Sidebar() {

  return (

    <aside
      className="
        w-[280px]
        min-h-screen

        border-r
        border-border

        bg-surface1

        px-5
        py-6

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
            text-3xl
            font-black

            text-text
          "
        >
          Tech Scheduler
        </h1>

        <span
          className="
            text-sm

            text-textSecondary
          "
        >
          Admin Panel
        </span>

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

        {items.map((item) => {

          const Icon =
            item.icon

          return (

            <NavLink

              key={item.path}

              to={item.path}

              className={({ isActive }) => `

                h-[52px]

                rounded-2xl

                px-4

                flex
                items-center

                gap-3

                font-medium

                transition-all
                duration-200

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
              `}
            >

              <Icon size={20} />

              <span>
                {item.label}
              </span>

            </NavLink>
          )
        })}

      </nav>

      {/* FOOTER */}

      <div
        className="
          pt-6
          mt-auto

          border-t
          border-border
        "
      >

        <span
          className="
            text-sm

            text-muted
          "
        >
          v1.0.0
        </span>

      </div>

    </aside>
  )
}