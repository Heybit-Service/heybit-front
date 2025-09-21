'use client';

import { TIMER_STYLES } from '@/lib/timer-config';
import type { TimerStyleProps } from '@/lib/timer-types';

interface Props {
  successRate: number;
  styles?: TimerStyleProps;
}

export function ProgressBar({ successRate, styles = {} }: Props) {
  const progressBarWidth = styles.progressBarWidth || 'w-64';
  const progressBarHeight = styles.progressBarHeight || 'h-4';
  const primaryColor = styles.primaryColor || TIMER_STYLES.colors.primary;

  return (
    <div className="flex justify-center">
      <div className={`${progressBarWidth} space-y-3`}>
        <div
          className={`relative w-full ${progressBarHeight} bg-[${
            styles.backgroundColor || TIMER_STYLES.colors.background
          }] rounded-full overflow-hidden`}
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
