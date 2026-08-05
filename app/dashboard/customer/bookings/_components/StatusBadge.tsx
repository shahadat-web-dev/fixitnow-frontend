import { Badge } from "@/components/ui/badge";

export default function StatusBadge({
  status,
}: {
  status: string;
}) {
  switch (status) {
    case "REQUESTED":
      return <Badge className="bg-yellow-500">Requested</Badge>;

    case "ACCEPTED":
      return <Badge className="bg-blue-500">Accepted</Badge>;

    case "PAID":
      return <Badge className="bg-purple-500">Paid</Badge>;

    case "IN_PROGRESS":
      return (
        <Badge className="bg-green-500">
          In Progress
        </Badge>
      );

    case "COMPLETED":
      return (
        <Badge className="bg-emerald-600">
          Completed
        </Badge>
      );

    case "DECLINED":
      return <Badge variant="destructive">Declined</Badge>;

    case "CANCELLED":
      return <Badge variant="destructive">Cancelled</Badge>;

    default:
      return <Badge>{status}</Badge>;
  }
}