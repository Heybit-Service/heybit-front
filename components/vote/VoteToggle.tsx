'use client';

import React, { useState } from 'react';

type VoteType = 'registered' | 'participated';

interface VoteToggleProps {
  onToggle?: (type: VoteType) => void;
  defaultValue?: VoteType;
}

export const VoteToggle: React.FC<VoteToggleProps> = ({ 
  onToggle, 
  defaultValue = 'registered' 
}) => {
  const [selected, setSelected] = useState<VoteType>(defaultValue);

  const handleToggle = (type: VoteType) => {
    setSelected(type);
    onToggle?.(type);
  };

  return (
    <div className="inline-flex flex-col items-center justify-center gap-[10px] p-[6px_5px] bg-[#E8E8E8] rounded-[10px] h-[42px]">
      <div className="inline-flex items-center justify-center flex-1 relative">
        <button
          onClick={() => handleToggle('registered')}
          className={`
            inline-flex items-center justify-center gap-[10px] h-[34px] px-3 rounded-lg
            transition-all duration-200 relative cursor-pointer
            ${selected === 'registered' 
              ? 'bg-white shadow-[2px_2px_4px_5px_rgba(0,0,0,0.05)]' 
              : 'shadow-[0px_4px_5px_0px_rgba(0,0,0,0.01)]'
            }
          `}
        >
          <span className={`
            whitespace-nowrap text-[14px] leading-[150%]
            ${selected === 'registered' 
              ? 'text-[#202020] font-semibold' 
              : 'text-[#7C7C7C] font-normal'
            }
          `}>
            내가 등록한 투표
          </span>
        </button>

        <button
          onClick={() => handleToggle('participated')}
          className={`
            inline-flex items-center justify-center gap-[10px] h-[34px] px-3 rounded-lg
            transition-all duration-200 relative ml-2 cursor-pointer
            ${selected === 'participated' 
              ? 'bg-white shadow-[2px_2px_4px_5px_rgba(0,0,0,0.05)]' 
              : 'shadow-[0px_4px_5px_0px_rgba(0,0,0,0.01)]'
            }
          `}
        >
          <span className={`
            whitespace-nowrap text-[14px] leading-[150%]
            ${selected === 'participated' 
              ? 'text-[#202020] font-semibold' 
              : 'text-[#7C7C7C] font-normal'
            }
          `}>
            내가 참여한 투표
          </span>
        </button>
      </div>
    </div>
  );
};