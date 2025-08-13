interface Props {
  buyCount: number;
  stopCount: number;
}

export const VotingBubble = ({ buyCount, stopCount }: Props) => {
  const totalCount = buyCount + stopCount;
  const buyPercentage = totalCount > 0 ? (buyCount / totalCount) * 100 : 50;
  const paddingLeft = `calc(${buyPercentage}% - 85px)`;
  const stopPercentage = Math.round(100 - buyPercentage);
  return (
    <div
      style={{
        paddingLeft,
      }}
    >
      <div className="inline-block border border-[#0EC189] rounded-[100px] px-[10.5px] py-[2px] text-center">
        <span className="font-pretendard font-semibold text-xs leading-[150%] text-[#0EC189]">
          {stopPercentage}%가 구매를 말리는 중이에요
        </span>
      </div>
    </div>
  );
};
