interface Props {
  data: Array<{
    period: string;
    timeRange: string;
    count: number;
    isMax: boolean;
  }>;
}

export function TimeLabels({ data }: Props) {
  return (
    <div className="flex w-full justify-between">
      {data.map((item) => (
        <div key={item.period} className="text-center">
          <div className="font-medium text-[14px] leading-[150%] tracking-[0%] text-center text-[#7C7C7C]">
            {item.period}
          </div>
          <div className="text-[12px] leading-[140%] tracking-[0%] text-[#99989D]">
            {item.timeRange}
          </div>
        </div>
      ))}
    </div>
  );
}
