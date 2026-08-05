/* eslint-disable @typescript-eslint/no-explicit-any */
export const getBookingStats = (bookings: any[]) => {
  return {
    total: bookings.length,

    pending: bookings.filter(
      (b) => b.status === "REQUESTED"
    ).length,

    completed: bookings.filter(
      (b) => b.status === "COMPLETED"
    ).length,

    cancelled: bookings.filter(
      (b) => b.status === "CANCELLED"
    ).length,
  };
};