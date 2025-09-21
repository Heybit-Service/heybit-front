import type { ExpenseData } from '@/lib/expense-types';
import type { ImpulseData } from '@/lib/impulse-types';
import type { TimerSuccessData } from '@/lib/timer-types';
import type { MonthlyReport } from '@/data/api/report';

export const SAMPLE_CALENDAR_DATA = {
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

// 백엔드 응답 형태의 샘플 데이터
export const SAMPLE_MONTHLY_REPORT: MonthlyReport = {
  year: 2025,
  month: 8,
  dailySummaries: [
    {
      day: '2025-08-24',
      savedAmount: 12000,
      consumedAmount: 13000,
    },
    {
      day: '2025-08-25',
      savedAmount: 15000,
      consumedAmount: 8000,
    },
  ],
  successRate: {
    successRatePercent: 50.0,
    totalCount: 4,
    successCount: 2,
  },
  categoryFailures: [
    {
      category: 'CLOTHES',
      failCount: 2,
      failPercent: 40.0,
      totalAmount: 157630,
    },
    {
      category: 'TRANSPORT',
      failCount: 1,
      failPercent: 50.0,
      totalAmount: 82100,
    },
    {
      category: 'FOOD',
      failCount: 1,
      failPercent: 50.0,
      totalAmount: 52544,
    },
    {
      category: 'HOBBY',
      failCount: 1,
      failPercent: 30.0,
      totalAmount: 22989,
    },
    {
      category: 'DAILY',
      failCount: 0,
      failPercent: 0.0,
      totalAmount: 13136,
    },
    {
      category: 'BEAUTY',
      failCount: 0,
      failPercent: 0.0,
      totalAmount: 8100,
    },
    {
      category: 'ETC',
      failCount: 0,
      failPercent: 0.0,
      totalAmount: 8100,
    },
  ],
  registeredCounts: {
    byWeekday: {
      MONDAY: 1,
      TUESDAY: 0,
      WEDNESDAY: 1,
      THURSDAY: 0,
      FRIDAY: 2,
      SATURDAY: 0,
      SUNDAY: 0,
    },
    byTimeZone: {
      NIGHT: 0,
      MORNING: 1,
      LUNCH: 0,
      AFTERNOON: 1,
      EVENING: 2,
    },
  },
  pollAgreement: {
    stopRate: 50,
    agreeRate: 75,
  },
};

// 기존 호환성을 위한 변환된 데이터 (더 이상 사용하지 않음)
// export const SAMPLE_EXPENSE_DATA: ExpenseData = ...

export const SAMPLE_IMPULSE_DATA: ImpulseData = {
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

export const SAMPLE_TIMER_DATA: TimerSuccessData = {
  successRate: 80,
  totalTimers: 10,
  successfulTimers: 8,
  grade: '매우 우수',
  emoji: '😊',
};
