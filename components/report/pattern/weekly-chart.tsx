import type { Counts } from '@/data/api/report';

interface Props {
  weekdayData: Counts['byWeekday'];
}

export function WeeklyChart({ weekdayData }: Props) {
  // API 데이터를 차트용 배열로 변환
  const data = [
    { day: '월', count: weekdayData.MONDAY },
    { day: '화', count: weekdayData.TUESDAY },
    { day: '수', count: weekdayData.WEDNESDAY },
    { day: '목', count: weekdayData.THURSDAY },
    { day: '금', count: weekdayData.FRIDAY },
    { day: '토', count: weekdayData.SATURDAY },
    { day: '일', count: weekdayData.SUNDAY },
  ];
  const maxCount = Math.max(...data.map((item) => item.count));
  const maxIndex = data.findIndex((item) => item.count === maxCount);

  // 차트 크기 설정 (Tailwind 대신 직접 값 사용)
  const chartHeight = 80;
  const chartWidth = 280;
  const horizontalPadding = 40;
  const verticalPadding = 30;
  const totalWidth = chartWidth + horizontalPadding * 2;
  const totalHeight = chartHeight + verticalPadding * 2;

  const safeMaxCount = maxCount > 0 ? maxCount : 1;

  const points = data
    .map((item, index) => {
      // Calculate x position to align with label centers
      const segmentWidth = chartWidth / data.length;
      const x = horizontalPadding + segmentWidth * index + segmentWidth / 2;
      const y = verticalPadding + chartHeight - (item.count / safeMaxCount) * chartHeight;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div>
      <div className="relative" style={{ height: totalHeight }}>
        <svg
          width={totalWidth}
          height={totalHeight}
          className="mx-auto"
          viewBox={`0 0 ${totalWidth} ${totalHeight}`}
        >
          <polyline fill="none" stroke="#ef4444" strokeWidth="2" points={points} />
          {data.map((item, index) => {
            if (index !== maxIndex) return null;
            const segmentWidth = chartWidth / data.length;
            const x = horizontalPadding + segmentWidth * index + segmentWidth / 2;
            const y = verticalPadding + chartHeight - (item.count / safeMaxCount) * chartHeight;
            return (
              <g key={item.day}>
                <circle cx={x} cy={y} r="5" fill="#dc2626" />
                <text x={x} y={y - 12} textAnchor="middle" className="text-xs fill-gray-600">
                  {item.count}회
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div
        className="flex text-sm text-gray-600 mt-2"
        style={{
          paddingLeft: horizontalPadding,
          paddingRight: horizontalPadding,
          width: totalWidth,
          margin: '0 auto',
        }}
      >
        {data.map((item) => (
          <div key={item.day} className="flex-1 text-center">
            {item.day}
          </div>
        ))}
      </div>
    </div>
  );
}
