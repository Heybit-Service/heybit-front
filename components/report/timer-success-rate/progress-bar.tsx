'use client';

import { TIMER_STYLES } from '@/lib/timer-config';

interface Props {
  successRate: number;
}

export function ProgressBar({ successRate }: Props) {
  const progressBarWidth = 'w-72';
  const progressBarHeight = 'h-4';
  const primaryColor = '#0ec189';

  return (
    <div className="flex justify-center">
      <div className={`${progressBarWidth} space-y-3`}>
        <div
          className={`relative w-full ${progressBarHeight} bg-[${TIMER_STYLES.colors.background}] rounded-full overflow-hidden`}
        >
          <div
            className="absolute left-0 h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${successRate}%`,
              backgroundColor: primaryColor,
            }}
          />
        </div>
        <div className="flex justify-between">
          <span className={TIMER_STYLES.progressBar.labels}>0%</span>
          <span className={TIMER_STYLES.progressBar.labels}>100%</span>
        </div>
      </div>
    </div>
  );
}
