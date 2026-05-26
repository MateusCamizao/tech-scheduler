interface Props {
  duration: number
  onChange: (value: number) => void
}

const options = [
  {
    label: "30 min",
    value: 30,
  },
  {
    label: "1 hora",
    value: 60,
  },
  {
    label: "1h30",
    value: 90,
  },
]

export function DurationSelector({
  duration,
  onChange,
}: Props) {

  return (
    <div className="flex gap-3 flex-wrap">

      {options.map((item) => {

        const active =
          duration === item.value

        return (
          <button
            key={item.value}
            onClick={() =>
              onChange(item.value)
            }
            className={`
              px-5
              py-3
              rounded-2xl
              border
              transition-all
              font-medium

              ${
                active
                  ? `
                    bg-primary
                    border-primary
                    text-text
                    shadow-lg
                  `
                  : `
                    border-border
                    bg-card
                    hover:border-primary
                  `
              }
            `}
          >
            {item.label}
          </button>
        )
      })}

    </div>
  )
}