interface Props {
  successRate: number;
  grade: string;
}

export function HorizontalTimerSuccess({ successRate, grade }: Props) {
  return (
    <div className="px-4 flex flex-col gap-6">
      <h3 className="font-bold text-xl leading-[140%] tracking-[0%] text-gray-900">
        등록한 타이머 중 <span className="text-emerald-500">{successRate}% 성공</span>했어요
      </h3>

      <div className="space-y-4">
        <h4 className="text-sm font-semibold leading-[135%] tracking-[0%] text-gray-600">
          내 타이머 성공률
        </h4>

        <div className="flex flex-col gap-3">
          {/* Grade */}
          <div className="text-center">
            <div className="text-lg font-semibold text-emerald-500">{grade}</div>
          </div>

          {/* Progress Bar Container */}
          <div className="relative">
            {/* Background Bar */}
            <div className="w-full h-2 bg-gray-100 rounded-full" />

            {/* Progress Bar */}
            <div
              className="absolute top-0 left-0 h-2 bg-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${successRate}%` }}
            />
          </div>

          {/* Labels */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">0%</span>
            <span className="text-sm text-gray-500">100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
