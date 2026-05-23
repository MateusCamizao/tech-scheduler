type Props = {

  status:
    | "confirmed"
    | "cancelled"
    | "rescheduled"
    | "pending"
}

const statusMap = {

  confirmed: {

    label: "Confirmado",

    className:
      `
        bg-successBg
        text-successText

        border
        border-successBorder
      `,
  },

  cancelled: {

    label: "Cancelado",

    className:
      `
        bg-red-500/10
        text-red-400

        border
        border-red-500/20
      `,
  },

  rescheduled: {

    label: "Reagendado",

    className:
      `
        bg-yellow-500/10
        text-yellow-400

        border
        border-yellow-500/20
      `,
  },

  pending: {

    label: "Pendente",

    className:
      `
        bg-blue-500/10
        text-primary

        border
        border-blue-500/20
      `,
  },
}

export function ScheduleStatus({
  status,
}: Props) {

  const current =
    statusMap[status]

  return (

    <span
      className={`
        min-w-[120px]

        px-4
        py-2

        rounded-xl

        text-sm
        font-semibold

        flex
        items-center
        justify-center

        ${current.className}
      `}
    >

      {current.label}

    </span>
  )
}