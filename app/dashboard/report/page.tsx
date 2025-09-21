'use client';

import { useRouter } from 'next/navigation'; // Added useRouter import for proper Next.js navigation
import { useAtom } from 'jotai';
import { UserGreeting } from '@/components/report/user-greeting';
import { currentDateAtom } from './store';
import { ReportCard } from '@/components/report/report-card';
import { ExpenseCategories } from '@/components/report/expense-categories';
import { ImpulseSpendingPattern } from '@/components/report/impulse-spending-pattern';
import { TimerSuccessRate } from '@/components/report/timer-success-rate';
import type { ExpenseData } from '@/lib/expense-types';
import type { ImpulseData } from '@/lib/impulse-types';
import type { TimerSuccessData } from '@/lib/timer-types';

const SAMPLE_DATA = {
  '2024-12-01': { income: 398000 },
  '2024-12-02': { expense: 27000 },
  '2024-12-03': { expense: 1124000 },
  '2024-12-05': { income: 150000, expense: 50000 },
  '2024-12-06': { expense: 78000 },
  '2024-12-07': { expense: 42000 },
  '2024-12-08': { expense: 10000 },
  '2024-12-09': { expense: 75000 },
  '2024-12-10': { expense: 75000 },
  '2024-12-11': { expense: 75000 },
  '2024-12-12': { expense: 180000 },
  '2024-12-14': { expense: 75000 },
  '2024-12-15': { income: 200000, expense: 75000 },
  '2024-12-16': { expense: 75000 },
  '2024-12-17': { expense: 75000 },
  '2024-12-18': { expense: 75000 },
  '2024-12-19': { expense: 180000 },
  '2024-12-20': { expense: 75000 },
  '2024-12-21': { expense: 75000 },
  '2024-12-22': { income: 500000 },
  '2024-12-23': { expense: 75000 },
  '2024-12-24': { expense: 75000 },
  '2024-12-25': { income: 300000, expense: 75000 },
  '2024-12-26': { expense: 180000 },
  '2024-12-27': { expense: 75000 },
  '2024-12-28': { expense: 627000 },
  '2024-12-30': { expense: 627000 },
};

const SAMPLE_EXPENSE_DATA: ExpenseData = {
  categories: [
    { id: 'clothing', name: '의류', amount: 157630, percentage: 48, color: '#e74a27' },
    { id: 'transport', name: '교통', amount: 82100, percentage: 25, color: '#fb7b7b' },
    { id: 'food', name: '음식', amount: 52544, percentage: 16, color: '#ff9999' },
    { id: 'hobby', name: '취미', amount: 22989, percentage: 7, color: '#ffb3b3' },
    { id: 'living', name: '생활', amount: 13136, percentage: 4, color: '#ffcccc' },
    { id: 'beauty', name: '뷰티', amount: 8100, percentage: 1, color: '#ffe6e6' },
    { id: 'etc', name: '기타', amount: 8100, percentage: 1, color: '#fff0f0' },
  ],
  totalExpense: 328400,
  topCategory: {
    name: '의류',
    amount: 157630,
  },
};

const SAMPLE_IMPULSE_DATA: ImpulseData = {
  summary: {
    primaryDay: '금요일',
    primaryTime: '밤',
    totalCount: 18,
  },
  weeklyPattern: [
    { day: '월', count: 2 },
    { day: '화', count: 1 },
    { day: '수', count: 3 },
    { day: '목', count: 2 },
    { day: '금', count: 8 },
    { day: '토', count: 1 },
    { day: '일', count: 1 },
  ],
  timePattern: [
    { period: '오전', timeRange: '6~11시', count: 1 },
    { period: '점심', timeRange: '11~14시', count: 2 },
    { period: '오후', timeRange: '14~17시', count: 3 },
    { period: '저녁', timeRange: '17~20시', count: 2 },
    { period: '밤', timeRange: '20~24시', count: 10 },
    { period: '새벽', timeRange: '00~6시', count: 0 },
  ],
};

const SAMPLE_TIMER_DATA: TimerSuccessData = {
  successRate: 80,
  totalTimers: 10,
  successfulTimers: 8,
  grade: '매우 우수',
  emoji: '😊',
};

// const SAMPLE_API_TIMER_DATA = {
//   total_timers: 10,
//   successful_timers: 8,
// };

export default function Page() {
  const router = useRouter(); // Added router hook for navigation
  const [currentDate] = useAtom(currentDateAtom);

  const handleDateClick = (date: Date, dayData?: { income?: number; expense?: number }) => {
    const dateStr = date.toLocaleDateString('ko-KR');
    console.log(`${dateStr} 클릭`, dayData ? `데이터: ${JSON.stringify(dayData)}` : '데이터 없음');
  };

  const calculateTotals = () => {
    let totalSaved = 0;
    let totalSpent = 0;

    Object.values(SAMPLE_DATA).forEach((dayData) => {
      if ('income' in dayData && dayData.income) totalSaved += dayData.income;
      if ('expense' in dayData && dayData.expense) totalSpent += dayData.expense;
    });

    return { totalSaved, totalSpent };
  };

  const { totalSaved, totalSpent } = calculateTotals();

  // const transformedTimerData = transformTimerApiData(SAMPLE_API_TIMER_DATA);

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
        data={SAMPLE_DATA}
        onDateClick={handleDateClick}
      />

      <ExpenseCategories data={SAMPLE_EXPENSE_DATA} />

      <ImpulseSpendingPattern data={SAMPLE_IMPULSE_DATA} />

      <TimerSuccessRate
        data={SAMPLE_TIMER_DATA}
        styles={{
          progressBarWidth: 'w-72', // Custom width
          primaryColor: '#0ec189', // Custom color
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
