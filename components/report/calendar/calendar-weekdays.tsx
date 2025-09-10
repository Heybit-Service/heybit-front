export function CalendarWeekdays() {
  const weekdays = ["월", "화", "수", "목", "금", "토", "일"]

  return (
    <div className="grid grid-cols-7 gap-1 px-4 py-2">
      {weekdays.map((day, index) => (
        <div key={day} className="text-center text-sm font-medium text-[#7c7c7c] py-2">
          {day}
        </div>
      ))}
    </div>
  )
}
