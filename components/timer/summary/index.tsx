import SuccessCharacter from '@/assets/timer/completed/sucess_character.png';
import { Timer } from '@/data/type/timer';
import Image from 'next/image';
import { SizedBox } from '@/components/sized-box';
import { GREEN } from '@/constant/color';

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

  const duration = formatDuration(timer.startTime, timer.endTime);

  return (
    <div className="px-12 pt-12 pb-8">
      <Image className="px-16" src={SuccessCharacter} alt="timer-character" />
      <SizedBox className="h-6" />
      <div className="flex flex-col items-center gap-1">
        <span className="text-[22px] font-bold text-center leading-[130%] tracking-normal">
          {duration}을 참고
        </span>
        <span className="text-[22px] font-bold text-center leading-[130%] tracking-normal">
          <span style={{ color: GREEN.MAIN }}>{timer.amount.toLocaleString()}원</span>을 아꼈어요
        </span>
      </div>
    </div>
  );
};
