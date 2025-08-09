interface Props {
  value: string;
}

export const Category = ({ value }: Props) => {
  return (
    <div className="w-fit px-3 py-1.5 border border-[#A8A8A8] rounded-[10px]">
      <span className="font-pretendard font-medium text-sm leading-[150%] text-[#7C7C7C]">
        {value}
      </span>
    </div>
  );
};
