interface Props {
  count: number;
}

const TimerCount = ({ count }: Props) => {
  return (
    <div>
      <div className="flex gap-1">
        <span className="font-bold text-base leading-[150%]">참고 있는 상품</span>
        <span className="font-bold text-base leading-[150%] text-[#0EC189]">{count}</span>
      </div>
    </div>
  );
};

export default TimerCount;
