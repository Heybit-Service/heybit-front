'use client';

import { SuccessInfo } from './timer-success-rate/success-info';
import { GradeInfo } from './timer-success-rate/grade-info';
import { ProgressBar } from './timer-success-rate/progress-bar';

interface SuccessRateData {
  successRatePercent: number;
  totalCount: number;
  successCount: number;
}

interface Props {
  data: { successRate: SuccessRateData };
}

export function TimerSuccessRate({ data }: Props) {
  const getGrade = (rate: number): string => {
    if (rate >= 80) return '매우 우수';
    if (rate >= 60) return '우수';
    if (rate >= 40) return '보통';
    if (rate >= 20) return '나쁨';
    return '매우 나쁨';
  };

  const formatData = (data: {
    successRatePercent: number;
    totalCount: number;
    successCount: number;
  }) => {
    const rate = Math.floor(data.successRatePercent);
    const grade = getGrade(rate);

    return {
      successRate: rate,
      totalTimers: data.totalCount,
      successfulTimers: data.successCount,
      grade,
    };
  };

  const { successRate, grade } = formatData(data.successRate);
  return (
    <div className="bg-white px-4 py-7 flex flex-col rounded-[10px]" style={{ gap: '26px' }}>
      <SuccessInfo successRate={successRate} />
      <div className="flex flex-col gap-3">
        <GradeInfo grade={grade} />
        <ProgressBar successRate={successRate} />
      </div>
    </div>
  );
}
