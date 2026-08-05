"use server";

import { cookies } from "next/headers";

export async function updateTechnicianProfile(
  prevState: {
    success: boolean;
    message: string;
  },
  formData: FormData
) {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const payload = {
    bio: formData.get("bio"),
    yearsOfExperience: Number(formData.get("yearsOfExperience")),
    experienceDescription: formData.get("experienceDescription"),
    availabilityStatus: formData.get("availabilityStatus"),
  };

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/technician/profile`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const result = await res.json();

    return {
      success: result.success,
      message: result.message,
    };
  } catch {
    return {
      success: false,
      message: "Profile update failed",
    };
  }
}