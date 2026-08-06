import { Badge } from "@/components/ui/badge";

export default function StatusBadge({
  status,
}: {
  status: string;
}) {
  switch (status) {
    case "REQUESTED":
      return (
        <Badge className="bg-yellow-500">
          Requested
        </Badge>
      );

    case "ACCEPTED":
      return (
        <Badge className="bg-blue-600">
          Accepted
        </Badge>
      );

    case "COMPLETED":
      return (
        <Badge className="bg-green-600">
          Completed
        </Badge>
      );

    case "CANCELLED":
      return (
        <Badge variant="destructive">
          Cancelled
        </Badge>
      );

    default:
      return <Badge>{status}</Badge>;
  }
}