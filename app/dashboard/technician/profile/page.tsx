import EditProfileModal from "./_components/EditProfileModal";
import { getTechnicianProfile } from "@/service/getTechnicianProfile";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Clock,
  Star,
  ShieldCheck,
} from "lucide-react";


export default async function TechnicianProfile() {
  const result = await getTechnicianProfile();

  if (!result?.success) {
    return (
      <div className="text-center py-10">
        Technician profile not found.
      </div>
    );
  }

  const profile = result.data;

  console.log(profile);


  return (
    <div className="space-y-8">

      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="text-3xl">
            Technician Profile
          </CardTitle>

          <EditProfileModal
            profile={{
              bio: profile.bio,
              yearsOfExperience: profile.yearsOfExperience,
              experienceDescription: profile.experienceDescription,
              availabilityStatus: profile.availabilityStatus,
            }}
          />
        </CardHeader>

        <CardContent>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

            <Card>
              <CardContent className="py-6">
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Rating
                    </p>

                    <h2 className="text-2xl font-bold">
                      {profile.averageRating}
                    </h2>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="py-6">
                <div className="flex items-center gap-3">
                  <Briefcase className="text-green-600" />

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Completed Jobs
                    </p>

                    <h2 className="text-2xl font-bold">
                      {profile.totalCompletedJobs}
                    </h2>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="py-6">
                <div className="flex items-center gap-3">
                  <Clock className="text-blue-600" />

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Experience
                    </p>

                    <h2 className="text-2xl font-bold">
                      {profile.yearsOfExperience} Years
                    </h2>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="py-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-purple-600" />

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Verification
                    </p>

                    <Badge>
                      {profile.verificationStatus}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          <div className="mt-8 space-y-4">

            <div>
              <h3 className="font-semibold text-lg">
                Bio
              </h3>

              <p className="text-muted-foreground">
                {profile.bio}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Experience Description
              </h3>

              <p className="text-muted-foreground">
                {profile.experienceDescription}
              </p>
            </div>

            <div className="flex gap-4">

              <Badge variant="secondary">
                {profile.availabilityStatus}
              </Badge>

              <Badge>
                {profile.totalReviews} Reviews
              </Badge>

            </div>

          </div>

        </CardContent>
      </Card>
    </div>
  );
}