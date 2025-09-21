'use client';

import { GRADE_CONFIG } from '@/lib/timer-config';

interface Props {
  successRate: number;
  grade: string;
}

export function SuccessInfo({ successRate, grade }: Props) {
  const gradeColor = GRADE_CONFIG[grade as keyof typeof GRADE_CONFIG]?.color || '#0ec189';
  return (
    <div className="text-center">
      <p className="text-[#1c1b1f] text-base font-medium">
        등록한 타이머 중 <span className="font-semibold">{successRate}%</span> 성공했어요
      </p>
      <p className="text-lg font-semibold mt-2" style={{ color: gradeColor }}>
        {grade}
      </p>
    </div>
  );
}
