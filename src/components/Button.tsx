import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  bgColor: string;
  hoverBgColor: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, bgColor, hoverBgColor }) => {
  return (
    <button
      className={`rounded-md py-2 transition duration-500 hover:text-slate-50 text-white col-span-6 ${bgColor} ${hoverBgColor}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button;