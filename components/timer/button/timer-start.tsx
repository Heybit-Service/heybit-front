import Link from 'next/link';

export const TimerStartButton = () => {
  return (
    <Link
      href={`/timer/start/step`}
      className="block w-full py-4 bg-[#0EC189] font-pretendard font-semibold text-lg leading-[150%] text-center text-white rounded-[10px]"
    >
      타이머 시작
    </Link>
  );
};
