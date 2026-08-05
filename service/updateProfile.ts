"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export type UpdateProfileResponse = {
  success: boolean;
  message?: string;
} | null;

export const updateProfileAction = async (
  previousState: UpdateProfileResponse,
  formData: FormData
): Promise<UpdateProfileResponse> => {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const address = formData.get("address") as string;
  const city = formData.get("city") as string;

  const payload = { name, phone, address, city };

  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (!result.success) {
      return { success: false, message: result.message || "Failed to update profile" };
    }

    revalidateTag("my-profile", "max");

    return { success: true, message: "Profile updated successfully" };
  } catch (error) {
    console.error("Update Profile Error:", error);
    return { success: false, message: "Something went wrong" };
  }
};