import { LineChart, Line, ResponsiveContainer } from 'recharts';
import type { Counts } from '@/data/api/report';
import { ChartDot } from './chart-dot';
import { WeekdayLabels } from './weekday-labels';

interface Props {
  weekdayData: Counts['byWeekday'];
}

export function WeeklyChart({ weekdayData }: Props) {
  const rawData = [
    { day: '월', count: weekdayData.MONDAY },
    { day: '화', count: weekdayData.TUESDAY },
    { day: '수', count: weekdayData.WEDNESDAY },
    { day: '목', count: weekdayData.THURSDAY },
    { day: '금', count: weekdayData.FRIDAY },
    { day: '토', count: weekdayData.SATURDAY },
    { day: '일', count: weekdayData.SUNDAY },
  ];
  const maxCount = Math.max(...rawData.map((item) => item.count));
  const data = rawData.map((item) => ({
    ...item,
    isMax: maxCount > 0 && item.count === maxCount,
  }));
  return (
    <div className="w-full px-[10px]">
      <div className="h-[100px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 5, left: 5, bottom: 18 }}>
            <Line
              type="linear"
              dataKey="count"
              stroke="#E74A27"
              strokeWidth={1}
              dot={<ChartDot />}
              activeDot={false}
              connectNulls={true}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <WeekdayLabels data={data} />
    </div>
  );
}
