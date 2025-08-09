import CompletedTimerEmpty from '@/assets/timer/completed-timer-empty.png';
import Image from 'next/image';

export const Empty = () => {
  return (
    <div className="h-full">
      <Image className="pt-33 px-12" src={CompletedTimerEmpty} alt="completed-timer-empty" />
    </div>
  );
};
