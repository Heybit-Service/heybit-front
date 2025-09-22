interface Props {
  totalAmount: number;
}

export function TotalSavings({ totalAmount }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-bold text-xl leading-[140%] tracking-[0%]" style={{ color: '#202020' }}>
        헤이빗과 함께 지금까지
      </h2>
      <div
        className="flex items-center gap-1 font-bold text-xl leading-[140%] tracking-[0%]"
        style={{ color: '#0EC189' }}
      >
        <span>총</span>
        <span
          className="py-1 px-3 rounded"
          style={{
            backgroundColor: '#CFF3E7',
            color: '#0EC189',
          }}
        >
          {totalAmount.toLocaleString()}원
        </span>
        <span>을 아꼈어요</span>
      </div>
    </div>
  );
}
