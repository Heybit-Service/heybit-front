import { Duration } from '@/data/type/timer';

export const formatDuration = (duration: Duration) => {
  const parts = [];
  if (duration.days > 0) parts.push(`${duration.days}일`);
  if (duration.hours > 0) parts.push(`${duration.hours}시간`);
  if (duration.minutes > 0) parts.push(`${duration.minutes}분`);
  return parts.length > 0 ? parts.join(' ') : '0분';
};
