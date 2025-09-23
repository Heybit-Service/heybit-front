'use client';

interface Props {
  successRate: number;
  grade: string;
}

export function SuccessInfo({ successRate, grade }: Props) {
  const GRADE_CONFIG = {
    '매우 우수': { color: '#0EC189', minRate: 80 },
    우수: { color: '#0EC189', minRate: 60 },
    보통: { color: '#FFC400', minRate: 40 },
    나쁨: { color: '#E74A27', minRate: 20 },
    '매우 나쁨': { color: '#E74A27', minRate: 0 },
  } as const;

  const gradeColor = GRADE_CONFIG[grade as keyof typeof GRADE_CONFIG]?.color || '#0EC189';

  return (
    <div>
      <p className="text-[#202020] text-[20px] font-bold leading-[140%] tracking-[0%]">
        등록한 타이머 중 <span style={{ color: gradeColor }}>{successRate}% 성공</span>
        했어요
      </p>
    </div>
  );
}
