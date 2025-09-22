'use client';

import { Cell } from './cell';
import type { CalendarData } from './types';

interface Props {
  date: Date;
  data?: CalendarData;
}

export function Grid({ date, data = {} }: Props) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startOffset = (firstDay.getDay() + 6) % 7;

  const formatDateKey = (day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const cells = [];

  // 빈 셀들
  for (let i = 0; i < startOffset; i++) {
    cells.push(<Cell key={`empty-${i}`} date={0} />);
  }

  // 날짜 셀들
  for (let d = 1; d <= lastDay.getDate(); d++) {
    const dateKey = formatDateKey(d);
    const dayTransactions = data[dateKey];

    cells.push(<Cell key={d} date={d} transactions={dayTransactions} />);
  }

  return <div className="grid grid-cols-7 w-full">{cells}</div>;
}
