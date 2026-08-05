/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTechnicianProfile } from "@/service/getTechnicianProfile";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default async function ServicesPage() {
  const result = await getTechnicianProfile();

  if (!result?.success) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-muted-foreground">
          No services found.
        </p>
      </div>
    );
  }

  const services = result.data.technicianServices;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          My Services
        </h1>

        <p className="text-muted-foreground">
          Manage all services you provide.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((item: any) => (
          <Card
            key={item.id}
            className="overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={item.serviceImage}
              alt={item.service.name}
              width={600}
              height={300}
              className="h-52 w-full object-cover"
            />

            <CardHeader className="pb-2">
              <CardTitle className="text-xl">
                {item.service.name}
              </CardTitle>

              <p className="text-sm text-muted-foreground">
                {item.service.description}
              </p>
            </CardHeader>

            <CardContent className="space-y-4">
              <Badge variant="secondary">
                {item.service.category.name}
              </Badge>

              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-lg">
                  ৳{item.price}
                </span>

                <span className="text-muted-foreground">
                  {item.estimatedDuration} min
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Badge
                  variant={
                    item.status === "ACTIVE"
                      ? "default"
                      : "destructive"
                  }
                >
                  {item.status}
                </Badge>

                <span className="text-xs text-muted-foreground">
                  {item.pricingType}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}