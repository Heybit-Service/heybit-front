'use client';

import { Weekdays } from './weekdays';
import { Grid } from './grid';
import type { CalendarData, CalendarTransaction } from './types';

interface Props {
  currentDate: Date;
  data: CalendarData;
  onDateClick?: (date: Date, dayData?: CalendarTransaction) => void;
}

export function ReportCalendar({ currentDate, data, onDateClick }: Props) {
  return (
    <div className="w-full px-[6.5px]">
      <div className="w-full bg-white flex flex-col gap-3">
        <Weekdays />
        <Grid date={currentDate} data={data} onDateClick={onDateClick} />
      </div>
    </div>
  );
}
