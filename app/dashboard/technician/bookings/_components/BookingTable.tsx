/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";

export default function BookingTable({
  bookings,
}: {
  bookings: any[];
}) {
  return (
    <div className="rounded-xl border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>

            <TableHead>Service</TableHead>

            <TableHead>Date</TableHead>

            <TableHead>Amount</TableHead>

            <TableHead>Status</TableHead>

            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>
                <div>
                  <h3 className="font-semibold">
                    {booking.customer.name}
                  </h3>

                  <p className="text-xs text-muted-foreground">
                    {booking.customer.phone}
                  </p>
                </div>
              </TableCell>

              <TableCell>
                {booking.technicianService.service.name}
              </TableCell>

              <TableCell>
                {new Date(
                  booking.bookingDate
                ).toLocaleDateString()}
              </TableCell>

              <TableCell>
                ৳{booking.totalAmount}
              </TableCell>

              <TableCell>
                <StatusBadge
                  status={booking.status}
                />
              </TableCell>

              <TableCell>
                <ActionButtons
                  bookingId={booking.id}
                  status={booking.status}
                />
              </TableCell>
            </TableRow>
          ))}

          {bookings.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={6}
                className="text-center py-10"
              >
                No Bookings Found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}