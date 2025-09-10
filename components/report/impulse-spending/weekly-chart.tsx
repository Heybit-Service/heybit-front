import type { ImpulseData } from "@/lib/impulse-types"
import { CHART_CONFIG } from "@/lib/chart-config"

interface WeeklyChartProps {
  data: ImpulseData["weeklyPattern"]
  config?: ImpulseData["config"]
}

export function WeeklyChart({ data, config }: WeeklyChartProps) {
  const maxCount = Math.max(...data.map((item) => item.count))
  const maxIndex = data.findIndex((item) => item.count === maxCount)

  const { chartHeight, chartWidth, horizontalPadding, verticalPadding } = CHART_CONFIG.dimensions
  const totalWidth = chartWidth + horizontalPadding * 2
  const totalHeight = chartHeight + verticalPadding * 2

  const safeMaxCount = maxCount > 0 ? maxCount : 1

  const points = data
    .map((item, index) => {
      // Calculate x position to align with label centers
      const segmentWidth = chartWidth / data.length
      const x = horizontalPadding + segmentWidth * index + segmentWidth / 2
      const y = verticalPadding + chartHeight - (item.count / safeMaxCount) * chartHeight
      return `${x},${y}`
    })
    .join(" ")

  return (
    <div className="mb-8">
      <div className="relative" style={{ height: totalHeight }}>
        <svg width={totalWidth} height={totalHeight} className="mx-auto" viewBox={`0 0 ${totalWidth} ${totalHeight}`}>
          <polyline
            fill="none"
            stroke={config?.customColors?.line || CHART_CONFIG.colors.line}
            strokeWidth={CHART_CONFIG.line.strokeWidth}
            points={points}
          />
          {data.map((item, index) => {
            if (index !== maxIndex) return null
            const segmentWidth = chartWidth / data.length
            const x = horizontalPadding + segmentWidth * index + segmentWidth / 2
            const y = verticalPadding + chartHeight - (item.count / safeMaxCount) * chartHeight
            return (
              <g key={item.day}>
                <circle
                  cx={x}
                  cy={y}
                  r={CHART_CONFIG.point.highlightRadius}
                  fill={config?.customColors?.point || CHART_CONFIG.colors.pointHighlight}
                />
                <text
                  x={x}
                  y={y - CHART_CONFIG.spacing.pointTextOffset}
                  textAnchor="middle"
                  className={`${CHART_CONFIG.typography.fontSize} fill-gray-600`}
                >
                  {item.count}회
                </text>
              </g>
            )
          })}
        </svg>
      </div>
      <div
        className="flex text-sm text-gray-600 mt-2"
        style={{
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
          width: totalWidth,
          margin: "0 auto",
        }}
      >
        {data.map((item) => (
          <div key={item.day} className="flex-1 text-center">
            {item.day}
          </div>
        ))}
      </div>
    </div>
  )
}
