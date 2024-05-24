import eokapi from "../../utils/eokapi";
import { API_ENDPOINTS } from "@/constants";
import { CaptchaResponse } from "../models/captcha.models";


export async function getCaptcha(): Promise<CaptchaResponse> {
  try {
    const response = await eokapi.get<CaptchaResponse>(API_ENDPOINTS.CAPTCHA);
    const data = response.data;
    sessionStorage.setItem('token', data.token);
    return data;
  } catch (error) {
    console.error("Erro ao obter o captcha na Api Services:", error);
    throw error;
  }
}