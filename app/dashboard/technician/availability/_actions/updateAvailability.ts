"use server";

import { cookies } from "next/headers";

export async function updateAvailability(formData: FormData) {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/technician/availability`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        availabilityStatus: formData.get("availabilityStatus"),
      }),
    }
  );

  return res.json();
}