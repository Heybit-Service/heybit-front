'use client';

import type { TimerStyleProps } from '@/lib/timer-types';
import { TIMER_STYLES, transformTimerSuccessData } from '@/lib/timer-config';
import { useMonthlyReport } from '@/hooks/queries/report';
import { SAMPLE_TIMER_DATA } from '@/data/sample/report-data';
import { SuccessInfo } from './timer-success-rate/success-info';
import { ProgressBar } from './timer-success-rate/progress-bar';

interface Props {
  month?: string;
  styles?: TimerStyleProps;
}

export function TimerSuccessRate({ month, styles = {} }: Props) {
  const getCurrentMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const monthNum = String(now.getMonth() + 1).padStart(2, '0');
    return `${year}-${monthNum}`;
  };

  const currentMonth = month || getCurrentMonth();
  const { data: reportData, isLoading, error } = useMonthlyReport(currentMonth);

  if (isLoading) {
    return null;
  }

  const timerData =
    error || !reportData ? SAMPLE_TIMER_DATA : transformTimerSuccessData(reportData.successRate);

  const { successRate, grade } = timerData;

  const containerClass =
    styles.containerClassName ||
    `${TIMER_STYLES.container.background} ${TIMER_STYLES.container.padding} ${TIMER_STYLES.container.spacing}`;

  return (
    <div className={containerClass}>
      <SuccessInfo successRate={successRate} grade={grade} />
      <ProgressBar successRate={successRate} styles={styles} />
    </div>
  );
}
