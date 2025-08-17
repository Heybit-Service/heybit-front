import Link from 'next/link';

interface Props {
  disabled: boolean;
}

export const TimerStartButton = ({ disabled }: Props) => {
  const textColor = disabled ? 'text-[#5B5B5B]' : 'text-[#FFFFFF]';
  const backgroundColor = disabled ? 'bg-[#E8E8E8]' : 'bg-[#0EC189]';
  const href = disabled ? '' : '/timer/start/step';
  const cursor = disabled ? 'cursor-default' : 'cursor-pointer';

  return (
    <Link
      href={href}
      className={`block w-full py-4 font-pretendard font-semibold text-lg leading-[150%] text-center rounded-[10px] transition-colors duration-300 ease-in-out ${textColor} ${backgroundColor} ${cursor}`}
    >
      타이머 시작
    </Link>
  );
};
