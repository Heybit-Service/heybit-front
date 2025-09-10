import { ReportSummary } from "./report-summary"
import { PureCalendar } from "./calendar/pure-calendar"

interface ReportCardProps {
  savedAmount: number
  spentAmount: number
  currentDate: Date
  data: Record<string, { income?: number; expense?: number }>
  onDateClick: (date: Date, dayData?: { income?: number; expense?: number }) => void
}

export function ReportCard({ savedAmount, spentAmount, currentDate, data, onDateClick }: ReportCardProps) {
  return (
    <div className="bg-white rounded-2xl mx-4 shadow-sm border border-gray-200 p-4 mb-6">
      <ReportSummary savedAmount={savedAmount} spentAmount={spentAmount} />

      <PureCalendar currentDate={currentDate} data={data} onDateClick={onDateClick} />
    </div>
  )
}
