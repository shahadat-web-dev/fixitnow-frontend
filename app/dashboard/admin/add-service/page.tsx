"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AddServices = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    categoryId: "",
    pricingType: "",
    price: "",
    duration: "",
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
        "/api/admin/services",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            price: Number(formData.price),
            duration: Number(formData.duration),
          }),
        }
      );


      const data = await res.json();


      if (data.success) {
        toast.success(
          "Service created successfully"
        );

        setFormData({
          name: "",
          description: "",
          categoryId: "",
          pricingType: "",
          price: "",
          duration: "",
        });

        router.push(
          "/dashboard/admin/services"
        );

        router.refresh();

      } else {
        toast.error(data.message);
      }

    } catch {
      toast.error(
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center p-6">

      <div className="w-full max-w-xl">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Add Service
        </h2>


        <form
          onSubmit={handleSubmit}
          className="space-y-5 border rounded-xl p-6 shadow-sm"
        >

          <div>
            <label className="text-sm font-medium">
              Service Name
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
              Description
            </label>

            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Security camera installation service"
              required
            />
          </div>


          <div>
            <label className="text-sm font-medium">
              Category ID
            </label>

            <Input
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              placeholder="Enter category id"
              required
            />
          </div>


          <div>
            <label className="text-sm font-medium">
              Pricing Type
            </label>

            <Input
              name="pricingType"
              value={formData.pricingType}
              onChange={handleChange}
              placeholder="FIXED / HOURLY"
              required
            />
          </div>


          <div>
            <label className="text-sm font-medium">
              Price
            </label>

            <Input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="1200"
              required
            />
          </div>


          <div>
            <label className="text-sm font-medium">
              Duration (Minutes)
            </label>

            <Input
              type="number"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="90"
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
              : "Create Service"}
          </Button>


        </form>

      </div>

    </div>
  );
};

export default AddServices;