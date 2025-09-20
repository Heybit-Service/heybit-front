'use client';

import Asterisk from '@/assets/timer/create/asterisk.svg';
import { useState } from 'react';

const categories = [
  { label: '음식', value: 'FOOD' },
  { label: '의류', value: 'CLOTHES' },
  { label: '뷰티', value: 'BEAUTY' },
  { label: '생활용품', value: 'DAILY' },
  { label: '교통', value: 'TRANSPORT' },
  { label: '취미', value: 'HOBBY' },
  { label: '기타', value: 'ETC' },
];

interface Props {
  onChange: (value: string) => void;
}

export const Category = ({ onChange }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleCategoryClick = (value: string) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-[5px]">
        <span className="font-pretendard font-medium text-base leading-[140%]">상품 카테고리</span>
        <Asterisk />
      </div>
      <div className="flex gap-[6px] flex-wrap">
        {categories.map(({ label, value }) => {
          const isSelected = selected === value;
          return (
            <button
              key={value}
              className={`
                rounded-[100px] px-3 py-[6px] font-pretendard font-medium text-sm leading-[140%] border transition-colors
                ${
                  isSelected ? 'border-[#0EC189] text-[#0EC189]' : 'border-[#A8A8A8] text-[#A8A8A8]'
                }
              `}
              onClick={() => handleCategoryClick(value)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
