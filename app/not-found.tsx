"use client"

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-100 px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-extrabold text-primary">404</h1>

        <h2 className="mt-4 text-3xl font-bold">
          Oops! Page Not Found
        </h2>

        <p className="mt-3 text-base-content/70">
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href={"/"}  className="cursor-pointer text-white px-3 font-bold py-2 rounded-full bg-[#007A55]" 
          >Return Home</Link>
        </div>
      </div>
    </div>
  );
}