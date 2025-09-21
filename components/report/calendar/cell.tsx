'use client';

import type { Transaction } from './types';

interface Props {
  date: number;
  transactions?: Transaction;
  isToday?: boolean;
  onClick?: (date: number) => void;
}

export function Cell({ date, transactions, isToday, onClick }: Props) {
  if (!date) return <div className="aspect-square w-full max-w-full" />;

  const formatAmount = (val: number) => `${Math.abs(val).toLocaleString()}`;

  return (
    <button
      onClick={() => onClick?.(date)}
      className={`
        aspect-square p-1 flex flex-col items-center justify-start
        hover:bg-gray-50 transition-colors min-h-[60px] w-full max-w-full
        ${isToday ? 'bg-[#cff3e7]' : ''}
      `}
    >
      <span
        className={`
          text-sm font-medium mb-1
          ${isToday ? 'text-[#0a8a5c] font-semibold' : 'text-black'}
        `}
      >
        {date}
      </span>

      <div className="flex flex-col items-center gap-0.5 text-[10px] leading-none w-full">
        {transactions?.income && (
          <div className="text-[#0ec189] text-center w-full truncate">
            +{formatAmount(transactions.income)}
          </div>
        )}
        {transactions?.expense && (
          <div className="text-[#e74a27] text-center w-full truncate">
            -{formatAmount(Math.abs(transactions.expense))}
          </div>
        )}
      </div>
    </button>
  );
}
