"use server";

import { cookies } from "next/headers";

export async function createBooking(_: unknown, formData: FormData) {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const payload = {
    technicianServiceId: formData.get("technicianServiceId"),
    bookingDate: formData.get("bookingDate"),
    scheduledStart: formData.get("scheduledStart"),
    scheduledEnd: formData.get("scheduledEnd"),
    serviceAddress: formData.get("serviceAddress"),
    latitude: Number(formData.get("latitude")),
    longitude: Number(formData.get("longitude")),
    notes: formData.get("notes"),
  };

  const res = await fetch(
    `${process.env.BACKEND_API_URL}/api/booking`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    }
  );

  return res.json();
}