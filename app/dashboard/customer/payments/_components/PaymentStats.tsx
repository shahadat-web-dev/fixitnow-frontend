import { Card, CardContent } from "@/components/ui/card";
import {
  CreditCard,
  Wallet,
  CheckCircle2,
  Clock3,
} from "lucide-react";

type Props = {
  total: number;
  totalAmount: number;
  completed: number;
  pending: number;
};

export default function PaymentStats({
  total,
  totalAmount,
  completed,
  pending,
}: Props) {
  const stats = [
    {
      title: "Total Payments",
      value: total,
      icon: CreditCard,
      color: "text-blue-600",
    },
    {
      title: "Total Amount",
      value: `৳${totalAmount}`,
      icon: Wallet,
      color: "text-green-600",
    },
    {
      title: "Completed",
      value: completed,
      icon: CheckCircle2,
      color: "text-emerald-600",
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
      color: "text-yellow-500",
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