'use client';

interface Props {
  successRate: number;
}

export function SuccessInfo({ successRate }: Props) {
  return (
    <div>
      <p className="text-[#202020] text-[20px] font-bold leading-[140%] tracking-[0%]">
        등록한 타이머 중 <span className="text-[#0EC189]">{successRate}% 성공</span>
        했어요
      </p>
    </div>
  );
}
