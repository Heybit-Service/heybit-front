'use client';

import { transformTimerSuccessData } from '@/lib/timer-config';
import type { MonthlyReport } from '@/data/api/report';
import { SuccessInfo } from './timer-success-rate/success-info';
import { GradeInfo } from './timer-success-rate/grade-info';
import { ProgressBar } from './timer-success-rate/progress-bar';

interface Props {
  data: MonthlyReport;
}

export function TimerSuccessRate({ data }: Props) {
  const timerData = transformTimerSuccessData(data.successRate);
  const { successRate, grade } = timerData;
  return (
    <div className="bg-white px-4 py-7">
      <SuccessInfo successRate={successRate} />
      <GradeInfo grade={grade} />
      <ProgressBar successRate={successRate} />
    </div>
  );
}
