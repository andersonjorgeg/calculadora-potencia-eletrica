import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  step?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  step,
}) => {



  return (
    <div className="grid grid-cols-12">
      <label htmlFor={label} className="md:col-span-4 col-span-12 text-cor1 mb-2">
        {label}:
      </label>
      <input className="rounded-md p-1 md:col-span-8 col-span-12"
        type={type}
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      ></input>

    </div>
  )
};

export default InputField;
