'use client';

import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { UserGreeting } from '@/components/report/user-greeting';
import { currentDateAtom } from './store';
import { ReportCard } from '@/components/report/report-card';
import { ExpenseCategories } from '@/components/report/expense-categories';
import { ImpulseSpendingPattern } from '@/components/report/impulse-spending-pattern';
import { TimerSuccessRate } from '@/components/report/timer-success-rate';
import { useMonthlyReport } from '@/hooks/queries/report';
import {
  transformToCalendarData,
  calculateTotals,
  formatMonthForAPI,
} from '@/utils/report-data-transformer';
import {
  SAMPLE_EXPENSE_DATA,
  SAMPLE_IMPULSE_DATA,
  SAMPLE_TIMER_DATA,
} from '@/data/sample/report-data';

export default function Page() {
  const router = useRouter();
  const [currentDate] = useAtom(currentDateAtom);
  const monthString = formatMonthForAPI(currentDate);
  const { data: reportData } = useMonthlyReport(monthString);
  const handleDateClick = (date: Date, dayData?: { income?: number; expense?: number }) => {
    const dateStr = date.toLocaleDateString('ko-KR');
    console.log(`${dateStr} 클릭`, dayData ? `데이터: ${JSON.stringify(dayData)}` : '데이터 없음');
  };
  const calendarData = reportData ? transformToCalendarData(reportData) : {};
  const { totalSaved, totalSpent } = reportData
    ? calculateTotals(reportData)
    : { totalSaved: 0, totalSpent: 0 };

  const handleReportClick = () => {
    router.push('/dashboard/report/total');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F7F7' }}>
      <UserGreeting />
      <ReportCard
        savedAmount={totalSaved}
        spentAmount={totalSpent}
        currentDate={currentDate}
        data={calendarData}
        onDateClick={handleDateClick}
      />
      <ExpenseCategories data={SAMPLE_EXPENSE_DATA} />
      <ImpulseSpendingPattern data={SAMPLE_IMPULSE_DATA} />
      <TimerSuccessRate
        data={SAMPLE_TIMER_DATA}
        styles={{
          progressBarWidth: 'w-72',
          primaryColor: '#0ec189',
        }}
        animated={true}
        showLabels={true}
      />
      <div className="px-4 pb-8 pt-6">
        <button
          onClick={handleReportClick}
          className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium text-base hover:bg-gray-800 transition-colors"
        >
          누적 데이터 확인
        </button>
      </div>
    </div>
  );
}
