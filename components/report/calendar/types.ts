export interface Transaction {
  income?: number
  expense?: number
}

export interface CalendarTransaction {
  income?: number
  expense?: number
}

export interface CalendarData {
  [date: string]: Transaction // YYYY-MM-DD format
}

export interface CalendarProps {
  initialDate?: Date
  data?: CalendarData
  onDateClick?: (date: Date, dayData?: Transaction) => void
  onMonthChange?: (date: Date) => void
  className?: string
}
