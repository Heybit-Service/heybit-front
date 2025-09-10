import { CUMULATIVE_STYLES, CUMULATIVE_TEXT } from "@/lib/cumulative-config"
import type { HorizontalTimerSuccessProps } from "@/lib/cumulative-types"

export function HorizontalTimerSuccess({ successRate, grade, customStyles }: HorizontalTimerSuccessProps) {
  const styles = {
    progressColor: customStyles?.progressColor || CUMULATIVE_STYLES.colors.primary,
    backgroundColor: customStyles?.backgroundColor || CUMULATIVE_STYLES.colors.gray[100],
    height: customStyles?.height || CUMULATIVE_STYLES.chart.progressHeight,
  }

  return (
    <div className="px-4" style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
      <h3
        className="font-bold leading-[140%] tracking-[0%]"
        style={{
          fontFamily: "Pretendard",
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "140%",
          letterSpacing: "0%",
          color: CUMULATIVE_STYLES.colors.gray[900],
        }}
      >
        {CUMULATIVE_TEXT.timerSuccess} <span style={{ color: "#0EC189" }}>{successRate}% 성공</span>했어요
      </h3>

      <div className="space-y-4">
        <h4
          className="text-base"
          style={{
            fontFamily: "Pretendard",
            fontWeight: 600,
            fontSize: "14px",
            lineHeight: "135%",
            letterSpacing: "0%",
            color: CUMULATIVE_STYLES.colors.gray[600],
          }}
        >
          {CUMULATIVE_TEXT.timerSuccessRate}
        </h4>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Grade */}
          <div className="text-center">
            <div className="text-lg font-semibold" style={{ color: CUMULATIVE_STYLES.colors.primary }}>
              {grade}
            </div>
          </div>

          {/* Progress Bar Container */}
          <div className="relative">
            {/* Background Bar */}
            <div
              className="w-full rounded-full"
              style={{
                height: styles.height,
                backgroundColor: styles.backgroundColor,
              }}
            />

            {/* Progress Bar */}
            <div
              className="absolute top-0 left-0 rounded-full transition-all duration-500"
              style={{
                width: `${successRate}%`,
                height: styles.height,
                backgroundColor: styles.progressColor,
              }}
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between items-center">
            <span className="text-sm" style={{ color: CUMULATIVE_STYLES.colors.gray[500] }}>
              0%
            </span>
            <span className="text-sm" style={{ color: CUMULATIVE_STYLES.colors.gray[500] }}>
              100%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
