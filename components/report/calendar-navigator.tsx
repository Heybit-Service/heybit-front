'use client';

import ArrowLeft from '@/assets/icon/arrow_left.svg';
import ArrowRight from '@/assets/icon/arrow_right.svg';

interface Props {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export function CalendarNavigator({ currentDate, onPrevMonth, onNextMonth }: Props) {
  const monthText = `${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`;
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <button onClick={onPrevMonth}>
        <ArrowLeft />
      </button>
      <h3 className="font-bold text-base text-[#202020] leading-[150%] tracking-normal align-middle">
        {monthText}
      </h3>
      <button onClick={onNextMonth}>
        <ArrowRight />
      </button>
    </div>
  );
}
