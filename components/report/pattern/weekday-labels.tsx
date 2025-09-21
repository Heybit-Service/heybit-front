interface WeekdayLabelsProps {
  data: Array<{
    day: string;
    count: number;
    isMax: boolean;
  }>;
}

export function WeekdayLabels({ data }: WeekdayLabelsProps) {
  return (
    <div className="flex w-full justify-between">
      {data.map((item) => (
        <div
          key={item.day}
          className="font-medium text-[14px] leading-[140%] tracking-[0%] text-[#7C7C7C]"
        >
          {item.day}
        </div>
      ))}
    </div>
  );
}
