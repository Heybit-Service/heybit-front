'use client';

const categories = ['음식', '의류', '뷰티', '생활용품', '교통', '취미', '기타'];

interface Props {
  onChange: (value: string) => void;
}

export const Category = ({ onChange }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-pretendard font-medium text-base leading-[140%]">상품 카테고리</span>
      <div className="flex gap-[6px] flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className="border border-[#A8A8A8] text-[#A8A8A8] rounded-[100px] px-3 py-[6px] font-pretendard font-medium text-sm leading-[140%]"
            onClick={() => onChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};
