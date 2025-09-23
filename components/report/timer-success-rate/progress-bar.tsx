'use client';

// No imports needed

interface Props {
  successRate: number;
  grade: string;
}

export function ProgressBar({ successRate, grade }: Props) {
  const gradeLines = [20, 40, 60, 80];

  const GRADE_CONFIG = {
    '매우 우수': { color: '#0EC189', minRate: 80 },
    우수: { color: '#0EC189', minRate: 60 },
    보통: { color: '#FFC400', minRate: 40 },
    나쁨: { color: '#E74A27', minRate: 20 },
    '매우 나쁨': { color: '#E74A27', minRate: 0 },
  } as const;

  const gradeColor = GRADE_CONFIG[grade as keyof typeof GRADE_CONFIG]?.color || '#0EC189';

  return (
    <div className="w-full space-y-3">
      <div
        className="relative w-full h-5 bg-[#e8e8e8] overflow-hidden"
        style={{ borderRadius: '100px' }}
      >
        <div
          className="absolute left-0 h-full transition-all duration-1000 ease-out"
          style={{
            width: `${successRate}%`,
            backgroundColor: gradeColor,
            borderRadius: '100px',
          }}
        />
        {gradeLines.map((percentage) => (
          <svg
            key={percentage}
            className="absolute top-0"
            style={{
              left: `${percentage}%`,
              height: '100%',
              width: '1.2px',
              opacity: 0.9,
            }}
          >
            <line
              x1="0.6"
              y1="0"
              x2="0.6"
              y2="100%"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeDasharray="1,1"
            />
          </svg>
        ))}
      </div>
      <div className="flex justify-between">
        <span className="text-xs text-[#99989d] font-medium">0%</span>
        <span className="text-xs text-[#99989d] font-medium">100%</span>
      </div>
    </div>
  );
}
