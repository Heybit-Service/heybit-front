'use client';

interface Props {
  savedAmount: number;
  spentAmount: number;
}

export function ReportSummary({ savedAmount, spentAmount }: Props) {
  const formatAmount = (amount: number) => {
    return amount.toLocaleString('ko-KR');
  };
  return (
    <div className="flex flex-col gap-[9px] px-4">
      <div className="flex items-center gap-1">
        <span className="inline-flex items-center px-3 py-1 rounded-[4px] bg-[#cff3e7] text-xl font-bold leading-[140%] text-[#0EC189]">
          {formatAmount(savedAmount)}원
        </span>
        <span className="text-xl font-bold leading-[140%] text-[#0EC189] align-middle">
          을 아꼈어요
        </span>
      </div>

      <div className="flex items-center gap-1">
        <span className="inline-flex items-center px-3 py-1 rounded-[4px] bg-[#fadbd4] text-xl font-bold leading-[140%] text-[#FF0000]">
          {formatAmount(spentAmount)}원
        </span>
        <span className="text-xl font-bold leading-[140%] text-[#FF0000] align-middle">
          을 소비했어요
        </span>
      </div>
    </div>
  );
}
