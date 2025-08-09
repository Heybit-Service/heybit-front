import { Timer } from '@/data/type/timer';
import Image from 'next/image';
import ProgressStatus from '@/assets/timer/progress/progress_status.png';

interface Props {
  timer: Timer;
}

export const TimerProgressSummary = ({ timer }: Props) => {
  return (
    <div className="pt-8 pb-4">
      <div className="flex flex-col items-center gap-7 px-19">
        <div className="px-4 py-[10px] bg-[#7C7C7C] rounded-[100px]">
          <span className="text-[#FFFFFF] text-base font-pretendard font-medium leading-[140%] tracking-[0%] text-center">
            포기하지 말고 소비를 절제해봐요!
          </span>
        </div>
        <Image src={ProgressStatus} alt="progress-status" />
      </div>
    </div>
  );
};
