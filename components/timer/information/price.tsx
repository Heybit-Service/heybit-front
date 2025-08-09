interface Props {
  value: number;
}

export const Price = ({ value }: Props) => {
  return (
    <div className="px-[14px] py-[15px] rounded-[10px] bg-[#FFFFFF]">
      <span className="font-pretendard font-medium text-base leading-[140%]">
        {value.toLocaleString()}원
      </span>
    </div>
  );
};
