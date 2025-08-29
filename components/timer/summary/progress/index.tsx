import { getProgress, Timer } from '@/data/type/timer';
import ProgressStatus from './status';
import { Title } from './title';

interface Props {
  timer: Timer;
}

export const TimerProgressSummary = ({ timer }: Props) => {
  const progress = getProgress(timer.startTime, timer.endTime);

  return (
    <div className="pt-8 pb-4">
      <div className="flex flex-col items-center gap-7">
        <div className="px-4 py-[10px] bg-[#7C7C7C] rounded-[100px]">
          <Title progress={progress} />
        </div>
        <ProgressStatus progress={progress} timer={timer} />
      </div>
    </div>
  );
};
