/* eslint-disable @typescript-eslint/no-explicit-any */
export const getPaymentStats = (payments: any[]) => {
  return {
    totalPayments: payments.length,

    totalAmount: payments.reduce(
      (sum, item) => sum + Number(item.amount),
      0
    ),

    completed: payments.filter(
      (item) => item.status === "COMPLETED"
    ).length,

    pending: payments.filter(
      (item) => item.status === "PENDING"
    ).length,
  };
};