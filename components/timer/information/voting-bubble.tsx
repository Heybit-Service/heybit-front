interface Props {
  buyCount: number;
  stopCount: number;
  completed?: boolean;
}

export const VotingBubble = ({ buyCount, stopCount, completed = false }: Props) => {
  const totalCount = buyCount + stopCount;
  const buyPercentage = totalCount > 0 ? (buyCount / totalCount) * 100 : 50;
  const paddingLeft = `max(0px, min(calc(${buyPercentage}% - 85px), calc(100% - 170px)))`;
  const stopPercentage = Math.round(100 - buyPercentage);
  return (
    <div
      style={{
        paddingLeft,
      }}
    >
      <div className="inline-block border border-[#0EC189] rounded-[100px] px-[10.5px] py-[2px] text-center">
        <span className="font-pretendard font-semibold text-xs leading-[150%] text-[#0EC189] whitespace-nowrap">
          {stopPercentage}%가 구매를 {completed ? '말렸어요' : '말리는 중이에요'}
        </span>
      </div>
    </div>
  );
};

