'use client';

import { useState } from 'react';
import { WheelPicker, WheelPickerWrapper } from '@ncdai/react-wheel-picker';

interface Duration {
  day: number;
  hour: number;
  minute: number;
}

interface Props {
  onChanged: (duration: Duration) => void;
}

const DurationPicker = ({ onChanged: onChanged }: Props) => {
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

  const handleChange = (duration: Duration) => {
    setDay(duration.day);
    setHour(duration.hour);
    setMinute(duration.minute);
    onChanged(duration);
  };

  return (
    <WheelPickerWrapper className="flex px-18 gap-7">
      <WheelPicker
        classNames={{}}
        options={dayOptions}
        value={day.toString()}
        onValueChange={(value) => handleChange({ day: Number(value), hour, minute })}
        optionItemHeight={20}
      />
      <WheelPicker
        classNames={{}}
        options={hourOptions}
        value={hour.toString()}
        onValueChange={(value) => handleChange({ day, hour: Number(value), minute })}
        optionItemHeight={20}
      />
      <WheelPicker
        classNames={{}}
        options={minuteOptions}
        value={minute.toString()}
        onValueChange={(value) => handleChange({ day, hour, minute: Number(value) })}
        optionItemHeight={20}
      />
    </WheelPickerWrapper>
  );
};

export default DurationPicker;
