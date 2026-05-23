interface Props {
  selectedTime: string | null

  onSelect: (
    time: string,
  ) => void
}

const times = [
  "08:00",
  "08:15",
  "08:30",
  "08:45",
  "09:00",
  "09:15",
  "09:30",
]

export function TimeSlots({
  selectedTime,
  onSelect,
}: Props) {

  return (
    <div
      className="
        grid

        grid-cols-2

        gap-3
      "
    >

      {times.map((time, index) => {

        const disabled =
          index === 1
          ||
          index === 4

        const selected =
          selectedTime === time

        return (

          <button
            key={time}

            disabled={disabled}

            onClick={() =>
              onSelect(time)
            }

            className={`
              h-[56px]

              rounded-[18px]

              border
              border-border

              text-[18px]
              font-semibold

              transition-all

              ${
                disabled
                  ? `
                    opacity-40
                    cursor-not-allowed

                    bg-card
                  `
                  : `
                    hover:border-primary
                    hover:bg-primary/10
                  `
              }

              ${
                selected
                  ? `
                    bg-primary
                    border-primary
                    text-white
                  `
                  : `
                    bg-card
                  `
              }
            `}
          >

            {time}

          </button>

        )
      })}

    </div>
  )
}