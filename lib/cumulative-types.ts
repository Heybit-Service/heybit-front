export interface MonthlyData {
  month: string
  amount: number
}

export interface CumulativeData {
  monthlySavings: MonthlyData[]
  timerSuccessRate: number
  timerGrade: string
}

export interface CumulativeReportProps {
  data?: CumulativeData
  onBack?: () => void
  showHeader?: boolean
}

export interface TotalSavingsProps {
  totalAmount: number
  customStyles?: {
    backgroundColor?: string
    textColor?: string
    pillColor?: string
  }
}

export interface MonthlySavingsChartProps {
  data: MonthlyData[]
  highlightMonth?: string
  customStyles?: {
    primaryColor?: string
    secondaryColor?: string
    maxHeight?: number
  }
}

export interface HorizontalTimerSuccessProps {
  successRate: number
  grade: string
  customStyles?: {
    progressColor?: string
    backgroundColor?: string
    height?: string
  }
}

// Helper function for API data transformation
export const transformCumulativeApiData = (apiResponse: any): CumulativeData => {
  return {
    monthlySavings:
      apiResponse.monthly_savings?.map((item: any) => ({
        month: item.month,
        amount: item.amount,
      })) || [],
    timerSuccessRate: apiResponse.timer_success_rate || 0,
    timerGrade: apiResponse.timer_grade || "보통",
  }
}
