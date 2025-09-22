'use client';

import { useAtom } from 'jotai';
import { UserGreeting } from '@/components/report/user-greeting';
import { currentDateAtom } from './store';
import { ReportCard } from '@/components/report/report-card';
import { ExpenseCategories } from '@/components/report/expense-categories';
import { SpendingPattern } from '@/components/report/spending-pattern';
import { TimerSuccessRate } from '@/components/report/timer-success-rate';
import { useMonthlyReport } from '@/hooks/queries/report';
import CumulativeButton from '@/components/button/CumulativeButton';
import {
  transformToCalendarData,
  calculateTotals,
  formatMonthForAPI,
} from '@/utils/report-data-transformer';

export default function Page() {
  const [currentDate] = useAtom(currentDateAtom);
  const monthString = formatMonthForAPI(currentDate);
  const { data: reportData } = useMonthlyReport(monthString);
  const calendarData = reportData ? transformToCalendarData(reportData) : {};
  const { totalSaved, totalSpent } = reportData
    ? calculateTotals(reportData)
    : { totalSaved: 0, totalSpent: 0 };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F7F7' }}>
      <UserGreeting />
      <div className="flex flex-col gap-3">
        <ReportCard
          savedAmount={totalSaved}
          spentAmount={totalSpent}
          currentDate={currentDate}
          data={calendarData}
        />
        <ExpenseCategories data={reportData} />
        <SpendingPattern data={reportData} />
        <TimerSuccessRate data={reportData} />
        <CumulativeButton />
      </div>
    </div>
  );
}
