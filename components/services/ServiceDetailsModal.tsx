/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Clock,
  MapPin,
  Star,
} from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: any;
};

export default function ServiceDetailsModal({
  open,
  onOpenChange,
  service,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">

        <div className="grid md:grid-cols-2">

          {/* Image */}

          <div className="relative h-72 md:h-full min-h-80">

            <Image
              src={service.serviceImage}
              alt={service.service.name}
              fill
              className="object-cover"
            />

          </div>

          {/* Content */}

          <div className="p-6 flex flex-col">

            <h2 className="text-3xl font-bold">
              {service.service.name}
            </h2>

            <Badge className="w-fit mt-3">
              {service.service.category}
            </Badge>

            <p className="text-muted-foreground mt-4">
              {service.service.description}
            </p>

            {/* Info */}

            <div className="grid grid-cols-2 gap-4 mt-6">

              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{service.estimatedDuration} min</span>
              </div>

              <div className="flex items-center gap-2">
                <Star
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
                <span>{service.technician.averageRating}</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{service.technician.city}</span>
              </div>

              <div>
                <span className="font-medium">
                  {service.pricingType}
                </span>
              </div>

            </div>

            {/* Technician */}

            <Card className="mt-6 p-2">

              <div className="flex items-center gap-2">

                <Image
                  src={service.technician.profileImage}
                  alt={service.technician.name}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />

                <div className="flex-1">

                  <h3 className="font-semibold flex items-center gap-2">
                    {/* <User size={10} /> */}
                    {service.technician.name}
                  </h3>

                  {/* <p className="text-sm text-muted-foreground">
                    {service.technician.city}
                  </p> */}

                  <p className="text-sm text-muted-foreground">
                    {service.technician.totalReviews} Reviews
                  </p>

                </div>

              </div>

            </Card>

            {/* Bottom */}

            <div className="mt-auto pt-8 flex items-center justify-between border-t">

              <div>

                <p className="text-sm text-muted-foreground">
                  Price
                </p>

                <h2 className="text-sm font-bold text-primary">
                  ৳{service.price}
                </h2>

              </div>

              <Link href={`/booking/${service.id}`}>

                <Button className="cursor-pointer" size="lg">
                  Book Now
                </Button>

              </Link>

            </div>

          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
}