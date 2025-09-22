import { Summary } from './pattern/summary';
import { WeeklyChart } from './pattern/weekly-chart';
import { TimeChart } from './pattern/time-chart';
import type { MonthlyReport } from '@/data/api/report';

interface Props {
  data: MonthlyReport;
}

export function SpendingPattern({ data }: Props) {
  const counts = data.registeredCounts;

  return (
    <div className="py-7 px-[18.5px] bg-white rounded-[10px] mt-4 flex flex-col gap-[22px]">
      <Summary counts={counts} />
      <div className="flex flex-col gap-[28px]">
        <WeeklyChart weekdayData={counts.byWeekday} />
        <TimeChart timeData={counts.byTimeZone} />
      </div>
    </div>
  );
}
