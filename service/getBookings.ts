"use server";

import { cookies } from "next/headers";

export const getBookings = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/booking`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
      }
    );

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch bookings:", error);

    return {
      success: false,
      message: "Failed to fetch bookings",
      data: [],
    };
  }
};