"use server";

export const getServiceById = async (id: string) => {
  console.log("Fetching Service ID:", id);
  try {
   
    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/services/${id}`,
      {
        cache: "no-store",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.log("Backend error response:", data);
      return {
        success: false,
        message: data.message || "Failed to fetch service",
        data: null,
      };
    }

    
    return {
      success: true,
      data: data.data || data, 
    };
  } catch (error) {
    console.log("Fetch Error:", error);
    return {
      success: false,
      message: "Server connection failed",
      data: null,
    };
  }
};