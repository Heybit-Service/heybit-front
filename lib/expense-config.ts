export const EXPENSE_STYLES = {
  colors: {
    primary: "#ff4444",
    secondary: "#ff7777",
    tertiary: "#ffaaaa",
    quaternary: "#cccccc",
    quinary: "#dddddd",
    senary: "#eeeeee",
    septenary: "#f5f5f5",
  },
  spacing: {
    container: "px-4 bg-white",
    section: "mb-6",
    item: "space-y-3",
    border: "pt-4 border-t border-gray-200",
  },
  text: {
    summary: "text-gray-600 text-sm mb-1",
    title: "text-lg font-medium mb-2",
    bold: "font-bold",
    category: "text-gray-700",
    percentage: "text-gray-500 text-sm",
    amount: "font-medium",
    total: "font-bold text-lg",
  },
}

export const CATEGORY_DATA = [
  { name: "의류", percentage: 48, amount: 157630, colorKey: "primary" as const },
  { name: "교통", percentage: 25, amount: 82100, colorKey: "secondary" as const },
  { name: "음식", percentage: 16, amount: 52544, colorKey: "tertiary" as const },
  { name: "취미", percentage: 7, amount: 22988, colorKey: "quaternary" as const },
  { name: "생활", percentage: 4, amount: 13136, colorKey: "quinary" as const },
  { name: "뷰티", percentage: 1, amount: 8100, colorKey: "senary" as const },
  { name: "기타", percentage: 1, amount: 8100, colorKey: "septenary" as const },
]
