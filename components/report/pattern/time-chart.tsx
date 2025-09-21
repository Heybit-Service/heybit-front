import { LineChart, Line, ResponsiveContainer } from 'recharts';
import type { Counts } from '@/data/api/report';
import { ChartDot } from './chart-dot';
import { TimeLabels } from './time-labels';

interface Props {
  timeData: Counts['byTimeZone'];
}

export function TimeChart({ timeData }: Props) {
  const rawData = [
    { period: '오전', timeRange: '6~11시', count: timeData.MORNING || 0 },
    { period: '점심', timeRange: '11~14시', count: timeData.LUNCH || 0 },
    { period: '오후', timeRange: '14~17시', count: timeData.AFTERNOON || 0 },
    { period: '저녁', timeRange: '17~20시', count: timeData.EVENING || 0 },
    { period: '밤', timeRange: '20~24시', count: timeData.NIGHT || 0 },
    { period: '새벽', timeRange: '00~6시', count: 0 }, // API에 없으므로 임시로 0
  ];
  const maxCount = Math.max(...rawData.map((item) => item.count));
  const data = rawData.map((item) => ({
    ...item,
    isMax: maxCount > 0 && item.count === maxCount,
  }));

  // 디버깅용 로그
  console.log('TimeChart data:', data);
  console.log('MaxCount:', maxCount);
  return (
    <div className="w-full">
      <div className="h-[100px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 17.5, left: 17.5, bottom: 18 }}>
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
      <TimeLabels data={data} />
    </div>
  );
}
