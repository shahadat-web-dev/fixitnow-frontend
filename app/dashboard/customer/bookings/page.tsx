import { getBookings } from "@/service/getBookings";
import BookingStats from "./_components/BookingStats";
import BookingTable from "./_components/BookingTable";
import { getBookingStats } from "./_utils/bookingStats";

export default async function BookingsPage() {
  const result = await getBookings();

  console.log("Booking Result:", result);

  const bookings = result?.data ?? [];

  const stats = getBookingStats(bookings);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          My Bookings
        </h1>

        <p className="text-muted-foreground">
          View and manage your service bookings.
        </p>
      </div>

      <BookingStats
        total={stats.total}
        pending={stats.pending}
        completed={stats.completed}
        cancelled={stats.cancelled}
      />

      <BookingTable bookings={bookings} />
    </div>
  );
}