'use client';

import { useState } from 'react';
import Asterisk from '@/assets/timer/create/asterisk.svg';

interface Props {
  onChange: (value: string) => void;
}

export const Name = ({ onChange }: Props) => {
  const [count, setCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 15) {
      return;
    }
    setCount(e.target.value.length);
    onChange(e.target.value);
  };

  const textColor = count >= 15 ? 'text-[#FF0000]' : 'text-[#A8A8A8]';

  return (
    <div className="relative w-full">
      <input
        type="text"
        className="w-full border border-[#A8A8A8] rounded-[10px] px-[14px] py-4 bg-white font-medium text-base leading-[140%] tracking-[0%] text-[#202020] focus:outline-none pr-12"
        placeholder="상품명"
        onChange={handleChange}
        maxLength={15}
      />
      <span
        className={`absolute right-[30px] top-1/2 -translate-y-1/2 font-medium text-xs leading-[140%] tracking-[0%] text-right align-middle ${textColor}`}
      >
        {count}/15
      </span>
      <Asterisk className="absolute right-3 top-3" />
    </div>
  );
};
