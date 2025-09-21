import { MonthlyReport, Daily } from '@/data/api/report';
import type { CalendarData } from '@/components/report/calendar/types';

export const transformToCalendarData = (data: MonthlyReport): CalendarData => {
  const calendarData: CalendarData = {};

  data.dailySummaries.forEach((summary: Daily) => {
    calendarData[summary.day] = {
      income: summary.savedAmount > 0 ? summary.savedAmount : undefined,
      expense: summary.consumedAmount > 0 ? summary.consumedAmount : undefined,
    };
  });

  return calendarData;
};

export const calculateTotals = (data: MonthlyReport) => {
  let totalSaved = 0;
  let totalSpent = 0;

  data.dailySummaries.forEach((summary: Daily) => {
    totalSaved += summary.savedAmount || 0;
    totalSpent += summary.consumedAmount || 0;
  });

  return { totalSaved, totalSpent };
};

export const formatMonthForAPI = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
};
