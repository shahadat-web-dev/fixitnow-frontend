/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

type Props = {
  payments: any[];
};

export default function PaymentTable({ payments }: Props) {
  return (
    <div className="rounded-xl border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Booking</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Provider</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Paid At</TableHead>
            <TableHead>Transaction</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>
                {payment.booking.bookingNumber}
              </TableCell>

              <TableCell>
                ৳{payment.amount}
              </TableCell>

              <TableCell>
                {payment.paymentMethod}
              </TableCell>

              <TableCell>
                {payment.paymentProvider}
              </TableCell>

              <TableCell>
                <Badge
                  variant={
                    payment.status === "COMPLETED"
                      ? "default"
                      : payment.status === "PENDING"
                      ? "secondary"
                      : "destructive"
                  }
                >
                  {payment.status}
                </Badge>
              </TableCell>

              <TableCell>
                {new Date(payment.paidAt).toLocaleDateString()}
              </TableCell>

              <TableCell className="max-w-45 truncate">
                {payment.transactionId}
              </TableCell>
            </TableRow>
          ))}

          {payments.length === 0 && (
            <TableRow>
              <TableCell
                colSpan={7}
                className="text-center py-8"
              >
                No payment history found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}