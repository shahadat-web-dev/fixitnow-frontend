export default function ServiceGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-xl border border-slate-100 bg-white"
        >
          {/* image placeholder */}
          <div className="skeleton h-44 w-full rounded-none" />

          <div className="space-y-3 p-4">
            {/* title */}
            <div className="skeleton h-4 w-3/4 rounded" />
            {/* description */}
            <div className="skeleton h-3 w-full rounded" />
            {/* technician row */}
            <div className="flex items-center gap-2">
              <div className="skeleton h-6 w-6 rounded-full" />
              <div className="skeleton h-3 w-1/3 rounded" />
            </div>
            {/* price row */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-3">
              <div className="skeleton h-5 w-1/4 rounded" />
              <div className="skeleton h-3 w-1/5 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}