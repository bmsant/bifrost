import React, { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  // Aqui você pode adicionar outras propriedades personalizadas, se necessário
}

const InputField: React.FC<InputFieldProps> = (props) => (
  <input
    className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
    {...props}
  />
);

export default InputField;
