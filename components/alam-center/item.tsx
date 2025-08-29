interface Props {
  title: string;
  body: string;
  voting: boolean;
}

export const AlarmItem = ({ title, body, voting }: Props) => {
  return (
    <div className="flex justify-between gap-10 px-4 py-4 border border-[#E8E8E8] rounded-[10px] bg-white">
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-lg leading-[150%] align-middle text-[#202020]">
          {title}
        </span>
        <span className="font-medium text-sm leading-[140%] align-middle text-[#7C7C7C]">
          {body}
        </span>
      </div>
      {voting && (
        <div className="flex items-center justify-center bg-[#A8A8A8] py-1 px-[10px] rounded-[100px] h-fit">
          <span className="font-bold text-xs leading-[150%] text-center text-[#FFFFFF]">
            투표 종료
          </span>
        </div>
      )}
    </div>
  );
};
