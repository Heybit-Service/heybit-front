import { ImpulseSummary } from "./impulse-spending/impulse-summary"
import { WeeklyChart } from "./impulse-spending/weekly-chart"
import { TimeChart } from "./impulse-spending/time-chart"
import { CHART_CONFIG } from "@/lib/chart-config"
import type { ImpulseData } from "@/lib/impulse-types"

interface ImpulseSpendingPatternProps {
  data: ImpulseData
  className?: string
  showBorder?: boolean
}

export function ImpulseSpendingPattern({ data, className = "", showBorder = true }: ImpulseSpendingPatternProps) {
  const containerClasses = ["bg-white rounded-lg mt-4", showBorder ? "border border-gray-200" : "", className]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={containerClasses} style={{ padding: `${CHART_CONFIG.spacing.containerPadding * 4}px` }}>
      <ImpulseSummary data={data} />
      <WeeklyChart data={data.weeklyPattern} config={data.config} />
      <TimeChart data={data.timePattern} config={data.config} />
    </div>
  )
}
