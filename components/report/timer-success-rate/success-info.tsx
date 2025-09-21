'use client';

import { TIMER_STYLES, GRADE_CONFIG } from '@/lib/timer-config';

interface Props {
  successRate: number;
  grade: string;
}

export function SuccessInfo({ successRate, grade }: Props) {
  const gradeColor =
    GRADE_CONFIG[grade as keyof typeof GRADE_CONFIG]?.color || TIMER_STYLES.colors.primary;
  return (
    <div className="text-center">
      <p className={TIMER_STYLES.text.title}>
        등록한 타이머 중 <span className={TIMER_STYLES.text.successRate}>{successRate}%</span>{' '}
        성공했어요
      </p>
      <p className={TIMER_STYLES.text.grade} style={{ color: gradeColor }}>
        {grade}
      </p>
    </div>
  );
}
