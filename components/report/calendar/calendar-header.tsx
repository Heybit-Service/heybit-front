"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

interface CalendarHeaderProps {
  currentDate: Date
  onPreviousMonth: () => void
  onNextMonth: () => void
}

export function CalendarHeader({ currentDate, onPreviousMonth, onNextMonth }: CalendarHeaderProps) {
  const formatMonth = (date: Date) => {
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월`
  }

  return (
    <div className="flex items-center justify-between px-4 py-3">
      <button
        onClick={onPreviousMonth}
        className="p-2 hover:bg-[#f7f7f7] rounded-full transition-colors"
        aria-label="이전 달"
      >
        <ChevronLeft className="w-5 h-5 text-[#5b5b5b]" />
      </button>

      <h2 className="text-lg font-semibold text-[#1c1b1f]">{formatMonth(currentDate)}</h2>

      <button
        onClick={onNextMonth}
        className="p-2 hover:bg-[#f7f7f7] rounded-full transition-colors"
        aria-label="다음 달"
      >
        <ChevronRight className="w-5 h-5 text-[#5b5b5b]" />
      </button>
    </div>
  )
}
