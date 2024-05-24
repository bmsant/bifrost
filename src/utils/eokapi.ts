// utils/eokapi.ts

import { API_ENDPOINTS } from "@/constants";
import axios, { AxiosInstance } from "axios";

const eokapi: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

eokapi.interceptors.request.use(
  (config) => {
    if (config.url !== API_ENDPOINTS.CAPTCHA) {
      const token = sessionStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default eokapi;
