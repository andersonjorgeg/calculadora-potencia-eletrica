import React from 'react';
import InputField from './InputField';

interface groupInputProps {
  label1: string;
  label2: string;
  value1: string;
  value2: string;
  onChange1: React.Dispatch<React.SetStateAction<string>>;
  onChange2: React.Dispatch<React.SetStateAction<string>>;
}

const GroupInput: React.FC<groupInputProps> = ({ label1, label2, value1, value2, onChange1, onChange2 }) => {
  return (
    <div className="space-y-2">
      <InputField
        label={label1}
        value={value1}
        onChange={onChange1}
        type="number"
        step="0.1"
      />
      <InputField
        label={label2}
        value={value2}
        onChange={onChange2}
        type="number"
        step="0.1"
      />
    </div>
  )
}

export default GroupInput;
