'use client';

import { transformTimerSuccessData } from '@/lib/timer-config';
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
  return (
    <div className="bg-white p-6 space-y-6">
      <SuccessInfo successRate={successRate} grade={grade} />
      <ProgressBar successRate={successRate} />
    </div>
  );
}
