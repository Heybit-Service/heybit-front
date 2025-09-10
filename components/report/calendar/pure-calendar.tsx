"use client"

import { Weekdays } from "./weekdays"
import { Grid } from "./grid"
import { CALENDAR_CONFIG } from "@/lib/calendar-config"
import type { CalendarData, CalendarTransaction } from "./types"

interface PureCalendarProps {
  currentDate: Date
  data: CalendarData
  onDateClick?: (date: Date, dayData?: CalendarTransaction) => void
}

export function PureCalendar({ currentDate, data, onDateClick }: PureCalendarProps) {
  return (
    <div className="px-4">
      <div className="rounded-lg overflow-hidden" style={{ backgroundColor: CALENDAR_CONFIG.colors.background.white }}>
        <Weekdays />
        <Grid date={currentDate} data={data} onDateClick={onDateClick} />
      </div>
    </div>
  )
}
