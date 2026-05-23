import type {
  ReactNode,
} from "react"

import {
  Header,
} from "./Header"

import {
  Sidebar,
} from "./Sidebar"

interface Props {

  children: ReactNode
}

export function PrivateLayout({
  children,
}: Props) {

  return (

    <div
      className="
        min-h-screen

        flex

        bg-background

        text-text
      "
    >

      {/* SIDEBAR */}

      <Sidebar />

      {/* CONTENT */}

      <div
        className="
          flex-1
          
          min-h-screen

          flex
          flex-col

          bg-background
        "
      >

        {/* HEADER */}

        <Header />

        {/* PAGE */}

        <main
          className="
            flex-1
            
            p-8
          "
        >

          {children}

        </main>

      </div>

    </div>
  )
}