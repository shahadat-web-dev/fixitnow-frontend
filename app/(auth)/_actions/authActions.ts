"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";

// ১. রিটার্ন ও স্টেটের জন্য নির্দিষ্ট Type তৈরি করা হলো
export type ActionResponse = {
  success: boolean;
  statusCode?: number;
  message?: string;
  data?: {
    accessToken?: string;
    refreshToken?: string;
    [key: string]: unknown;
  };
} | null;

// ==================== LOGIN ACTION ====================
export const loginAction = async (
  previousState: ActionResponse,
  formData: FormData
): Promise<ActionResponse> => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const payload = { email, password };

  let result: ActionResponse = null;
  let targetPath = "";

  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    result = await res.json();

    if (result?.success && result.data?.accessToken) {
      const cookieStore = await cookies();

      cookieStore.set("accessToken", result.data.accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
      });

      if (result.data.refreshToken) {
        cookieStore.set("refreshToken", result.data.refreshToken, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7,
          sameSite: "lax",
        });
      }

      const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;

      // রিডাইরেক্ট পাথ নির্ধারণ
      if (decodedToken?.role === "CUSTOMER") {
        targetPath = "/dashboard";
      } else if (decodedToken?.role === "TECHNICIAN") {
        targetPath = "/technician-dashboard";
      } else if (decodedToken?.role === "ADMIN") {
        targetPath = "/admin-dashboard";
      }
    }
  } catch (error) {
    console.error("Login Error:", error);
    return {
      success: false,
      message: "Something went wrong during login!",
    };
  }

  // try-catch এর বাইরে redirect কল করা আবশ্যক
  if (targetPath) {
    redirect(targetPath);
  }

  return result;
};

// ==================== REGISTER ACTION ====================
export const registerAction = async (
  previousState: ActionResponse,
  formData: FormData
): Promise<ActionResponse> => {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const role = formData.get("role") as string;

  const payload = { name, phone, email, password, role };

  let result: ActionResponse = null;
  let targetPath = "";

  try {
    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    result = await res.json();

    if (result?.success && result.data?.accessToken) {
      const cookieStore = await cookies();

      cookieStore.set("accessToken", result.data.accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24,
        sameSite: "lax",
      });

      if (result.data.refreshToken) {
        cookieStore.set("refreshToken", result.data.refreshToken, {
          httpOnly: true,
          maxAge: 60 * 60 * 24 * 7,
          sameSite: "lax",
        });
      }

      const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;

      if (decodedToken?.role === "CUSTOMER") {
        targetPath = "/dashboard";
      } else if (decodedToken?.role === "TECHNICIAN") {
        targetPath = "/technician-dashboard";
      } else if (decodedToken?.role === "ADMIN") {
        targetPath = "/admin-dashboard";
      }
    }
  } catch (error) {
    console.error("Register Error:", error);
    return {
      success: false,
      message: "Something went wrong during registration!",
    };
  }

  // try-catch এর বাইরে redirect কল করা হয়েছে
  if (targetPath) {
    redirect(targetPath);
  }

  return result;
};