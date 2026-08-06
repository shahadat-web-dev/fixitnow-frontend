/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios from "axios";
import {
  Calendar,
  Clock,
  MapPin,
  FileText,
  Navigation,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { redirect } from "next/navigation";

type Props = {
  technicianServiceId: string;
};

export default function BookingForm({
  technicianServiceId,
}: Props) {
  const [formData, setFormData] = useState({
    bookingDate: "",
    startTime: "",
    endTime: "",
    serviceAddress: "",
    latitude: "",
    longitude: "",
    notes: "",
  });

  

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    console.log("Submit clicked");

    const scheduledStart = new Date(
      `${formData.bookingDate}T${formData.startTime}:00`
    ).toISOString();

    const scheduledEnd = new Date(
      `${formData.bookingDate}T${formData.endTime}:00`
    ).toISOString();

    const payload = {
      technicianServiceId,
      bookingDate: formData.bookingDate,
      scheduledStart,
      scheduledEnd,
      serviceAddress: formData.serviceAddress,
      latitude: Number(formData.latitude),
      longitude: Number(formData.longitude),
      notes: formData.notes,
    };

  

    try {
      const res = await axios.post(
        "/api/booking",
        payload
      );

      toast.success("Bookinngs Successfully! plz wait for tecnician permission")
      redirect("/dashboar/booking")
    } catch (error: any) {
      console.log(error);
      alert("Booking Failed");
    }

  };

  return (
    <div className="min-h-screen w-full bg-slate-100 flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-4xl rounded-2xl shadow-xl border-0">
        <CardContent className="p-6 md:p-10">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">
              Book Service
            </h1>

            <p className="text-muted-foreground mt-2">
              Fill in the details below to confirm your booking.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">

              {/* Booking Date */}

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-medium">
                  <Calendar size={18} />
                  Booking Date
                </label>

                <Input
                  type="date"
                  name="bookingDate"
                  value={formData.bookingDate}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Start Time */}

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-medium">
                  <Clock size={18} />
                  Start Time
                </label>

                <Input
                  type="time"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* End Time */}

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-medium">
                  <Clock size={18} />
                  End Time
                </label>

                <Input
                  type="time"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Latitude */}

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-medium">
                  <Navigation size={18} />
                  Latitude
                </label>

                <Input
                  type="number"
                  step="any"
                  placeholder="23.7465"
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Longitude */}

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-medium">
                  <Navigation size={18} />
                  Longitude
                </label>

                <Input
                  type="number"
                  step="any"
                  placeholder="90.3760"
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            {/* Address */}

            <div className="space-y-2">
              <label className="flex items-center gap-2 font-medium">
                <MapPin size={18} />
                Service Address
              </label>

              <Input
                placeholder="House 25, Road 7, Dhanmondi, Dhaka"
                name="serviceAddress"
                value={formData.serviceAddress}
                onChange={handleChange}
                required
              />
            </div>

            {/* Notes */}

            <div className="space-y-2">
              <label className="flex items-center gap-2 font-medium">
                <FileText size={18} />
                Additional Notes
              </label>

              <Textarea
                rows={5}
                placeholder="Write any additional instructions..."
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto"
            >
              Confirm Booking
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}