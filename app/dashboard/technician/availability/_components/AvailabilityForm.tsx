"use client";

import { useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { updateAvailability } from "../_actions/updateAvailability";

type Props = {
  currentStatus: string;
};

export default function AvailabilityForm({
  currentStatus,
}: Props) {
  const router = useRouter();

  const [pending, startTransition] = useTransition();

  return (
    <form
      action={(formData) => {
        startTransition(async () => {
          const res = await updateAvailability(formData);

          if (res.success) {
            toast.success(res.message);
            router.refresh();
          } else {
            toast.error(res.message);
          }
        });
      }}
      className="space-y-5"
    >
      <div>
        <label className="font-medium block mb-2">
          Availability Status
        </label>

        <select
          name="availabilityStatus"
          defaultValue={currentStatus}
          className="w-full border rounded-md p-2"
        >
          <option value="ONLINE">ONLINE</option>
          <option value="OFFLINE">OFFLINE</option>
          <option value="BUSY">BUSY</option>
        </select>
      </div>

      <Button
        type="submit"
        disabled={pending}
      >
        {pending ? "Updating..." : "Update Status"}
      </Button>
    </form>
  );
}