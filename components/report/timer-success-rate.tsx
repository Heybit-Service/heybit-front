'use client';

import { TIMER_STYLES, transformTimerSuccessData } from '@/lib/timer-config';
import { SAMPLE_TIMER_DATA } from '@/data/sample/report-data';
import { SuccessInfo } from './timer-success-rate/success-info';
import { ProgressBar } from './timer-success-rate/progress-bar';
import type { MonthlyReport } from '@/data/api/report';

interface Props {
  data?: MonthlyReport;
}

export function TimerSuccessRate({ data }: Props) {
  const timerData = data ? transformTimerSuccessData(data.successRate) : SAMPLE_TIMER_DATA;
  const { successRate, grade } = timerData;

  const containerClass = `${TIMER_STYLES.container.background} ${TIMER_STYLES.container.padding} ${TIMER_STYLES.container.spacing}`;

  return (
    <div className={containerClass}>
      <SuccessInfo successRate={successRate} grade={grade} />
      <ProgressBar successRate={successRate} />
    </div>
  );
}
