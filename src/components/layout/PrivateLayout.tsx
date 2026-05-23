import type { ReactNode } from "react"

import { Header } from "./Header"
import { Sidebar } from "./Sidebar"

interface Props {
  children: ReactNode
}

export function PrivateLayout({
  children,
}: Props) {

  return (
    <div className="flex bg-background text-textPrimary">

      <Sidebar />

      <div className="flex-1 min-h-screen">

        <Header />

        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  )
}