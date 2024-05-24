"use client";

import Form from "./molecules/Form";
import { loginMasterAccount } from "@/lib/actions/masterAccount.actions";

const Test = () => {
  const handleSubmit = async (data: { [key: string]: any }) => {
    try {
      const response = await loginMasterAccount(data);
      console.log("Login successful:", response);
    } catch (error) {
      console.error("Erro ao fazer login na conta master:", error);
    }
  };

  const fields = [
    {
      type: "email",
      name: "email",
      placeholder: "Enter your email",
      label: "Email:",
    },
    {
      type: "password",
      name: "password",
      placeholder: "Enter your password",
      label: "Password:",
    },
    {
      type: "text",
      name: "captchaReply",
      placeholder: "Enter your Captcha Reply",
      label: "Captcha Reply:",
    },
  ];

  return (
    <div className="p-4">
      <Form fields={fields} onSubmit={handleSubmit} />
    </div>
  );
};

export default Test;
