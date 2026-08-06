/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function BookingForm({
  service,
}: {
  service: any;
}) {
  return (
    <div className="mx-auto max-w-3xl space-y-8">

      <div className="rounded-xl border p-6">

        <h1 className="text-3xl font-bold">
          Book Service
        </h1>

        <p className="mt-2 text-muted-foreground">
          Complete the form below.
        </p>

      </div>

      <div className="rounded-xl border p-6 space-y-6">

        <div>

          <label className="font-medium">
            Service
          </label>

          <Input
            value={service.name}
            disabled
          />

        </div>

        <div>

          <label className="font-medium">
            Price
          </label>

          <Input
            value={`৳ ${service.price}`}
            disabled
          />

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label>
              Booking Date
            </label>

            <Input
              type="date"
              name="bookingDate"
            />

          </div>

          <div>

            <label>
              Service Address
            </label>

            <Input
              name="serviceAddress"
            />

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label>
              Start Time
            </label>

            <Input
              type="datetime-local"
              name="scheduledStart"
            />

          </div>

          <div>

            <label>
              End Time
            </label>

            <Input
              type="datetime-local"
              name="scheduledEnd"
            />

          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          <Input
            name="latitude"
            placeholder="Latitude"
          />

          <Input
            name="longitude"
            placeholder="Longitude"
          />

        </div>

        <div>

          <Textarea
            name="notes"
            placeholder="Write your notes..."
          />

        </div>

        <Button className="w-full">
          Continue Payment
        </Button>

      </div>

    </div>
  );
}