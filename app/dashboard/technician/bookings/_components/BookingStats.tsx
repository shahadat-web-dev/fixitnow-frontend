import { Card, CardContent } from "@/components/ui/card";
import {
  CalendarCheck,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

type Props = {
  total: number;
  requested: number;
  accepted: number;
  completed: number;
};

export default function BookingStats({
  total,
  requested,
  accepted,
  completed,
}: Props) {
  const stats = [
    {
      title: "Total Bookings",
      value: total,
      icon: CalendarCheck,
      color: "text-blue-600",
    },
    {
      title: "Requested",
      value: requested,
      icon: Clock3,
      color: "text-yellow-500",
    },
    {
      title: "Accepted",
      value: accepted,
      icon: CheckCircle2,
      color: "text-green-600",
    },
    {
      title: "Completed",
      value: completed,
      icon: XCircle,
      color: "text-purple-600",
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