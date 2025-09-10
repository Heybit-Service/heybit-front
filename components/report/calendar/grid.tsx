"use client"

import { Cell } from "./cell"
import { CALENDAR_STYLES } from "./styles"
import type { CalendarData, Transaction } from "./types"

interface Props {
  date: Date
  data?: CalendarData
  onDateClick?: (date: Date, dayData?: Transaction) => void
}

export function Grid({ date, data = {}, onDateClick }: Props) {
  const year = date.getFullYear()
  const month = date.getMonth()

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startOffset = (firstDay.getDay() + 6) % 7

  const today = new Date()
  const todayDate = today.getFullYear() === year && today.getMonth() === month ? today.getDate() : -1

  const formatDateKey = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
  }

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(year, month, day)
    const dateKey = formatDateKey(day)
    const dayData = data[dateKey]
    onDateClick?.(clickedDate, dayData)
  }

  const cells = []

  // 빈 셀들
  for (let i = 0; i < startOffset; i++) {
    cells.push(<Cell key={`empty-${i}`} date={0} />)
  }

  // 날짜 셀들
  for (let d = 1; d <= lastDay.getDate(); d++) {
    const dateKey = formatDateKey(d)
    const dayTransactions = data[dateKey]

    cells.push(
      <Cell key={d} date={d} transactions={dayTransactions} isToday={d === todayDate} onClick={handleDateClick} />,
    )
  }

  return <div className={`grid grid-cols-7 ${CALENDAR_STYLES.spacing.gridGap} px-4 pb-4`}>{cells}</div>
}
