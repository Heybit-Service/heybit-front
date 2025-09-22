interface Props {
  totalAmount: number;
}

export function TotalSavings({ totalAmount }: Props) {
  return (
    <div className="space-y-3">
      <h2 className="font-bold text-xl text-gray-900 leading-[140%] tracking-[0%]">
        헤이빗과 함께 지금까지
      </h2>
      <div className="flex items-center gap-2 font-bold text-xl leading-[140%] tracking-[0%] text-emerald-700">
        <span>총</span>
        <span className="py-1 px-3 bg-emerald-100 text-emerald-700 rounded">
          {totalAmount.toLocaleString()}원
        </span>
        <span>을 아꼈어요</span>
      </div>
    </div>
  );
}
