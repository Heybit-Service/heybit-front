'use client';

import { FC, PropsWithChildren } from 'react';
import { useAtom } from 'jotai';
import { FixedHeader } from './styles';
import { CalendarNavigator } from '@/components/report/calendar-navigator';
import { currentDateAtom } from './store';

const ReportLayout: FC<PropsWithChildren> = ({ children }) => {
  const [currentDate, setCurrentDate] = useAtom(currentDateAtom);

  const handleMonthChange = (direction: number) => {
    setCurrentDate((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  return (
    <>
      <FixedHeader>
        <CalendarNavigator
          currentDate={currentDate}
          onPrevMonth={() => handleMonthChange(-1)}
          onNextMonth={() => handleMonthChange(1)}
        />
      </FixedHeader>
      {children}
    </>
  );
};

export default ReportLayout;
