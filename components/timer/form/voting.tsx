import Toggle from '@/components/toggle';

interface Props {
  onChange: (value: boolean) => void;
}

export const Voting = ({ onChange }: Props) => {
  return (
    <div className="flex justify-between items-center pl-[15px] pr-[41px] pt-[19px] pb-[22px] bg-[#E8E8E8] rounded-[10px]">
      <div className="flex flex-col">
        <span className="font-pretendard font-normal text-sm text-[#7C7C7C] leading-[150%] tracking-[0%]">
          다른 사용자들의 의견을 물어볼까요?
        </span>
        <span className="font-pretendard font-medium text-base text-[#202020] leading-[140%] tracking-[0%]">
          살까말까 투표 자동 등록하기
        </span>
      </div>
      <Toggle onChanged={onChange} />
    </div>
  );
};
