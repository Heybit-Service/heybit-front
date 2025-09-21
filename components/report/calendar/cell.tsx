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
      className="aspect-square flex flex-col items-center justify-start hover:bg-gray-50 transition-colors min-h-[60px] w-full max-w-full"
    >
      <span className="text-sm font-medium leading-[140%] text-center align-middle text-[#7C7C7C]">
        {date}
      </span>

      <div className="flex flex-col items-center gap-1 text-[10px] leading-none w-full mt-1">
        {transactions?.income && (
          <div className="text-[#0EC189] text-center w-full truncate text-[9px] font-medium leading-[120%] align-middle">
            +{formatAmount(transactions.income)}
          </div>
        )}
        {transactions?.expense && (
          <div className="text-[#E74A27] text-center w-full truncate text-[9px] font-medium leading-[120%] align-middle">
            -{formatAmount(Math.abs(transactions.expense))}
          </div>
        )}
      </div>
    </button>
  );
}
