'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import TimerIcon from '@/assets/vote/timer.svg';

interface VoteCardProps {
  productImage: string | StaticImageData;
  productName: string;
  productPrice: number;
  timeRemaining?: string;
  userName?: string;
  userComment?: string;
  onBuy?: () => Promise<void> | void;
  onHold?: () => Promise<void> | void;
  initialVoted?: boolean;
}

export function VoteCard({
  productImage,
  productName,
  productPrice,
  timeRemaining,
  userName,
  userComment,
  onBuy,
  onHold,
  initialVoted,
}: VoteCardProps) {
  const [isVoted, setIsVoted] = useState(!!initialVoted);

  const handleVote = async (type: 'BUY' | 'HOLD') => {
    try {
      if (type === 'BUY' && onBuy) await onBuy();
      if (type === 'HOLD' && onHold) await onHold();
      setIsVoted(true);
    } catch (e) {
      console.error('Vote failed', e);
    }
  };
  return (
    <div className="flex flex-col gap-2.5 p-5 bg-white rounded-[10px] shadow-[0px_3px_8px_0px_rgba(83,83,83,0.05)]">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center gap-4">
          <Image
            src={productImage}
            alt={productName}
            width={84}
            height={84}
            className="rounded-[10px] object-cover"
          />

          <div className="flex flex-col gap-1.5 flex-1">
            {timeRemaining && (
              <div className="inline-flex h-[26px] items-center gap-1 px-2 py-1 rounded-md border border-solid border-heybit-variable-HB-green-main w-fit">
                <TimerIcon className="w-[18px] h-[18px] flex-shrink-0" />
                <span className="text-heybit-variable-HB-green-main text-center font-pretendard text-xs font-bold leading-[150%] whitespace-nowrap">
                  {timeRemaining}
                </span>
              </div>
            )}

            <div className="flex flex-col w-full">
              <div className="text-heybit-variable-HB-balck font-pretendard text-base font-semibold">
                {productName}
              </div>
              <div className="flex items-center">
                <span className="text-heybit-variable-HB-balck font-pretendard text-xl font-bold">
                  {productPrice.toLocaleString()}
                </span>
                <span className="text-heybit-variable-HB-balck font-pretendard text-xl font-bold">
                  원
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-0.5 w-full">
          {userName && (
            <div className="self-stretch text-heybit-variable-HB-gray300 font-pretendard text-xs font-semibold leading-[150%]">
              {userName}
            </div>
          )}
          {userComment && (
            <p className="self-stretch overflow-hidden text-ellipsis line-clamp-2 text-heybit-variable-HB-gray500 font-pretendard text-sm font-normal leading-[150%]">
              {userComment}
            </p>
          )}
        </div>

        <div className="flex w-full h-12 items-center gap-3">
          {!isVoted ? (
            <>
              <button
                onClick={() => handleVote('BUY')}
                className="flex-1 h-12 px-4 py-2 bg-heybit-variable-HB-gray300 rounded-lg flex items-center justify-center cursor-pointer"
              >
                <span className="text-heybit-variable-HB-white font-pretendard font-medium text-base">
                  구매해요
                </span>
              </button>
              <button
                onClick={() => handleVote('HOLD')}
                className="flex-1 h-12 px-4 py-2 bg-heybit-variable-HB-green-main rounded-lg flex items-center justify-center cursor-pointer"
              >
                <span className="text-heybit-variable-HB-white font-pretendard font-medium text-base">
                  멈춰요
                </span>
              </button>
            </>
          ) : (
            <button
              disabled
              className="flex-1 h-12 px-4 py-2 bg-heybit-variable-HB-gray200 rounded-lg flex items-center justify-center cursor-not-allowed"
            >
              <span className="text-heybit-variable-HB-gray500 font-pretendard font-medium text-base">
                투표 완료
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
