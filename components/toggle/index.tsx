import React, { useState } from 'react';
import { ToggleCircle, ToggleContainer } from './styles';

interface Props {
  initialValue?: boolean;
  onChanged: (value: boolean) => void;
}

const Toggle = ({ onChanged, initialValue = false }: Props) => {
  const [value, setValue] = useState(initialValue);

  const handleToggle = () => {
    const newState = !value;
    setValue(newState);
    onChanged(newState);
  };

  return (
    <ToggleContainer value={value} onClick={handleToggle} aria-pressed={value}>
      <ToggleCircle value={value} />
    </ToggleContainer>
  );
};

export default Toggle;
