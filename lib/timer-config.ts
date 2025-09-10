export const TIMER_STYLES = {
  container: {
    background: "bg-white",
    padding: "p-6",
    spacing: "space-y-6",
  },
  text: {
    title: "text-[#1c1b1f] text-base font-medium",
    successRate: "font-semibold",
    grade: "text-[#0ec189] text-lg font-semibold mt-2",
  },
  progressBar: {
    container: "w-64 space-y-3",
    track: "relative w-full h-4 bg-[#e8e8e8] rounded-full overflow-hidden",
    fill: "absolute left-0 h-full bg-[#0ec189] rounded-full transition-all duration-1000 ease-out",
    labels: "text-xs text-[#99989d] font-medium",
  },
  colors: {
    primary: "#0ec189",
    text: "#1c1b1f",
    secondary: "#99989d",
    background: "#e8e8e8",
  },
} as const

export const GRADE_CONFIG = {
  "매우 우수": { color: "#0ec189", minRate: 80 },
  우수: { color: "#4ade80", minRate: 60 },
  보통: { color: "#fbbf24", minRate: 40 },
  "개선 필요": { color: "#ef4444", minRate: 0 },
} as const

// Helper function to calculate grade based on success rate
type TimerSuccessData = {
  successRate: number
  totalTimers: number
  successfulTimers: number
  grade: string
  emoji: string
}

export function calculateGrade(successRate: number): string {
  if (successRate >= 80) return "매우 우수"
  if (successRate >= 60) return "우수"
  if (successRate >= 40) return "보통"
  return "개선 필요"
}

// Helper function to transform API data
export function transformTimerApiData(apiData: {
  total_timers: number
  successful_timers: number
}): TimerSuccessData {
  const successRate = Math.round((apiData.successful_timers / apiData.total_timers) * 100)
  const grade = calculateGrade(successRate)

  return {
    successRate,
    totalTimers: apiData.total_timers,
    successfulTimers: apiData.successful_timers,
    grade,
    emoji: "", // Not used in current design
  }
}
