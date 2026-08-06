/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { getAllBookings } from "@/service/Admin";

const BookingsPage = () => {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    async function loadBookings() {
      const res = await getAllBookings();

      if (res.success) {
        setBookings(res.data);
      }
    }

    loadBookings();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        All Bookings
      </h2>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="p-3 text-left">
                Booking No
              </th>
              <th className="p-3 text-left">
                Booking Date
              </th>
              <th className="p-3 text-left">
                Schedule
              </th>
              <th className="p-3 text-left">
                Amount
              </th>
              <th className="p-3 text-left">
                Status
              </th>
              <th className="p-3 text-left">
                Created At
              </th>
              <th className="p-3 text-left">
                Updated At
              </th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t hover:bg-muted/50"
              >
                <td className="p-3 font-medium">
                  {booking.bookingNumber}
                </td>

                <td className="p-3">
                  {new Date(
                    booking.bookingDate
                  ).toLocaleDateString()}
                </td>

                <td className="p-3">
                  <div>
                    <p>
                      {new Date(
                        booking.scheduledStart
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>

                    <p className="text-muted-foreground text-sm">
                      {new Date(
                        booking.scheduledEnd
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </td>

                <td className="p-3 font-semibold">
                  ৳ {booking.totalAmount}
                </td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      booking.status === "COMPLETED"
                        ? "bg-green-600"
                        : booking.status ===
                          "REQUESTED"
                        ? "bg-yellow-500"
                        : booking.status ===
                          "ACCEPTED"
                        ? "bg-blue-600"
                        : booking.status ===
                          "CANCELLED"
                        ? "bg-red-600"
                        : booking.status ===
                          "PAID"
                        ? "bg-purple-600"
                        : "bg-gray-600"
                    }`}
                  >
                    {booking.status}
                  </span>
                </td>

                <td className="p-3">
                  {new Date(
                    booking.createdAt
                  ).toLocaleString()}
                </td>

                <td className="p-3">
                  {new Date(
                    booking.updatedAt
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {bookings.length === 0 && (
          <div className="py-10 text-center text-muted-foreground">
            No bookings found.
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingsPage;