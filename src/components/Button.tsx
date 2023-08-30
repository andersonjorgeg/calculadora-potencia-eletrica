import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  bgColor: string;
  hoverBgColor: string;
  colSpan: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, bgColor, hoverBgColor, colSpan }) => {
  return (
    <button
      className={`rounded-md py-2 transition duration-500 hover:text-slate-50 text-white ${colSpan} ${bgColor} ${hoverBgColor}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button;