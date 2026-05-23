import { PrivateLayout } from "@/components/layout/PrivateLayout"

export function Admin() {
  return (
    <PrivateLayout>
      <h1 className="text-3xl font-bold">
        Painel Administrativo
      </h1>
    </PrivateLayout>
  )
}