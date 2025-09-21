import type { Counts } from '@/data/api/report';

interface Props {
  counts: Counts;
}

const getPrimaryDay = (weekdayData: Counts['byWeekday']): string => {
  const dayLabels = {
    MONDAY: '월요일',
    TUESDAY: '화요일',
    WEDNESDAY: '수요일',
    THURSDAY: '목요일',
    FRIDAY: '금요일',
    SATURDAY: '토요일',
    SUNDAY: '일요일',
  };

  const maxDay = Object.entries(weekdayData).reduce(
    (max, [day, count]) => (count > max.count ? { day, count } : max),
    { day: 'MONDAY', count: 0 },
  );

  return dayLabels[maxDay.day as keyof typeof dayLabels] || '월요일';
};

const getPrimaryTime = (timeData: Counts['byTimeZone']): string => {
  const timeLabels = {
    MORNING: '오전',
    LUNCH: '점심',
    AFTERNOON: '오후',
    EVENING: '저녁',
    NIGHT: '밤',
  };

  const maxTime = Object.entries(timeData).reduce(
    (max, [time, count]) => (count > max.count ? { time, count } : max),
    { time: 'MORNING', count: 0 },
  );

  return timeLabels[maxTime.time as keyof typeof timeLabels] || '오전';
};

export function Summary({ counts }: Props) {
  const primaryDay = getPrimaryDay(counts.byWeekday);
  const primaryTime = getPrimaryTime(counts.byTimeZone);
  return (
    <div className="mb-6">
      <p className="text-gray-700 text-sm leading-relaxed">
        <span className="font-medium text-gray-900">{primaryDay}</span>과{' '}
        <span className="font-medium text-gray-900">{primaryTime}</span> 시간에 타이머를 주로
        등록했어요
      </p>
    </div>
  );
}
