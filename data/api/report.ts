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

// 카테고리 관련 함수들

// ENUM을 한글 이름으로 변환
const CATEGORY_LABELS = {
  CLOTHES: '의류',
  TRANSPORT: '교통',
  FOOD: '음식',
  HOBBY: '취미',
  DAILY: '생활',
  BEAUTY: '뷰티',
  ETC: '기타',
} as const;

// 라벨 가져오기
export const getCategoryLabel = (category: string): string => {
  return CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS] || '기타';
};

// 총 금액 계산
export const getTotalAmount = (categories: Category[]): number => {
  return categories.reduce((sum, cat) => sum + cat.totalAmount, 0);
};

// 퍼센티지 계산
export const getPercentage = (amount: number, total: number): number => {
  return total > 0 ? Math.round((amount / total) * 100) : 0;
};

// 금액 기준 정렬 (내림차순)
export const sortByAmount = (categories: Category[]): Category[] => {
  return [...categories].sort((a, b) => b.totalAmount - a.totalAmount);
};

// 최고 소비 카테고리
export const getTopCategory = (categories: Category[]): Category | null => {
  return sortByAmount(categories)[0] || null;
};

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
  return data;
};
