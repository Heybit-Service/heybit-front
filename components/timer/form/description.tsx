'use client';

interface Props {
  onChange: (value: string) => void;
}

export const Description = ({ onChange }: Props) => {
  return (
    <textarea
      className="h-30 border border-[#A8A8A8] rounded-[10px] pl-[14px] pr-8 py-4 bg-white font-pretendard font-medium text-base leading-[140%] tracking-[0%]"
      placeholder="제품에 대한 설명과 구매를 망설이는 이유를 작성해주세요."
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
