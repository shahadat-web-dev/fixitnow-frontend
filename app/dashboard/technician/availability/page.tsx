import { getTechnicianProfile } from "@/service/getTechnicianProfile";
import AvailabilityForm from "./_components/AvailabilityForm";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default async function AvailabilityPage() {
  const result = await getTechnicianProfile();

  if (!result?.success) {
    return (
      <div className="py-10 text-center">
        Availability not found.
      </div>
    );
  }

  const profile = result.data;

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">
            Availability Status
          </CardTitle>
        </CardHeader>

        <CardContent>

          <div className="flex items-center gap-5 mb-8">

            <Image
              src={profile?.user?.profileImage ?? "/default-avatar.png"}
              alt={profile?.user?.name ?? "Technician"}
              width={80}
              height={80}
            />

            <div>
             <h2 className="text-2xl font-bold">
  {profile?.user?.name || "Technician"}
</h2>

<p className="text-muted-foreground">
  {profile?.user?.email || ""}
</p>

              <Badge className="mt-2">
                {profile.availabilityStatus}
              </Badge>
            </div>

          </div>

          <AvailabilityForm
            currentStatus={profile.availabilityStatus}
          />

        </CardContent>
      </Card>

    </div>
  );
}