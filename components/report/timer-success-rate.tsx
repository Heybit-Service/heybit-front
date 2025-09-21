'use client';

import { transformTimerSuccessData } from '@/lib/timer-config';
import { SAMPLE_TIMER_DATA } from '@/data/sample/report-data';
import type { MonthlyReport } from '@/data/api/report';
import { SuccessInfo } from './timer-success-rate/success-info';
import { GradeInfo } from './timer-success-rate/grade-info';
import { ProgressBar } from './timer-success-rate/progress-bar';

interface Props {
  data?: MonthlyReport;
}

export function TimerSuccessRate({ data }: Props) {
  const timerData = data ? transformTimerSuccessData(data.successRate) : SAMPLE_TIMER_DATA;
  const { successRate, grade } = timerData;
  return (
    <div className="bg-white px-4 py-7">
      <SuccessInfo successRate={successRate} />
      <GradeInfo grade={grade} />
      <ProgressBar successRate={successRate} />
    </div>
  );
}
