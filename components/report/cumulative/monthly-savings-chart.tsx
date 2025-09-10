// import { CUMULATIVE_STYLES } from "@/lib/cumulative-config"
import type { MonthlySavingsChartProps } from "@/lib/cumulative-types"

export function MonthlySavingsChart({ data, highlightMonth = "7월", customStyles }: MonthlySavingsChartProps) {
  const maxAmount = Math.max(...data.map((d) => d.amount))
  const maxHeight = customStyles?.maxHeight || 200
  // const primaryColor = customStyles?.primaryColor || CUMULATIVE_STYLES.colors.primary
  // const secondaryColor = customStyles?.secondaryColor || "#CFF3E7"

  return (
    <div className="space-y-6">
      <div className="relative h-64 px-2 mx-3">
        {/* Bar layer - controls spacing with gap-3 */}
        <div className="flex justify-between items-end h-full gap-3">
          {data.map((monthData) => {
            const height = (monthData.amount / maxAmount) * maxHeight

            return (
              <div key={`bar-${monthData.month}`} className="flex flex-col items-center">
                <div
                  className="w-3 rounded-t-sm transition-all duration-500"
                  style={{
                    height: `${height}px`,
                    backgroundColor: "#CFF3E7",
                    borderTopLeftRadius: "2px",
                    borderTopRightRadius: "2px",
                  }}
                />
              </div>
            )
          })}
        </div>

        {/* Text layer - positioned absolutely, independent of bar spacing */}
        <div className="absolute inset-0 flex justify-between items-end h-full px-2">
          {data.map((monthData, index) => {
            const height = (monthData.amount / maxAmount) * maxHeight
            const leftPosition = (index / (data.length - 1)) * 100

            return (
              <div
                key={`text-${monthData.month}`}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${leftPosition}%`,
                  transform: "translateX(-50%)",
                  bottom: `${height + 4}px`,
                }}
              >
                <div
                  className="text-center leading-[140%] whitespace-nowrap mb-2"
                  style={{
                    fontFamily: "Pretendard",
                    fontWeight: 500,
                    fontSize: "10px",
                    letterSpacing: "0%",
                    color: "#A8A8A8",
                  }}
                >
                  {monthData.amount.toLocaleString()}원
                </div>
              </div>
            )
          })}
        </div>

        {/* Month labels - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 mx-3">
          {data.map((monthData) => {
            const isHighlighted = monthData.month === highlightMonth

            return (
              <div
                key={`month-${monthData.month}`}
                className="text-center leading-[140%] -mb-6"
                style={{
                  fontFamily: "Pretendard",
                  fontWeight: 500,
                  fontSize: "14px",
                  letterSpacing: "0%",
                  color: isHighlighted ? "#0EC189" : "#A8A8A8",
                }}
              >
                {monthData.month}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
