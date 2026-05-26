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

    className: `
      bg-successBg

      !text-successText

      border
      border-successBorder
    `,
  },

  cancelled: {

    label: "Cancelado",

    className: `
      bg-dangerBg

      !text-dangerText

      border
      border-dangerBorder
    `,
  },

  rescheduled: {

    label: "Reagendado",

    className: `
      bg-warningBg

      !text-warningText

      border
      border-warningBorder
    `,
  },

  pending: {

    label: "Pendente",

    className: `
      bg-infoBg

      !text-infoText

      border
      border-infoBorder
    `,
  },
}

export function SchedulesStatus({
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

        whitespace-nowrap

        flex
        items-center
        justify-center

        shadow-sm

        transition-all
        duration-200

        ${current.className}
      `}
    >

      {current.label}

    </span>
  )
}