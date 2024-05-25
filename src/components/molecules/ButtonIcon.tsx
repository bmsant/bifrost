// ButtonIcon.tsx
import React from "react";
import Image from "next/image";
import Button from "../atoms/Button";

interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconSrc: string;
  altText: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({
  iconSrc,
  altText,
  className,
  disabled,
  ...props
}) => {
  return (
    <Button
      className={`content-center hover:scale-105 active:scale-95 ${className}`}
      disabled={disabled}
      {...props}
    >
      <Image
        src={iconSrc}
        alt={altText}
        width={48}
        height={48}
        priority
        className={`${disabled ? "opacity-50" : ""}`}
      />
    </Button>
  );
};

export default ButtonIcon;
