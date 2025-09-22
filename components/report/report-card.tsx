import { ReportSummary } from './report-summary';
import { ReportCalendar } from './calendar/report-calendar';
import { transformToCalendarData, calculateTotals } from '@/utils/report-data-transformer';
import { MonthlyReport } from '@/data/api/report';

interface ReportCardProps {
  currentDate: Date;
  reportData: MonthlyReport;
}

export function ReportCard({ currentDate, reportData }: ReportCardProps) {
  const calendarData = transformToCalendarData(reportData);
  const { totalSaved, totalSpent } = calculateTotals(reportData);

  return (
    <div className="bg-white rounded-[10px] py-[30px] shadow-[0px_3px_8px_0px_#5353530D] flex flex-col gap-[30px]">
      <ReportSummary savedAmount={totalSaved} spentAmount={totalSpent} />
      <ReportCalendar currentDate={currentDate} data={calendarData} />
    </div>
  );
}
