export const createCheckoutSession = async (
  bookingId: string
) => {
  const res = await fetch(
    "/api/payments/checkout-session",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookingId,
      }),
    }
  );

  return res.json();
};