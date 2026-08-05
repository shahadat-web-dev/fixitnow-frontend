import { Card, CardContent } from "@/components/ui/card";
import {
  Package,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

type Props = {
  total: number;
  pending: number;
  completed: number;
  cancelled: number;
};

export default function BookingStats({
  total,
  pending,
  completed,
  cancelled,
}: Props) {
  const stats = [
    {
      title: "Total Bookings",
      value: total,
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
      color: "text-yellow-500",
    },
    {
      title: "Completed",
      value: completed,
      icon: CheckCircle2,
      color: "text-green-600",
    },
    {
      title: "Cancelled",
      value: cancelled,
      icon: XCircle,
      color: "text-red-600",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <Card key={item.title}>
            <CardContent className="flex items-center justify-between py-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold">
                  {item.value}
                </h2>
              </div>

              <Icon className={`h-10 w-10 ${item.color}`} />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}