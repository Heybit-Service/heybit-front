// ProgressBar.jsx

import React from 'react';
import Bubble from '@/assets/timer/progress/bubble.png';
import { VotingPoint } from './voting-point';

export const VotingBar = ({ buyCount = 0, stopCount = 0 }) => {
  const totalCount = buyCount + stopCount;
  const buyPercentage = totalCount > 0 ? (buyCount / totalCount) * 100 : 50;
  const stopPercentage = 100 - buyPercentage;

  return (
    <div className="flex flex-col gap-1">
      <div className="relative flex items-center">
        <div className="h-3 bg-[#A8A8A8] rounded-l-full" style={{ width: `${buyPercentage}%` }} />
        <div className="h-3 bg-[#0EC189] rounded-r-full" style={{ width: `${stopPercentage}%` }} />
        <VotingPoint
          className="absolute"
          style={{
            left: `${buyPercentage}%`,
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <span className="font-pretendard font-medium text-xs text-[#7C7C7C] leading-[150%] align-middle">
            구매해요
          </span>
          <span className="font-pretendard font-semibold text-sm text-[#7C7C7C] leading-[150%] align-middle">
            {buyCount}명
          </span>
        </div>
        <div className="flex gap-1 items-center">
          <span className="font-pretendard font-semibold text-sm text-[#0EC189] leading-[150%] align-middle">
            {stopCount}명
          </span>
          <span className="font-pretendard font-medium text-xs text-[#0EC189] leading-[150%] align-middle">
            멈춰요
          </span>
        </div>
      </div>
    </div>
  );
};
