import EmptyCharacter from '@/assets/timer/progress/empty_character.png';
import Image from 'next/image';
import Link from 'next/link';
import { GREEN } from '@/constant/color';
import TimerCount from '@/components/timer/count';

export const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full pt-30">
      <Image className="px-18" src={EmptyCharacter} alt="progress-empty-character" />
      <div className="flex flex-col gap-3 w-full">
        <TimerCount count={0} />
        <Link
          href="/timer/start"
          className={`flex items-center justify-center w-full h-[60px] mb-7 bg-[${GREEN.MAIN}] text-white text-18 font-semibold rounded-[10px]`}
        >
          타이머 시작
        </Link>
      </div>
    </div>
  );
};
