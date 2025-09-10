"use client"

import { CalendarDateCell } from "./calendar-date-cell"

interface CalendarData {
  [key: number]: number // date -> amount
}

interface CalendarGridProps {
  currentDate: Date
  calendarData?: CalendarData
  onDateClick?: (date: number) => void
}

export function CalendarGrid({ currentDate, calendarData = {}, onDateClick }: CalendarGridProps) {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  // 이번 달의 첫 번째 날과 마지막 날
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)

  // 첫 번째 날의 요일 (월요일 = 0)
  const firstDayOfWeek = (firstDay.getDay() + 6) % 7

  // 오늘 날짜
  const today = new Date()
  const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month
  const todayDate = isCurrentMonth ? today.getDate() : -1

  // 달력 그리드 생성
  const days = []

  // 이전 달의 빈 칸들
  for (let i = 0; i < firstDayOfWeek; i++) {
    days.push(<CalendarDateCell key={`empty-${i}`} date={0} isCurrentMonth={false} />)
  }

  // 이번 달의 날짜들
  for (let date = 1; date <= lastDay.getDate(); date++) {
    days.push(
      <CalendarDateCell
        key={date}
        date={date}
        amount={calendarData[date]}
        isCurrentMonth={true}
        isToday={date === todayDate}
        onClick={onDateClick}
      />,
    )
  }

  return <div className="grid grid-cols-7 gap-1 px-4 pb-4">{days}</div>
}
