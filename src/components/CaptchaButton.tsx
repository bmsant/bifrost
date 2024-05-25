"use client";
import { getCaptcha } from "@/lib/actions/captcha.actions";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./atoms/Button";

const CaptchaButton: React.FC = () => {
  const [captchaImage, setCaptchaImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (captchaImage) {
      const timer = setTimeout(() => {
        setCaptchaImage(null);
      }, 30000); // 30 seconds

      return () => clearTimeout(timer);
    }
  }, [captchaImage]);

  const handleClick = async () => {
    setLoading(true);
    try {
      const captchaResponse = await getCaptcha();

      setCaptchaImage(`data:image/png;base64,${captchaResponse.captcha}`);
    } catch (error) {
      console.error("Erro ao obter o captcha:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      {!captchaImage ? (
        <Button
          onClick={handleClick}
          className="h-16 w-32 rounded-xl bg-stone-500 flex items-center justify-center font-bold text-xs text-center text-white"
        >
          {loading ? (
            <Image
              src="/assets/spin.svg"
              alt="Loading"
              width={24}
              height={24}
              className="animate-spin"
              priority
            />
          ) : (
            "Get Captcha"
          )}
        </Button>
      ) : (
        <div
          className="relative h-16 w-32 content-center rounded-xl overflow-hidden"
          onClick={handleClick}
        >
          <Image
            src={captchaImage}
            alt="Captcha"
            height={24}
            width={24}
            className="h-16 w-32"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-50 hover:bg-stone-200 hover:backdrop-blur-sm">
            <Image
              src="/assets/spin.svg"
              alt="Loading"
              width={24}
              height={24}
              className="active:animate-spin"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CaptchaButton;