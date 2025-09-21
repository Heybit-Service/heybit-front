import { ReportSummary } from './report-summary';
import { PureCalendar } from './calendar/pure-calendar';

interface ReportCardProps {
  savedAmount: number;
  spentAmount: number;
  currentDate: Date;
  data: Record<string, { income?: number; expense?: number }>;
  onDateClick: (date: Date, dayData?: { income?: number; expense?: number }) => void;
}

export function ReportCard({
  savedAmount,
  spentAmount,
  currentDate,
  data,
  onDateClick,
}: ReportCardProps) {
  return (
    <div className="bg-white rounded-[10px] py-[30px] shadow-[0px_3px_8px_0px_#5353530D]">
      <ReportSummary savedAmount={savedAmount} spentAmount={spentAmount} />
      <PureCalendar currentDate={currentDate} data={data} onDateClick={onDateClick} />
    </div>
  );
}
