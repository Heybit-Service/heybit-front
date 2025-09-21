import { LineChart, Line, ResponsiveContainer } from 'recharts';
import type { Counts } from '@/data/api/report';
import { ChartDot } from './chart-dot';
import { WeekdayLabels } from './weekday-labels';

interface Props {
  weekdayData: Counts['byWeekday'];
}

export function WeeklyChart({ weekdayData }: Props) {
  // API 데이터를 차트용 배열로 변환
  const rawData = [
    { day: '월', count: weekdayData.MONDAY },
    { day: '화', count: weekdayData.TUESDAY },
    { day: '수', count: weekdayData.WEDNESDAY },
    { day: '목', count: weekdayData.THURSDAY },
    { day: '금', count: weekdayData.FRIDAY },
    { day: '토', count: weekdayData.SATURDAY },
    { day: '일', count: weekdayData.SUNDAY },
  ];

  // 최고값 찾기
  const maxCount = Math.max(...rawData.map((item) => item.count));

  // 최고값 표시를 위한 데이터 가공
  const data = rawData.map((item) => ({
    ...item,
    isMax: item.count === maxCount,
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
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <WeekdayLabels data={data} />
    </div>
  );
}
