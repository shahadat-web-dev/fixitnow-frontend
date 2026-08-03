/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import Cookies from "js-cookie";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// প্রতিটি রিকোয়েস্টে টোকেন অ্যাটাচ করা হচ্ছে
apiClient.interceptors.request.use((config : any) => {
  const token = Cookies.get("fixitnow_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 401 এলে অটো লগআউট
apiClient.interceptors.response.use(
  (response : any) => response,
  (error : any) => {
    if (error.response?.status === 401) {
      Cookies.remove("fixitnow_token");
      if (typeof window !== "undefined") {
        window.location.href = "/auth/login";
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;