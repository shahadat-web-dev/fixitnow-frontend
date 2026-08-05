import { getPayments } from "@/service/getPayments";
import PaymentStats from "./_components/PaymentStats";
import PaymentTable from "./_components/PaymentTable";
import { getPaymentStats } from "./_utils/paymentStats";

export default async function PaymentsPage() {
  const result = await getPayments();

  const payments = result?.data || [];

  const stats = getPaymentStats(payments);

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          My Payments
        </h1>

        <p className="text-muted-foreground">
          View all your payment history.
        </p>
      </div>

      <PaymentStats
        total={stats.totalPayments}
        totalAmount={stats.totalAmount}
        completed={stats.completed}
        pending={stats.pending}
      />

      <PaymentTable payments={payments} />

    </div>
  );
}