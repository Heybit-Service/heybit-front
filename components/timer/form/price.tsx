'use client';

import Asterisk from '@/assets/timer/create/asterisk.svg';
import { useState } from 'react';

interface Props {
  onChange: (value: string) => void;
}

export const Price = ({ onChange }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^\d]/g, '');
    if (inputValue.length > 0) {
      const numericValue = Number(inputValue);
      if (numericValue > 0) {
        const numberWithCommas = numericValue.toLocaleString();
        const formattedValue = `₩ ${numberWithCommas}`;
        setValue(formattedValue);
        onChange(inputValue);
      }
    } else {
      setValue('');
      onChange('');
    }
  };

  return (
    <div className="relative w-full">
      <input
        value={value}
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        className="w-full border border-[#A8A8A8] rounded-[10px] px-[14px] py-4 bg-white font-medium text-base leading-[140%] tracking-[0%] text-[#202020] focus:outline-none pr-12"
        placeholder="₩ 상품 금액을 입력해주세요"
        onChange={handleChange}
      />
      <Asterisk className="absolute right-3 top-3" />
    </div>
  );
};
