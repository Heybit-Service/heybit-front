export const CALENDAR_STYLES = {
  colors: {
    primary: "#1c1b1f",
    secondary: "#7c7c7c",
    positive: "#0ec189",
    negative: "#e74a27",
    background: "#ffffff",
    hover: "#f7f7f7",
    border: "#e8e8e8",
    todayBg: "#cff3e7",
    todayText: "#0a8a5c",
  },
  spacing: {
    padding: "px-4 py-3",
    cellPadding: "p-1",
    gridGap: "gap-2",
  },
  text: {
    header: "text-lg font-semibold",
    weekday: "text-sm font-medium",
    date: "text-sm",
    amount: "text-[10px] font-medium",
  },
} as const

export const COLORS = {
  income: CALENDAR_STYLES.colors.positive,
  expense: CALENDAR_STYLES.colors.negative,
  primary: CALENDAR_STYLES.colors.primary,
  secondary: CALENDAR_STYLES.colors.secondary,
} as const
