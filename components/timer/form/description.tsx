'use client';

import Asterisk from '@/assets/timer/create/asterisk.svg';
import { useState } from 'react';

interface Props {
  onChange: (value: string) => void;
}

export const Description = ({ onChange }: Props) => {
  const [count, setCount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 80) {
      return;
    }
    setCount(e.target.value.length);
    onChange(e.target.value);
  };

  const textColor = count >= 80 ? 'text-[#FF0000]' : 'text-[#A8A8A8]';

  return (
    <div className="relative w-full">
      <textarea
        id="description"
        className="w-full h-30 border border-[#A8A8A8] rounded-[10px] pl-[14px] pr-8 py-4 bg-white font-medium text-base leading-[140%] tracking-[0%] text-[#202020] focus:outline-none resize-none"
        placeholder="제품에 대한 설명과 구매를 망설이는 이유를 작성해주세요."
        onChange={handleChange}
        maxLength={80}
      />
      <span
        className={`absolute right-[30px] bottom-4 font-medium text-xs leading-[140%] tracking-[0%] text-right align-middle ${textColor}`}
      >
        {count}/80
      </span>
      <Asterisk className="absolute right-3 top-3" />
    </div>
  );
};
