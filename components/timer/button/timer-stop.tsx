'use client';

interface Props {
  id: number;
}

export const TimerStopButton = ({ id }: Props) => {
  const onClick = () => {
    console.log(id);
  };

  return (
    <button
      className="w-full py-4 bg-[#202020] font-pretendard font-semibold text-lg leading-[150%] text-center text-white rounded-[10px]"
      onClick={onClick}
    >
      타이머 멈춤
    </button>
  );
};
