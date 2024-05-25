import React, { ChangeEvent } from "react";

interface InputFieldProps {
  type: string;
  title: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, title, name, placeholder, value, onChange, className }) => {
  return (
    <div className={`flex flex-col justify-center text-center gap-4   ${className}`}>
      <label className="font-bold">{title}</label>
      <input className="bg-transparent border border-stone-400 text-stone-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-4 py-2" type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;