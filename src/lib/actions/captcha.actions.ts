import eokapi from "../../utils/eokapi";
import { CaptchaResponse } from "../models/captcha.models";
import { API_ENDPOINTS } from "@/constants";

export async function getCaptcha(): Promise<CaptchaResponse> {
  try {
    const { url, method } = API_ENDPOINTS.CAPTCHA;
    const response = await eokapi.request<CaptchaResponse>({ url, method });
    const data = response.data;

    sessionStorage.setItem("token", data.token);

    return data;
  } catch (error) {
    console.error("Erro ao obter o captcha na Api Services:", error);
    throw error;
  }
}