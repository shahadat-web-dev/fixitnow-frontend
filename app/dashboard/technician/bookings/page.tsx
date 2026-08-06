/* eslint-disable @typescript-eslint/no-explicit-any */

import { getTechnicianBookings } from "@/components/services/getTechnicianBookings";
import BookingStats from "./_components/BookingStats";
import BookingTable from "./_components/BookingTable";

export default async function TechnicianBookingsPage() {
  const result = await getTechnicianBookings();

  const bookings = result.data ?? [];

  const total = bookings.length;

  const requested = bookings.filter(
    (b: any) => b.status === "REQUESTED"
  ).length;

  const accepted = bookings.filter(
    (b: any) => b.status === "ACCEPTED"
  ).length;

  const completed = bookings.filter(
    (b: any) => b.status === "COMPLETED"
  ).length;

  return (
    <div className="space-y-8">
      <BookingStats
        total={total}
        requested={requested}
        accepted={accepted}
        completed={completed}
      />

      <BookingTable bookings={bookings} />
    </div>
  );
}