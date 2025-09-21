'use client';

// No imports needed

interface Props {
  successRate: number;
}

export function ProgressBar({ successRate }: Props) {
  return (
    <div className="flex justify-center">
      <div className="w-72 space-y-3">
        <div className="relative w-full h-4 bg-[#e8e8e8] rounded-full overflow-hidden">
          <div
            className="absolute left-0 h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${successRate}%`,
              backgroundColor: '#0ec189',
            }}
          />
        </div>
        <div className="flex justify-between">
          <span className="text-xs text-[#99989d] font-medium">0%</span>
          <span className="text-xs text-[#99989d] font-medium">100%</span>
        </div>
      </div>
    </div>
  );
}
