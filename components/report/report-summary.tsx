'use client';

interface ReportSummaryProps {
  savedAmount: number;
  spentAmount: number;
}

export function ReportSummary({ savedAmount, spentAmount }: ReportSummaryProps) {
  const formatAmount = (amount: number) => {
    return amount.toLocaleString('ko-KR');
  };

  return (
    <div className="space-y-3 mb-6">
      <div className="flex items-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#cff3e7] text-sm font-medium text-[#0a8a5c] mr-1">
          {formatAmount(savedAmount)}원
        </span>
        <span className="text-base text-gray-700">을 아꼈어요</span>
      </div>

      <div className="flex items-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#fadbd4] text-sm font-medium text-[#e74a27] mr-1">
          {formatAmount(spentAmount)}원
        </span>
        <span className="text-base text-gray-700">을 소비했어요</span>
      </div>
    </div>
  );
}
