"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AddCategory = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    icon: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        "/api/admin/categories",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (data.success) {
        toast.success(
          "Category created successfully"
        );

        setFormData({
          name: "",
          icon: "",
          description: "",
        });

        router.push("/dashboard/admin/categories");
        router.refresh();
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Add Category
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 border rounded-xl p-6 shadow-sm"
        >
          <div>
            <label className="text-sm font-medium">
              Category Name
            </label>

            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="CCTV Installation"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Icon
            </label>

            <Input
              name="icon"
              value={formData.icon}
              onChange={handleChange}
              placeholder="cctv.png"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">
              Description
            </label>

            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Security camera installation"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full"
          >
            {loading
              ? "Creating..."
              : "Create Category"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddCategory;