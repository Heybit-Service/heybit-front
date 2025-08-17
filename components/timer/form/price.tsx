'use client';

interface Props {
  onChange: (value: string) => void;
}

export const Price = ({ onChange }: Props) => {
  return (
    <input
      type="text"
      className="border border-[#A8A8A8] rounded-[10px] px-[14px] py-4 bg-white font-medium text-base leading-[140%] tracking-[0% focus:outline-none"
      placeholder="₩ 상품 금액을 입력해주세요"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
