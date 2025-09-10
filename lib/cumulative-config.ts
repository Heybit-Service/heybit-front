export const CUMULATIVE_STYLES = {
  colors: {
    primary: "#0ec189",
    primaryLight: "#cff3e7",
    primaryDark: "#0a8a5c",
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      500: "#6b7280",
      600: "#4b5563",
      900: "#111827",
    },
    background: "#f9fafb",
    white: "#ffffff",
  },
  spacing: {
    section: "2rem",
    component: "1.5rem",
    small: "1rem",
  },
  chart: {
    barWidth: "3rem",
    maxHeight: "12.5rem",
    progressHeight: "0.5rem",
  },
} as const

export const CUMULATIVE_TEXT = {
  header: "누적 리포트",
  totalSavings: "헤이빗과 함께 지금까지",
  savedAmount: "을 아꼈어요",
  timerSuccess: "등록한 타이머 중",
  successPercent: "성공했어요",
  timerSuccessRate: "내 타이머 성공률",
} as const
