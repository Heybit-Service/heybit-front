'use client';

import React from 'react';

interface Props {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: Props) => {
  const percentage = ((current - 1) / (total - 1)) * 100;
  return (
    <div className="w-full h-[4px] bg-[#E8E8E8] rounded-full">
      <div
        className="h-full bg-[#0EC189] rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
