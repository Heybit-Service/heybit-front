import { Duration } from '@/data/type/timer';

export const formatDuration = (duration: Duration) => {
  const parts = [];
  if (duration.days > 0) parts.push(`${duration.days}일`);
  if (duration.hours > 0) parts.push(`${duration.hours}시간`);
  if (duration.minutes > 0) parts.push(`${duration.minutes}분`);
  return parts.length > 0 ? parts.join(' ') : '0분';
};

function formatKoreanTime(date: Date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';
  if (hours > 12) hours -= 12;
  if (hours === 0) hours = 12;
  return `${month}월 ${day}일 ${period} ${hours}:${minutes}`;
}
