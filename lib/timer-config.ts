export const GRADE_CONFIG = {
  '매우 우수': { color: '#0ec189', minRate: 80 },
  우수: { color: '#4ade80', minRate: 60 },
  보통: { color: '#fbbf24', minRate: 40 },
  '개선 필요': { color: '#ef4444', minRate: 0 },
} as const;

// Helper function to calculate grade based on success rate
type TimerSuccessData = {
  successRate: number;
  totalTimers: number;
  successfulTimers: number;
  grade: string;
};

export function calculateGrade(successRate: number): string {
  if (successRate >= 80) return '매우 우수';
  if (successRate >= 60) return '우수';
  if (successRate >= 40) return '보통';
  return '개선 필요';
}

// Helper function to transform API data from MonthlyReport
export function transformTimerSuccessData(successRateData: {
  successRatePercent: number;
  totalCount: number;
  successCount: number;
}): TimerSuccessData {
  const grade = calculateGrade(successRateData.successRatePercent);

  return {
    successRate: successRateData.successRatePercent,
    totalTimers: successRateData.totalCount,
    successfulTimers: successRateData.successCount,
    grade,
  };
}
