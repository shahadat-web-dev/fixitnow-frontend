"use server";

import { cookies } from "next/headers";

export const getTechnicianBookings = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/technician/bookings`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch technician bookings:", error);

    return {
      success: false,
      message: "Failed to fetch technician bookings",
      data: [],
    };
  }
};