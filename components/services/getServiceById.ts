"use server";

export const getServiceById = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/services/${id}`,
      {
        cache: "no-store",
      }
    );

    return await res.json();
  } catch (error) {
    console.log(error);

    return {
      success: false,
      data: null,
    };
  }
};