interface MonthlyData {
  month: string;
  amount: number;
}

interface Props {
  data: MonthlyData[];
  highlightMonth?: string;
}

export function MonthlySavingsChart({ data, highlightMonth = '7월' }: Props) {
  const maxAmount = Math.max(...data.map((d) => d.amount));
  const maxHeight = 200;

  return (
    <div className="space-y-6">
      <div className="relative h-64 px-2 mx-3">
        {/* Bar layer - controls spacing with gap-3 */}
        <div className="flex justify-between items-end h-full gap-3">
          {data.map((monthData) => {
            const height = (monthData.amount / maxAmount) * maxHeight;

            return (
              <div key={`bar-${monthData.month}`} className="flex flex-col items-center">
                <div
                  className="w-3 bg-emerald-100 rounded-t-sm transition-all duration-500"
                  style={{ height: `${height}px` }}
                />
              </div>
            );
          })}
        </div>

        {/* Text layer - positioned absolutely, independent of bar spacing */}
        <div className="absolute inset-0 flex justify-between items-end h-full px-2">
          {data.map((monthData, index) => {
            const height = (monthData.amount / maxAmount) * maxHeight;
            const leftPosition = (index / (data.length - 1)) * 100;

            return (
              <div
                key={`text-${monthData.month}`}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${leftPosition}%`,
                  transform: 'translateX(-50%)',
                  bottom: `${height + 4}px`,
                }}
              >
                <div className="text-center text-xs font-medium leading-[140%] tracking-[0%] text-gray-400 whitespace-nowrap mb-2">
                  {monthData.amount.toLocaleString()}원
                </div>
              </div>
            );
          })}
        </div>

        {/* Month labels - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-2 mx-3">
          {data.map((monthData) => {
            const isHighlighted = monthData.month === highlightMonth;

            return (
              <div
                key={`month-${monthData.month}`}
                className={`text-center text-sm font-medium leading-[140%] tracking-[0%] -mb-6 ${
                  isHighlighted ? 'text-emerald-500' : 'text-gray-400'
                }`}
              >
                {monthData.month}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
