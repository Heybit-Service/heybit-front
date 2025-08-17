'use client';

import { useState } from 'react';
import Picker from 'react-mobile-picker';
import './styles.css';

interface Duration {
  day: number;
  hour: number;
  minute: number;
}

interface Props {
  onChanged: (duration: Duration) => void;
}

type PickerValue = {
  day: string;
  hour: string;
  minute: string;
};

const selections = {
  day: Array.from({ length: 30 }, (_, i) => i.toString()),
  hour: Array.from({ length: 24 }, (_, i) => i.toString()),
  minute: Array.from({ length: 60 }, (_, i) => i.toString()),
};

const DurationPicker = ({ onChanged }: Props) => {
  const [pickerValue, setPickerValue] = useState<PickerValue>({
    day: '0',
    hour: '0',
    minute: '0',
  });

  const handleChange = (value: PickerValue) => {
    const numericDuration: Duration = {
      day: Number(value.day),
      hour: Number(value.hour),
      minute: Number(value.minute),
    };
    setPickerValue(value);
    onChanged(numericDuration);
  };

  return (
    <div className="w-full px-13">
      <Picker
        value={pickerValue}
        onChange={handleChange}
        wheelMode="natural"
        height={220}
        itemHeight={60}
        style={{
          display: 'flex',
          gap: '30px',
        }}
      >
        {Object.keys(selections).map((name) => (
          <Picker.Column key={name} name={name}>
            {selections[name as keyof typeof selections].map((option) => (
              <Picker.Item
                key={option}
                value={option}
                style={{
                  width: '62px',
                  borderBottom: '1.8px solid #EAEAEA',
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
              >
                {({ selected }) => (
                  <div
                    className="font-medium text-[28px] leading-[150%] text-center"
                    style={{
                      color: selected ? '#202020' : '#0000004D',
                    }}
                  >
                    {option}
                  </div>
                )}
              </Picker.Item>
            ))}
          </Picker.Column>
        ))}
      </Picker>
      <div className="w-full flex gap-[30px] font-['Pretendard'] font-semibold text-base text-[#878787] leading-[150%]">
        <span className="w-full text-center">일</span>
        <span className="w-full text-center">시간</span>
        <span className="w-full text-center">분</span>
      </div>
    </div>
  );
};

export default DurationPicker;
