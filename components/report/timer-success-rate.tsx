'use client';

import type { TimerStyleProps } from '@/lib/timer-types';
import { TIMER_STYLES, GRADE_CONFIG, transformTimerSuccessData } from '@/lib/timer-config';
import { useMonthlyReport } from '@/hooks/queries/report';
import { SAMPLE_TIMER_DATA } from '@/data/sample/report-data';

interface TimerSuccessRateProps {
  month?: string; // YYYY-MM format, defaults to current month
  styles?: TimerStyleProps;
  showLabels?: boolean;
  animated?: boolean;
}

export function TimerSuccessRate({
  month,
  styles = {},
  showLabels = true,
  animated = true,
}: TimerSuccessRateProps) {
  // Default to current month if not provided
  const getCurrentMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const monthNum = String(now.getMonth() + 1).padStart(2, '0');
    return `${year}-${monthNum}`;
  };

  const currentMonth = month || getCurrentMonth();

  const { data: reportData, isLoading, error } = useMonthlyReport(currentMonth);

  if (isLoading) {
    return (
      <div
        className={
          styles.containerClassName ||
          `${TIMER_STYLES.container.background} ${TIMER_STYLES.container.padding} ${TIMER_STYLES.container.spacing}`
        }
      >
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded mb-2"></div>
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  // API 에러 시 샘플 데이터 사용
  const timerData =
    error || !reportData ? SAMPLE_TIMER_DATA : transformTimerSuccessData(reportData.successRate);
  const { successRate, grade } = timerData;

  const gradeColor =
    GRADE_CONFIG[grade as keyof typeof GRADE_CONFIG]?.color || TIMER_STYLES.colors.primary;

  const containerClass =
    styles.containerClassName ||
    `${TIMER_STYLES.container.background} ${TIMER_STYLES.container.padding} ${TIMER_STYLES.container.spacing}`;

  const progressBarWidth = styles.progressBarWidth || 'w-64';
  const progressBarHeight = styles.progressBarHeight || 'h-4';
  const primaryColor = styles.primaryColor || TIMER_STYLES.colors.primary;

  return (
    <div className={containerClass}>
      <div className="text-center">
        <p className={TIMER_STYLES.text.title}>
          등록한 타이머 중 <span className={TIMER_STYLES.text.successRate}>{successRate}%</span>{' '}
          성공했어요
        </p>
        <p className={TIMER_STYLES.text.grade} style={{ color: gradeColor }}>
          {grade}
        </p>
      </div>

      <div className="flex justify-center">
        <div className={`${progressBarWidth} space-y-3`}>
          {/* Horizontal progress bar container */}
          <div
            className={`relative w-full ${progressBarHeight} bg-[${
              styles.backgroundColor || TIMER_STYLES.colors.background
            }] rounded-full overflow-hidden`}
          >
            {/* Progress fill */}
            <div
              className={`absolute left-0 h-full rounded-full ${
                animated ? 'transition-all duration-1000 ease-out' : ''
              }`}
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
  );
}
