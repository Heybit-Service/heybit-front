import { ReportSummary } from './report-summary';
import { ReportCalendar } from './calendar/report-calendar';
import { MonthlyReport, Daily } from '@/data/api/report';
import type { CalendarData } from './calendar/types';

interface ReportCardProps {
  currentDate: Date;
  reportData: MonthlyReport;
}

export function ReportCard({ currentDate, reportData }: ReportCardProps) {
  const toCalendarData = (data: MonthlyReport): CalendarData => {
    const result: CalendarData = {};

    data.dailySummaries.forEach((summary: Daily) => {
      result[summary.day] = {
        income: summary.savedAmount > 0 ? summary.savedAmount : undefined,
        expense: summary.consumedAmount > 0 ? summary.consumedAmount : undefined,
      };
    });

    return result;
  };

  const getTotals = (data: MonthlyReport) => {
    let saved = 0;
    let spent = 0;

    data.dailySummaries.forEach((summary: Daily) => {
      saved += summary.savedAmount || 0;
      spent += summary.consumedAmount || 0;
    });

    return { totalSaved: saved, totalSpent: spent };
  };

  const calendarData = toCalendarData(reportData);
  const { totalSaved, totalSpent } = getTotals(reportData);

  return (
    <div className="bg-white rounded-[10px] py-[30px] shadow-[0px_3px_8px_0px_#5353530D] flex flex-col gap-[30px]">
      <ReportSummary savedAmount={totalSaved} spentAmount={totalSpent} />
      <ReportCalendar currentDate={currentDate} data={calendarData} />
    </div>
  );
}
