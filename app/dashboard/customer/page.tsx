/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import Image from "next/image";
import {
  CalendarCheck,
  Clock,
  Wallet,
  Star,
  ArrowRight,
  PlusCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getMyBookings } from "@/app/booking/[serviceId]/_components/getServiceById";
// 👈 tomar existing action-er path bosao

const statusStyles: Record<string, string> = {
  PENDING: "bg-amber-100 text-amber-700",
  CONFIRMED: "bg-blue-100 text-blue-700",
  IN_PROGRESS: "bg-purple-100 text-purple-700",
  COMPLETED: "bg-emerald-100 text-emerald-700",
  CANCELLED: "bg-red-100 text-red-700",
};

export default async function CustomerDashboardPage() {
  const result = await getMyBookings();
  const bookings = result?.success ? result.data : [];

  const totalBookings = bookings.length;
  const completed = bookings.filter((b: any) => b.status === "COMPLETED").length;
  const upcoming = bookings.filter((b: any) =>
    ["PENDING", "CONFIRMED"].includes(b.status)
  ).length;
  const totalSpent = bookings
    .filter((b: any) => b.status === "COMPLETED")
    .reduce((sum: number, b: any) => sum + Number(b.totalAmount || 0), 0);

  const recentBookings = bookings.slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#101720]">
            Welcome back 👋
          </h1>
          <p className="mt-1 text-sm text-[#7C8798]">
            Here&apos;s what&apos;s happening with your bookings.
          </p>
        </div>

        <Link
          href="/services"
          className="inline-flex items-center gap-2 rounded-lg bg-[#F5A623] px-5 py-2.5 text-sm font-semibold text-[#101720] transition-transform hover:-translate-y-0.5"
        >
          <PlusCircle className="h-4 w-4" />
          Book a Service
        </Link>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          icon={CalendarCheck}
          label="Total Bookings"
          value={totalBookings}
        />
        <StatCard icon={Clock} label="Upcoming" value={upcoming} />
        <StatCard icon={Star} label="Completed" value={completed} />
        <StatCard
          icon={Wallet}
          label="Total Spent"
          value={`৳${totalSpent.toLocaleString()}`}
        />
      </div>

      {/* Recent bookings */}
      <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#101720]">
            Recent Bookings
          </h2>
          <Link
            href="/dashboard/customer/bookings"
            className="flex items-center gap-1 text-sm font-semibold text-[#101720] hover:text-[#F5A623]"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {recentBookings.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="mt-6 space-y-4">
            {recentBookings.map((booking: any) => (
              <BookingRow key={booking.id} booking={booking} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────── Stat Card ───────── */
function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623]/15">
        <Icon className="h-5 w-5 text-[#F5A623]" />
      </div>
      <p className="mt-4 text-2xl font-bold text-[#101720]">{value}</p>
      <p className="mt-1 text-xs text-[#7C8798]">{label}</p>
    </div>
  );
}

/* ───────── Booking Row ───────── */
function BookingRow({ booking }: { booking: any }) {
  const badgeClass =
    statusStyles[booking.status] ?? "bg-slate-100 text-slate-700";

  return (
    <Link
      href={`/dashboard/customer/bookings/${booking.id}`}
      className="flex items-center justify-between gap-4 rounded-lg border border-slate-100 p-4 transition-colors hover:bg-slate-50"
    >
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-lg bg-slate-100">
          {booking.service?.serviceImage ? (
            <Image
              src={booking.service.serviceImage}
              alt={booking.service?.name ?? "Service"}
              fill
              className="object-cover"
            />
          ) : null}
        </div>
        <div>
          <p className="text-sm font-semibold text-[#101720]">
            {booking.service?.name ?? "Service"}
          </p>
          <p className="text-xs text-[#7C8798]">
            {booking.bookingNumber} ·{" "}
            {new Date(booking.bookingDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Badge className={badgeClass}>{booking.status}</Badge>
        <span className="text-sm font-bold text-[#101720]">
          ৳{booking.totalAmount}
        </span>
      </div>
    </Link>
  );
}

/* ───────── Empty State ───────── */
function EmptyState() {
  return (
    <div className="mt-6 flex flex-col items-center justify-center rounded-lg border border-dashed border-slate-200 py-12 text-center">
      <CalendarCheck className="h-8 w-8 text-slate-300" />
      <p className="mt-3 text-sm font-medium text-[#101720]">
        No bookings yet
      </p>
      <p className="mt-1 text-xs text-[#7C8798]">
        Book your first service to see it here.
      </p>
      <Link
        href="/services"
        className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#101720] px-5 py-2 text-sm font-semibold text-white hover:bg-[#1c2735]"
      >
        Browse Services
      </Link>
    </div>
  );
}