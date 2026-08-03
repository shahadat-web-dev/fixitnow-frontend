import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Clock } from "lucide-react";
import { Service } from "@/lib/types";

export default function ServiceCard({ service }: { service: Service }) {
  const rating = parseFloat(service.technician.averageRating);

  return (
    <Link
      href={`/technicians/${service.technician.id}`}
      className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={service.serviceImage}
          alt={service.service.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-[#101720]/90 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
          {service.service.category}
        </span>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-bold text-[#101720] line-clamp-1">
          {service.service.name}
        </h3>
        <p className="mt-1 text-xs text-[#7C8798] line-clamp-2">
          {service.service.description}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <div className="relative h-6 w-6 overflow-hidden rounded-full bg-slate-200">
            <Image
              src={service.technician.profileImage}
              alt={service.technician.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs text-[#7C8798] line-clamp-1">
            {service.technician.name}
          </span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs">
            <Star className="h-3.5 w-3.5 fill-[#F5A623] text-[#F5A623]" />
            <span className="font-semibold text-[#101720]">{rating.toFixed(1)}</span>
            <span className="text-[#7C8798]">({service.technician.totalReviews})</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#7C8798]">
            <MapPin className="h-3.5 w-3.5" />
            {service.technician.city}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
          <div>
            <span className="text-[11px] text-[#7C8798]">
              {service.pricingType === "FIXED" ? "Fixed price" : "Starting from"}
            </span>
            <p className="text-base font-bold text-[#101720]">৳{service.price}</p>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#7C8798]">
            <Clock className="h-3.5 w-3.5" />
            {service.estimatedDuration} min
          </div>
        </div>
      </div>
    </Link>
  );
}