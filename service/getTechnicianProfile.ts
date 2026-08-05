"use server";

import { cookies } from "next/headers";

export const getTechnicianProfile = async () => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/technician/profile`,
      {
        method: "PUT", // GET এর পরিবর্তে PUT
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}), // Empty body
        cache: "no-store",
      }
    );

    const result = await res.json();

    console.log(result);

    return result;
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to fetch technician profile",
      data: null,
    };
  }
};