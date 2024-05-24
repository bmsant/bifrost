"use client";
import { getCaptcha } from "@/lib/actions/captcha.actions";
import React, { useState } from "react";
import Image from "next/image";

const CaptchaButton: React.FC = () => {
  const [captchaImage, setCaptchaImage] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      const captchaResponse = await getCaptcha();
      setCaptchaImage(`data:image/png;base64,${captchaResponse.captcha}`);
    } catch (error) {
      console.error("Erro ao obter o captcha:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Get Captcha</button>
      {captchaImage && (
        <Image src={captchaImage} alt="Captcha" width={200} height={50} />
      )}
    </div>
  );
};

export default CaptchaButton;
