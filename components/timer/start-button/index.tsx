'use client';

import { useRouter } from 'next/navigation';
import { GREEN } from '@/constant/color';

export const TimerStartButton = () => {
  const router = useRouter();

  const onClick = () => {
    router.push('/timer/start');
  };

  return (
    <button
      className={`w-full h-[60px] bg-[${GREEN.MAIN}] text-white text-18 font-semibold rounded-[10px]`}
      onClick={onClick}
    >
      타이머 시작
    </button>
  );
};
