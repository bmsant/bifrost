import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  const className =
    variant === "primary"
      ? "bg-stone-500 text-white py-2 px-4 rounded"
      : "bg-stone-700 text-white py-2 px-4 rounded";
      
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;