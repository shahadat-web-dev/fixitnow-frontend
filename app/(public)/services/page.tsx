/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMemo, useState } from "react";
import { Search, Frown } from "lucide-react";
import { useServices } from "@/hooks/useServices";
import FilterSidebar from "./FilterSidebar";
import ServiceGridSkeleton from "./ServiceGridSkeleton";
import ServiceCard from "./ServiceCard";
// import ServiceCard from "@/components/services/ServiceCard";
// import FilterSidebar from "@/components/services/FilterSidebar";
// import ServiceGridSkeleton from "@/components/services/ServiceGridSkeleton";

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "rating", label: "Highest Rated" },
  { value: "price_low", label: "Price: Low to High" },
  { value: "price_high", label: "Price: High to Low" },
];

export default function ServicesPage() {
  const { data: services = [], isLoading, isError } = useServices();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string | undefined>();
  const [minRating, setMinRating] = useState<number | undefined>();
  const [sort, setSort] = useState("popular");

 // ঠিক করা ভার্সন
const categories = useMemo(() => {
  const unique = Array.from(
    new Set(services.map((s : any) => s.service.category))
  ) as string[];
  return unique.map((name) => ({ id: name, name }));
}, [services]);

  const filteredServices = useMemo(() => {
    let result = [...services];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (s) =>
          s.service.name.toLowerCase().includes(q) ||
          s.technician.name.toLowerCase().includes(q)
      );
    }

    if (category) {
      result = result.filter((s) => s.service.category === category);
    }

    if (minRating) {
      result = result.filter((s) => parseFloat(s.technician.averageRating) >= minRating);
    }

    if (sort === "price_low") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === "price_high") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    } else if (sort === "rating") {
      result.sort(
        (a, b) => parseFloat(b.technician.averageRating) - parseFloat(a.technician.averageRating)
      );
    }

    return result;
  }, [services, search, category, minRating, sort]);

  return (
    <div className="bg-[#F7F8FA]">
      {/* Page header */}
      <div className="bg-[#101720] py-10">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">Browse Services</h1>
          <p className="mt-2 text-sm text-[#9AA4B2]">
            Find verified technicians for any home service need
          </p>

          <div className="mt-6 flex max-w-xl gap-2">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7C8798]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search services or technicians..."
                className="w-full rounded-lg border-0 bg-white py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5A623]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-6 lg:flex-row">
          <FilterSidebar
            categories={categories}
            selectedCategory={category}
            onCategoryChange={setCategory}
            minRating={minRating}
            onMinRatingChange={setMinRating}
            onReset={() => {
              setSearch("");
              setCategory(undefined);
              setMinRating(undefined);
            }}
          />

          <div className="flex-1">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-[#7C8798]">
                <span className="font-semibold text-[#101720]">{filteredServices.length}</span>{" "}
                services found
              </p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-[#101720] focus:border-[#F5A623] focus:outline-none"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {isLoading && <ServiceGridSkeleton />}

            {isError && (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white py-20 text-center">
                <Frown className="h-10 w-10 text-[#7C8798]" />
                <p className="mt-3 text-sm font-medium text-[#101720]">
                  Failed to load services
                </p>
                <p className="mt-1 text-xs text-[#7C8798]">Please try again in a moment</p>
              </div>
            )}

            {!isLoading && !isError && filteredServices.length === 0 && (
              <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white py-20 text-center">
                <Search className="h-10 w-10 text-[#7C8798]" />
                <p className="mt-3 text-sm font-medium text-[#101720]">No services found</p>
                <p className="mt-1 text-xs text-[#7C8798]">Try adjusting your filters</p>
              </div>
            )}

            {!isLoading && !isError && filteredServices.length > 0 && (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}