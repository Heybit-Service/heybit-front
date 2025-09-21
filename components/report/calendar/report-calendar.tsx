'use client';

import { Weekdays } from './weekdays';
import { Grid } from './grid';
import { CALENDAR_CONFIG } from '@/lib/calendar-config';
import type { CalendarData, CalendarTransaction } from './types';

interface Props {
  currentDate: Date;
  data: CalendarData;
  onDateClick?: (date: Date, dayData?: CalendarTransaction) => void;
}

export function ReportCalendar({ currentDate, data, onDateClick }: Props) {
  return (
    <div>
      <div
        className="rounded-lg overflow-hidden"
        style={{ backgroundColor: CALENDAR_CONFIG.colors.background.white }}
      >
        <Weekdays />
        <Grid date={currentDate} data={data} onDateClick={onDateClick} />
      </div>
    </div>
  );
}
