'use client';

interface Props {
  grade: string;
}

export function GradeInfo({ grade }: Props) {
  const GRADE_CONFIG = {
    '매우 우수': { color: '#0ec189', minRate: 80 },
    우수: { color: '#4ade80', minRate: 60 },
    보통: { color: '#fbbf24', minRate: 40 },
    '개선 필요': { color: '#ef4444', minRate: 0 },
  } as const;

  const gradeColor = GRADE_CONFIG[grade as keyof typeof GRADE_CONFIG]?.color || '#0ec189';

  return (
    <p className="text-lg font-semibold mt-2" style={{ color: gradeColor }}>
      {grade}
    </p>
  );
}
