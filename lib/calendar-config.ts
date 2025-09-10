export const CALENDAR_CONFIG = {
  colors: {
    primary: "#0ec189",
    primaryBg: "#cff3e7",
    primaryText: "#0a8a5c",
    expense: "#e74a27",
    income: "#0ec189",
    text: {
      primary: "#000000",
      secondary: "#666666",
      muted: "#99989d",
    },
    background: {
      white: "#ffffff",
      gray: "#f7f7f7",
      hover: "#f0f0f0",
    },
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  typography: {
    sizes: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    weights: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
  },
} as const

export type CalendarConfig = typeof CALENDAR_CONFIG
