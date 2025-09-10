export const CHART_CONFIG = {
  // Chart dimensions
  dimensions: {
    chartHeight: 80,
    chartWidth: 280,
    horizontalPadding: 40,
    verticalPadding: 30,
  },

  // Colors
  colors: {
    line: "#ef4444",
    point: "#ef4444",
    pointHighlight: "#dc2626", // Darker red for peak point
    text: "#6b7280",
    textHighlight: "#374151", // Darker gray for peak text
    background: "#ffffff",
    border: "#e5e7eb",
  },

  // Line styling
  line: {
    strokeWidth: 2,
    strokeDasharray: "none", // Can be changed to "5,5" for dashed line
  },

  // Point styling
  point: {
    radius: 4,
    highlightRadius: 5, // Larger radius for peak point
    strokeWidth: 0,
  },

  // Typography
  typography: {
    fontSize: "text-xs",
    fontWeight: "font-medium",
    highlightFontWeight: "font-semibold",
  },

  // Layout spacing
  spacing: {
    labelSpacing: 8,
    pointTextOffset: 12,
    chartMargin: 4,
    containerPadding: 6,
  },

  // Animation (for future use)
  animation: {
    duration: 300,
    easing: "ease-in-out",
  },
} as const

// Helper function to get responsive dimensions
export const getResponsiveDimensions = (containerWidth?: number) => {
  const baseWidth = containerWidth || CHART_CONFIG.dimensions.chartWidth
  return {
    ...CHART_CONFIG.dimensions,
    chartWidth: Math.min(baseWidth, CHART_CONFIG.dimensions.chartWidth),
  }
}

// Helper function to get color variants
export const getColorVariant = (variant: "primary" | "secondary" | "success" | "warning" | "danger" = "danger") => {
  const colorMap = {
    primary: { line: "#3b82f6", point: "#3b82f6", highlight: "#2563eb" },
    secondary: { line: "#6b7280", point: "#6b7280", highlight: "#4b5563" },
    success: { line: "#10b981", point: "#10b981", highlight: "#059669" },
    warning: { line: "#f59e0b", point: "#f59e0b", highlight: "#d97706" },
    danger: { line: "#ef4444", point: "#ef4444", highlight: "#dc2626" },
  }
  return colorMap[variant]
}
