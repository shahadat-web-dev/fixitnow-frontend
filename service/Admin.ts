export const getAllUsers = async () => {
  const res = await fetch("/api/admin/users", {
    method: "GET",
    cache: "no-store",
  });

  return res.json();
};


export const getAllCategories = async () => {
  const res = await fetch("/api/admin/categories", {
    cache: "no-store",
  });

  return res.json();
};


export const getAllBookings = async () => {
  const res = await fetch("/api/admin/bookings", {
    cache: "no-store",
  });

  return res.json();
};

export const updateUserStatus = async (
  userId: string,
  status: string
) => {
  const res = await fetch(
    `/api/admin/users/${userId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    }
  );

  return res.json();
};