interface Props {
  topCategory: string;
  topAmount: number;
}

export function CategorySummary({ topCategory, topAmount }: Props) {
  return (
    <div className="mb-9">
      <div className="flex flex-col gap-[2px]">
        <p className="text-[20px] font-normal leading-[140%] tracking-[0%] text-[#202020]">
          한달 동안 가장 많이 소비한 카테고리는
        </p>
        <p className="text-[20px] font-normal leading-[140%] tracking-[0%] text-[#202020]">
          <span className="font-bold text-[20px] leading-[140%] tracking-[0%]">{topCategory}</span>
          <span className="font-bold text-[20px] leading-[140%] tracking-[0%]">로 총 </span>
          <span className="font-bold text-[20px] leading-[140%] tracking-[0%]">
            {topAmount.toLocaleString()}원
          </span>
          을 사용했어요
        </p>
      </div>
    </div>
  );
}
