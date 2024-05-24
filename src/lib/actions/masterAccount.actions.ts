import eokapi from "../../utils/eokapi";
import { API_ENDPOINTS } from "@/constants";
import { MasterAccountRequests } from "../models/masterAccount.models";


export async function createMasterAccount(data: MasterAccountRequests) {
  try {
    const response = await eokapi.post(API_ENDPOINTS.MASTER_ACCOUNTS.BASE, {
      email: data.email,
      password: data.password,
      captchaReply: data.captchaReply,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao criar a conta master:", error);
    throw error;
  }
}

export async function loginMasterAccount(data: MasterAccountRequests) {
  try {
    const response = await eokapi.post(API_ENDPOINTS.MASTER_ACCOUNTS.LOGIN, {
      email: data.email,
      password: data.password,
      captchaReply: data.captchaReply,
    });
    const responseData = response.data;
    sessionStorage.setItem('token', responseData.token);
    return { email: responseData.email };
  } catch (error) {
    console.error("Erro ao fazer login na conta master:", error);
    throw error;
  }
}