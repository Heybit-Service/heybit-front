import React from 'react';
import { Icon } from './icon';
import { getDuration, Timer } from '@/data/type/timer';
import { formatKoreanTime } from '@/utils/time.formatter';

type Props = {
  progress: number;
  timer: Timer;
};

const size = 238;
const strokeWidth = 14;

const ProgressStatus = ({ progress, timer }: Props) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percent = Math.min(Math.max(progress, 0), 100) / 100;
  const offset = circumference * (1 - percent);
  const cx = size / 2;
  const cy = size / 2;
  const angle = 2 * Math.PI * percent - Math.PI / 2;

  const iconX = cx + radius * Math.cos(angle);
  const iconY = cy + radius * Math.sin(angle);
  const now = new Date();
  const duration = getDuration(now.toISOString(), timer.endTime);
  const endTimeLabel = formatKoreanTime(new Date(timer.endTime));
  const textColor = progress === 0 ? 'text-[#7C7C7C]' : 'text-[#202020]';
  return (
    <div className="relative flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          className="stroke-[#E8E8E8]"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          className={`stroke-[#0EC189] transition-all duration-500`}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div
        className="absolute"
        style={{
          left: iconX,
          top: iconY,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {progress > 0 && <Icon progress={progress} />}
      </div>
      <div className="absolute flex flex-col items-center justify-center">
        {duration.days > 0 && (
          <span
            className={`font-extrabold text-2xl leading-[150%] tracking-[0%] text-center ${textColor}`}
          >
            {duration.days}일
          </span>
        )}
        <span
          className={`font-bold text-[40px] leading-[150%] tracking-[0%] text-center ${textColor}`}
        >
          {duration.hours.toString().padStart(2, '0')}:
          {duration.minutes.toString().padStart(2, '0')}
        </span>
        <div className="flex flex-col gap-[2px]">
          <span
            className={`font-bold text-sm leading-[133%] tracking-[0%] text-center ${textColor}`}
          >
            완료 시간
          </span>
          <span
            className={`font-semibold text-xs leading-[150%] tracking-[0%] text-center ${textColor}`}
          >
            {endTimeLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressStatus;
