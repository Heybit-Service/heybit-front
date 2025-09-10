"use client"

import { useState } from "react"
import { CalendarHeader } from "./calendar-header"
import { CalendarWeekdays } from "./calendar-weekdays"
import { CalendarGrid } from "./calendar-grid"

interface FinancialCalendarProps {
  initialDate?: Date
  calendarData?: { [key: number]: number }
  onDateClick?: (date: number) => void
  onMonthChange?: (date: Date) => void
}

export function FinancialCalendar({
  initialDate = new Date(),
  calendarData = {},
  onDateClick,
  onMonthChange,
}: FinancialCalendarProps) {
  const [currentDate, setCurrentDate] = useState(initialDate)

  const handlePreviousMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    setCurrentDate(newDate)
    onMonthChange?.(newDate)
  }

  const handleNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    setCurrentDate(newDate)
    onMonthChange?.(newDate)
  }

  return (
    <div className="bg-[#ffffff] rounded-lg shadow-sm border border-[#e8e8e8]">
      <CalendarHeader currentDate={currentDate} onPreviousMonth={handlePreviousMonth} onNextMonth={handleNextMonth} />

      <CalendarWeekdays />

      <CalendarGrid currentDate={currentDate} calendarData={calendarData} onDateClick={onDateClick} />
    </div>
  )
}
