'use client';

import { useAtom } from 'jotai';
import { UserGreeting } from '@/components/report/user-greeting';
import { currentDateAtom } from './store';
import { ReportCard } from '@/components/report/report-card';
import { ExpenseCategories } from '@/components/report/expense-categories';
import { SpendingPattern } from '@/components/report/spending-pattern';
import { TimerSuccessRate } from '@/components/report/timer-success-rate';
import { useMonthlyReport } from '@/hooks/queries/report';
import ReportTotalButton from '@/components/button/CumulativeButton';

export default function Page() {
  const [currentDate] = useAtom(currentDateAtom);

  const formatMonth = (date: Date): string => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
  };

  const monthString = formatMonth(currentDate);
  const { data: report } = useMonthlyReport(monthString);
  if (!report) {
    return null;
  }
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F7F7' }}>
      <UserGreeting />
      <div className="flex flex-col gap-3">
        <ReportCard currentDate={currentDate} reportData={report} />
        <ExpenseCategories data={report} />
        <SpendingPattern data={report} />
        <TimerSuccessRate data={report} />
        <ReportTotalButton />
      </div>
    </div>
  );
}
