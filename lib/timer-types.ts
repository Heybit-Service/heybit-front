export interface TimerSuccessData {
  successRate: number // 0-100
  totalTimers: number
  successfulTimers: number
  grade: "매우 우수" | "우수" | "보통" | "개선 필요"
  emoji: string
}

export interface TimerApiResponse {
  total_timers: number
  successful_timers: number
  period?: string // e.g., "2024-12", "last_30_days"
}

export interface TimerStyleProps {
  containerClassName?: string
  progressBarWidth?: string
  progressBarHeight?: string
  primaryColor?: string
  textColor?: string
  backgroundColor?: string
}
