import SuccessCharacter from '@/assets/timer/completed/sucess_character.png';
import FailCharacter from '@/assets/timer/completed/fail_character.png';
import { Timer } from '@/data/type/timer';
import Image from 'next/image';
import { SizedBox } from '@/components/sized-box';
import { GREEN, RED } from '@/constant/color';

interface Props {
  timer: Timer;
}

export const TimerSummary = ({ timer }: Props) => {
  const formatDuration = (startTime: string, endTime: string) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diffMs = end.getTime() - start.getTime();
    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const days = Math.floor(totalMinutes / (24 * 60));
    const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
    const minutes = totalMinutes % 60;
    const parts = [];
    if (days > 0) parts.push(`${days}일`);
    if (hours > 0) parts.push(`${hours}시간`);
    if (minutes > 0) parts.push(`${minutes}분`);
    return parts.length > 0 ? parts.join(' ') : '0분';
  };
  const character = timer.status === 'SAVED' ? SuccessCharacter : FailCharacter;
  const duration = formatDuration(timer.startTime, timer.endTime);
  const summary1 = timer.status === 'SAVED' ? `${duration}을 참고` : `${duration}을 고민했지만`;
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
