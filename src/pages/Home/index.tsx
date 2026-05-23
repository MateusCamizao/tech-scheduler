import { PrivateLayout }
from "@/components/layout/PrivateLayout"

import { Button }
from "@/components/ui/Button"

import { Card }
from "@/components/ui/Card"

export function Home() {

  return (
    <PrivateLayout>

      <div className="flex flex-col gap-6">

        <div>

          <h1 className="text-3xl font-bold">
            Bem-vindo ao Scheduler
          </h1>

          <p className="text-textSecondary">
            Gerencie seus agendamentos.
          </p>

        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >

          <Card>

            <h2 className="text-xl font-semibold mb-4">
              Novo Agendamento
            </h2>

            <p className="text-textSecondary mb-6">
              Realize um novo agendamento.
            </p>

            <Button title="Agendar" />

          </Card>

          <Card>

            <h2 className="text-xl font-semibold mb-4">
              Horas Disponíveis
            </h2>

            <p className="text-5xl font-bold text-primary">
              24h
            </p>

          </Card>

          <Card>

            <h2 className="text-xl font-semibold mb-4">
              Próximos Eventos
            </h2>

            <p className="text-textSecondary">
              Nenhum evento encontrado.
            </p>

          </Card>

        </div>

      </div>

    </PrivateLayout>
  )
}