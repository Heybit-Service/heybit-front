'use client';

import { useState } from 'react';
import { WheelPicker, WheelPickerWrapper } from '@ncdai/react-wheel-picker';

const DurationPicker = () => {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  const dayOptions = Array.from({ length: 30 }, (_, i) => ({
    label: i.toString(),
    value: i.toString(),
  }));

  const hourOptions = Array.from({ length: 24 }, (_, i) => ({
    label: i.toString(),
    value: i.toString(),
  }));

  const minuteOptions = Array.from({ length: 60 }, (_, i) => ({
    label: i.toString(),
    value: i.toString(),
  }));

  return (
    <WheelPickerWrapper className="flex px-18 gap-7">
      <WheelPicker
        classNames={{}}
        options={dayOptions}
        value={day.toString()}
        onValueChange={(value) => setDay(Number(value))}
        optionItemHeight={20}
      />
      <WheelPicker
        classNames={{}}
        options={hourOptions}
        value={hour.toString()}
        onValueChange={(value) => setHour(Number(value))}
        optionItemHeight={20}
      />
      <WheelPicker
        classNames={{}}
        options={minuteOptions}
        value={minute.toString()}
        onValueChange={(value) => setMinute(Number(value))}
        optionItemHeight={20}
      />
    </WheelPickerWrapper>
  );
};

export default DurationPicker;
