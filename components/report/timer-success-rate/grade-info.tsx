'use client';

interface Props {
  grade: string;
}

export function GradeInfo({ grade }: Props) {
  const GRADE_CONFIG = {
    '매우 우수': { color: '#0EC189', minRate: 80 },
    우수: { color: '#0EC189', minRate: 60 },
    보통: { color: '#FFC400', minRate: 40 },
    나쁨: { color: '#E74A27', minRate: 20 },
    '매우 나쁨': { color: '#E74A27', minRate: 0 },
  } as const;

  const gradeColor = GRADE_CONFIG[grade as keyof typeof GRADE_CONFIG]?.color || '#0EC189';

  return (
    <p
      className="font-bold text-center"
      style={{
        color: gradeColor,
        fontSize: '26px',
        lineHeight: '133%',
        textIndent: '2px',
        letterSpacing: '0%',
        fontWeight: 700,
      }}
    >
      {grade}
    </p>
  );
}
