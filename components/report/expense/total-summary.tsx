interface Props {
  totalExpense: number;
}

export function TotalSummary({ totalExpense }: Props) {
  return (
    <div className="pt-4 border-t border-gray-200">
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-900">총 지출</span>
        <span className="font-bold text-lg">{totalExpense.toLocaleString()}원</span>
      </div>
    </div>
  );
}
