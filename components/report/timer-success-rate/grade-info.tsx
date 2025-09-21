'use client';

import { GRADE_CONFIG } from '@/lib/timer-config';

interface Props {
  grade: string;
}

export function GradeInfo({ grade }: Props) {
  const gradeColor = GRADE_CONFIG[grade as keyof typeof GRADE_CONFIG]?.color || '#0ec189';

  return (
    <p className="text-lg font-semibold mt-2" style={{ color: gradeColor }}>
      {grade}
    </p>
  );
}
