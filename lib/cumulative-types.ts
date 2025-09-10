export interface MonthlyData {
  month: string;
  amount: number;
}

export interface CumulativeData {
  monthlySavings: MonthlyData[];
  timerSuccessRate: number;
  timerGrade: string;
}

export interface CumulativeReportProps {
  data?: CumulativeData;
  onBack?: () => void;
  showHeader?: boolean;
}

export interface TotalSavingsProps {
  totalAmount: number;
  customStyles?: {
    backgroundColor?: string;
    textColor?: string;
    pillColor?: string;
  };
}

export interface MonthlySavingsChartProps {
  data: MonthlyData[];
  highlightMonth?: string;
  customStyles?: {
    primaryColor?: string;
    secondaryColor?: string;
    maxHeight?: number;
  };
}

export interface HorizontalTimerSuccessProps {
  successRate: number;
  grade: string;
  customStyles?: {
    progressColor?: string;
    backgroundColor?: string;
    height?: string;
  };
}

// Helper function for API data transformation
interface ApiMonthlySavingsItem {
  month: string;
  amount: number;
}

interface CumulativeApiResponse {
  monthly_savings?: ApiMonthlySavingsItem[];
  total_savings?: number;
  savings_rate?: number;
  timer_success_rate?: number;
  timer_grade?: string;
}

export const transformCumulativeApiData = (apiResponse: CumulativeApiResponse): CumulativeData => {
  return {
    monthlySavings:
      apiResponse.monthly_savings?.map((item) => ({
        month: item.month,
        amount: item.amount,
      })) || [],
    timerSuccessRate: apiResponse.timer_success_rate || 0,
    timerGrade: apiResponse.timer_grade || '보통',
  };
};
