import { getToken } from '../auth';

export interface Daily {
  day: string;
  savedAmount: number;
  consumedAmount: number;
}

export interface Success {
  successRatePercent: number;
  totalCount: number;
  successCount: number;
}

export interface Category {
  category: string;
  failCount: number;
  failPercent: number;
  totalAmount: number;
}

export interface Counts {
  byWeekday: {
    MONDAY: number;
    TUESDAY: number;
    WEDNESDAY: number;
    THURSDAY: number;
    FRIDAY: number;
    SATURDAY: number;
    SUNDAY: number;
  };
  byTimeZone: {
    NIGHT: number;
    MORNING: number;
    LUNCH: number;
    AFTERNOON: number;
    EVENING: number;
  };
}

export interface Poll {
  stopRate: number;
  agreeRate: number;
}

export interface MonthlyReport {
  year: number;
  month: number;
  dailySummaries: Daily[];
  successRate: Success;
  categoryFailures: Category[];
  registeredCounts: Counts;
  pollAgreement: Poll;
}

export const getMonthlyReport = async (month: string): Promise<MonthlyReport> => {
  const token = getToken();

  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await fetch(`/api/reports/monthly?month=${month}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch monthly report');
  }

  const data = await response.json();
  return data.data;
};
