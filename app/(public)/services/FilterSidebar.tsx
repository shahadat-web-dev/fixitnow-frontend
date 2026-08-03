"use client";

import { SlidersHorizontal, X } from "lucide-react";

interface Props {
  categories: { id: string; name: string }[];
  selectedCategory?: string;
  onCategoryChange: (category: string | undefined) => void;
  minRating?: number;
  onMinRatingChange: (rating: number | undefined) => void;
  onReset: () => void;
}

export default function FilterSidebar({
  categories,
  selectedCategory,
  onCategoryChange,
  minRating,
  onMinRatingChange,
  onReset,
}: Props) {
  return (
    <aside className="w-full shrink-0 rounded-xl border border-slate-100 bg-white p-5 lg:w-64">
      <div className="flex items-center justify-between">
        <h3 className="flex items-center gap-2 text-sm font-bold text-[#101720]">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </h3>
        <button
          onClick={onReset}
          className="flex items-center gap-1 text-xs text-[#7C8798] hover:text-[#F5A623]"
        >
          <X className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>

      <div className="mt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#7C8798]">
          Category
        </p>
        <div className="space-y-2">
          <label className="flex cursor-pointer items-center gap-2 text-sm text-[#101720]">
            <input
              type="radio"
              name="category"
              checked={!selectedCategory}
              onChange={() => onCategoryChange(undefined)}
              style={{ accentColor: "#F5A623" }}
            />
            All Services
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex cursor-pointer items-center gap-2 text-sm text-[#101720]">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => onCategoryChange(cat.id)}
                style={{ accentColor: "#F5A623" }}
              />
              {cat.name}
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#7C8798]">
          Minimum Rating
        </p>
        <div className="flex gap-2">
          {[4.5, 4, 3.5].map((r) => (
            <button
              key={r}
              onClick={() => onMinRatingChange(minRating === r ? undefined : r)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                minRating === r
                  ? "border-[#F5A623] bg-[#F5A623] text-[#101720]"
                  : "border-slate-200 text-[#7C8798] hover:border-[#F5A623]"
              }`}
            >
              {r}+ ⭐
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}