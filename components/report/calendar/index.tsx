"use client"

import { useState } from "react"
import { PureCalendar } from "./pure-calendar"
import type { CalendarProps } from "./types"

export function Calendar({ initialDate, data = {}, onDateClick, onMonthChange, className = "" }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(() => {
    if (initialDate) return initialDate
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth(), 1)
  })

  const changeMonth = (offset: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1)
    setCurrentDate(newDate)
    onMonthChange?.(newDate)
  }

  const navigationProps = {
    currentDate,
    onPrevMonth: () => changeMonth(-1),
    onNextMonth: () => changeMonth(1),
  }

  return {
    calendar: (
      <div className={className}>
        <PureCalendar currentDate={currentDate} data={data} onDateClick={onDateClick} />
      </div>
    ),
    navigation: navigationProps,
  }
}

export type { CalendarProps, CalendarData, CalendarTransaction } from "./types"
