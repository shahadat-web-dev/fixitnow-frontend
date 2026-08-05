/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import StatusBadge from "./StatusBadge";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type BookingTableProps = {
  bookings: any[];
};

export default function BookingTable({
  bookings,
}: BookingTableProps) {
  return (
    <div className="rounded-xl border bg-background shadow-sm overflow-x-auto">
      <Table>
        <TableCaption>
          Your Booking History
        </TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>Booking No</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Technician</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Schedule</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">
                {booking.bookingNumber}
              </TableCell>

              <TableCell>
                <div>
                  <p className="font-semibold">
                    {booking.service.name}
                  </p>

                  <p className="text-xs text-muted-foreground">
                    {booking.service.pricingType}
                  </p>
                </div>
              </TableCell>

              <TableCell>
                <div className="flex items-center gap-3">
                  <Image
                    src={booking.technician.profileImage}
                    alt={booking.technician.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <p className="font-medium">
                      {booking.technician.name}
                    </p>

                    <p className="text-xs text-muted-foreground">
                      ⭐ {booking.technician.rating}
                    </p>
                  </div>
                </div>
              </TableCell>

              <TableCell>
                {new Date(
                  booking.bookingDate
                ).toLocaleDateString()}
              </TableCell>

              <TableCell>
                <div className="text-sm">
                  <p>
                    {new Date(
                      booking.scheduledStart
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>

                  <p className="text-muted-foreground">
                    {new Date(
                      booking.scheduledEnd
                    ).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </TableCell>

              <TableCell>
                ৳ {booking.totalAmount}
              </TableCell>

              <TableCell>
                <StatusBadge
                  status={booking.status}
                />
              </TableCell>

              <TableCell className="text-right">
                {booking.status === "ACCEPTED" ? (
                  <Button size="sm">
                    Pay Now
                  </Button>
                ) : booking.status ===
                  "COMPLETED" ? (
                  <Button
                    size="sm"
                    variant="secondary"
                  >
                    Review
                  </Button>
                ) : booking.status ===
                  "REQUESTED" ? (
                  <Button
                    size="sm"
                    variant="destructive"
                  >
                    Cancel
                  </Button>
                ) : (
                  <Button
                    size="icon"
                    variant="outline"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}