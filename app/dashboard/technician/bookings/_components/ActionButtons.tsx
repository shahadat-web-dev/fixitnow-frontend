"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { updateBookingStatus } from "../_actions/updateBookingStatus";

export default function ActionButtons({
  bookingId,
  status,
}: {
  bookingId: string;
  status: string;
}) {
  const router = useRouter();

  async function handleUpdate(newStatus: string) {
    const res = await updateBookingStatus(bookingId, newStatus);

    if (res.success) {
      toast.success(res.message);

      router.refresh();
    } else {
      toast.error(res.message);
    }
  }

  if (status === "REQUESTED") {
    return (
      <div className="flex gap-2">
        <Button
          size="sm"
          onClick={() => handleUpdate("ACCEPTED")}
        >
          Accept
        </Button>

        <Button
          size="sm"
          variant="destructive"
          onClick={() => handleUpdate("CANCELLED")}
        >
          Reject
        </Button>
      </div>
    );
  }

  if (status === "ACCEPTED") {
    return (
      <Button
        size="sm"
        onClick={() => handleUpdate("COMPLETED")}
      >
        Complete Job
      </Button>
    );
  }

  return null;
}