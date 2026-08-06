/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { getAllCategories } from "@/service/Admin";

const CategoriesPage = () => {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const res = await getAllCategories();

      if (res.success) {
        setCategories(res.data);
      }
    }

    loadCategories();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">
        All Categories
      </h2>

      <div className="overflow-x-auto rounded-lg border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="p-3 text-left">Icon</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Created At</th>
              <th className="p-3 text-left">Updated At</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category) => (
              <tr
                key={category.id}
                className="border-t hover:bg-muted/50"
              >
                <td className="p-3">
                  <Image
                    src={`/categories/${category.icon}`}
                    alt={category.name}
                    width={50}
                    height={50}
                    className="rounded-md border object-cover"
                  />
                </td>

                <td className="p-3 font-medium">
                  {category.name}
                </td>

                <td className="p-3 text-muted-foreground">
                  {category.description}
                </td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      category.status === "ACTIVE"
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    {category.status}
                  </span>
                </td>

                <td className="p-3">
                  {new Date(
                    category.createdAt
                  ).toLocaleString()}
                </td>

                <td className="p-3">
                  {new Date(
                    category.updatedAt
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {categories.length === 0 && (
          <div className="py-10 text-center text-muted-foreground">
            No categories found.
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;