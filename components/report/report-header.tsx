'use client';

import { CalendarNavigator } from './calendar-navigator';
import { UserGreeting } from './user-greeting';

interface Props {
  userName?: string;
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export function ReportHeader({ userName, currentDate, onPrevMonth, onNextMonth }: Props) {
  return (
    <div className="bg-white">
      <CalendarNavigator
        currentDate={currentDate}
        onPrevMonth={onPrevMonth}
        onNextMonth={onNextMonth}
      />
      <UserGreeting userName={userName} />
    </div>
  );
}
