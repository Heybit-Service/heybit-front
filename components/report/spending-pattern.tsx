import { Summary } from './pattern/summary';
import { WeeklyChart } from './pattern/weekly-chart';
import { TimeChart } from './pattern/time-chart';
import type { MonthlyReport } from '@/data/api/report';
import { SAMPLE_MONTHLY_REPORT } from '@/data/sample/report-data';

interface Props {
  data?: MonthlyReport;
}

export function SpendingPattern({ data }: Props) {
  const reportData = data || SAMPLE_MONTHLY_REPORT;
  const counts = reportData.registeredCounts;

  return (
    <div className="py-7 px-[18.5px] bg-white rounded-[10px] mt-4">
      <Summary counts={counts} />
      <WeeklyChart weekdayData={counts.byWeekday} />
      <TimeChart timeData={counts.byTimeZone} />
    </div>
  );
}
