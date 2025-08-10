import SuccessCharacter from '@/assets/timer/completed/sucess_character.png';
import FailCharacter from '@/assets/timer/completed/fail_character.png';
import { getDuration, Timer } from '@/data/type/timer';
import Image from 'next/image';
import { SizedBox } from '@/components/sized-box';
import { GREEN, RED } from '@/constant/color';
import { formatDuration } from '@/utils/duration.formatter';

interface Props {
  timer: Timer;
}

export const TimerSummary = ({ timer }: Props) => {
  const character = timer.status === 'SAVED' ? SuccessCharacter : FailCharacter;
  const duration = getDuration(timer.startTime, timer.endTime);
  const durationLabel = formatDuration(duration);
  const summary1 =
    timer.status === 'SAVED' ? `${durationLabel}을 참고` : `${durationLabel}을 고민했지만`;
  const summary2 = timer.status === 'SAVED' ? '을 아꼈어요' : '을 사용했어요';
  const priceColor = timer.status === 'SAVED' ? GREEN.MAIN : RED[200];
  return (
    <div className="px-12 pt-12 pb-8">
      <Image className="px-16" src={character} alt="timer-character" />
      <SizedBox className="h-6" />
      <div className="flex flex-col items-center gap-1">
        <span className="text-[22px] font-bold text-center leading-[130%] tracking-normal">
          {summary1}
        </span>
        <span className="text-[22px] font-bold text-center leading-[130%] tracking-normal">
          <span style={{ color: priceColor }}>{timer.amount.toLocaleString()}원</span>
          {summary2}
        </span>
      </div>
    </div>
  );
};
