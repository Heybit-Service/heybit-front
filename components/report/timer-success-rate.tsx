"use client"

import type { TimerSuccessData, TimerStyleProps } from "@/lib/timer-types"
import { TIMER_STYLES, GRADE_CONFIG } from "@/lib/timer-config"

interface TimerSuccessRateProps {
  data: TimerSuccessData
  styles?: TimerStyleProps
  showLabels?: boolean
  animated?: boolean
}

export function TimerSuccessRate({ data, styles = {}, showLabels = true, animated = true }: TimerSuccessRateProps) {
  const { successRate, grade } = data

  const gradeColor = GRADE_CONFIG[grade]?.color || TIMER_STYLES.colors.primary

  const containerClass =
    styles.containerClassName ||
    `${TIMER_STYLES.container.background} ${TIMER_STYLES.container.padding} ${TIMER_STYLES.container.spacing}`

  const progressBarWidth = styles.progressBarWidth || "w-64"
  const progressBarHeight = styles.progressBarHeight || "h-4"
  const primaryColor = styles.primaryColor || TIMER_STYLES.colors.primary

  return (
    <div className={containerClass}>
      <div className="text-center">
        <p className={TIMER_STYLES.text.title}>
          등록한 타이머 중 <span className={TIMER_STYLES.text.successRate}>{successRate}%</span> 성공했어요
        </p>
        <p className={TIMER_STYLES.text.grade} style={{ color: gradeColor }}>
          {grade}
        </p>
      </div>

      <div className="flex justify-center">
        <div className={`${progressBarWidth} space-y-3`}>
          {/* Horizontal progress bar container */}
          <div
            className={`relative w-full ${progressBarHeight} bg-[${styles.backgroundColor || TIMER_STYLES.colors.background}] rounded-full overflow-hidden`}
          >
            {/* Progress fill */}
            <div
              className={`absolute left-0 h-full rounded-full ${animated ? "transition-all duration-1000 ease-out" : ""}`}
              style={{
                width: `${successRate}%`,
                backgroundColor: primaryColor,
              }}
            />
          </div>

          {/* 0% and 100% labels below progress bar */}
          {showLabels && (
            <div className="flex justify-between">
              <span className={TIMER_STYLES.progressBar.labels}>0%</span>
              <span className={TIMER_STYLES.progressBar.labels}>100%</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
