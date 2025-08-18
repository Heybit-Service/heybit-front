interface Props {
  progress: number;
}

export const Title = ({ progress }: Props) => {
  const title = () => {
    if (progress >= 75) {
      return '포기하지 말고 소비를 절제해봐요!';
    }
    if (progress >= 50) {
      return '잘하고 있어요! 지갑 잠금중';
    }
    return '타이머가 끝나가요! 끝까지 참아봐요';
  };

  return (
    <span className="text-[#FFFFFF] text-base font-pretendard font-medium leading-[140%] tracking-[0%] text-center">
      {title()}
    </span>
  );
};
