import { useState } from 'react';
import { Column } from './column';
import './styles.css';

const selections = {
  day: Array.from({ length: 31 }, (_, i) => i),
  hour: Array.from({ length: 24 }, (_, i) => i),
  minute: Array.from({ length: 60 }, (_, i) => i),
};

export interface Duration {
  day: number;
  hour: number;
  minute: number;
}
interface Props {
  onChanged: (duration: Duration) => void;
}

const DurationPicker = ({ onChanged }: Props) => {
  const [value, setValue] = useState<Duration>({ day: 0, hour: 0, minute: 0 });

  const handleChange = (unit: keyof Duration, newValue: string | number) => {
    const numericValue = Number(newValue);
    if (isNaN(numericValue)) return;
    setValue((prevValue) => {
      const updatedValue = { ...prevValue, [unit]: numericValue };
      onChanged(updatedValue);
      return updatedValue;
    });
  };

  return (
    <div className="w-full px-18 flex flex-col gap-[14px]">
      <div className="w-full flex justify-between">
        <Column
          options={selections.day}
          value={value.day}
          onChange={(value) => handleChange('day', value)}
        />
        <Column
          options={selections.hour}
          value={value.hour}
          onChange={(value) => handleChange('hour', value)}
        />
        <Column
          options={selections.minute}
          value={value.minute}
          onChange={(value) => handleChange('minute', value)}
        />
      </div>
      <div className="w-full flex justify-between font-semibold text-base text-[#878787] leading-[150%]">
        <span className="w-[62px] text-center">일</span>
        <span className="w-[62px] text-center">시간</span>
        <span className="w-[62px] text-center">분</span>
      </div>
    </div>
  );
};

export default DurationPicker;
