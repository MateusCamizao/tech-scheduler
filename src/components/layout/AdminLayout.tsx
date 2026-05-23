import {
  ReactNode,
} from "react"

import {
  Sidebar,
} from "@/components/admin/Sidebar"

import {
  AdminHeader,
} from "@/components/admin/AdminHeader"

type Props = {

  children: ReactNode
}

export function AdminLayout({
  children,
}: Props) {

  return (

    <div
      className="
        min-h-screen

        flex

        bg-background
      "
    >

      {/* SIDEBAR */}

      <Sidebar />

      {/* CONTENT */}

      <main
        className="
          flex-1

          flex
          flex-col

          bg-background
        "
      >

        {/* HEADER */}

        <AdminHeader />

        {/* PAGE CONTENT */}

        <div
          className="
            flex-1

            p-8
          "
        >

          {children}

        </div>

      </main>

    </div>
  )
}