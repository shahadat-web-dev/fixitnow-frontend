import { getMe } from "@/service/getMe";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  ShieldCheck,
  CalendarDays,
  User,
} from "lucide-react";
import EditProfileModal from "../../EditProfileModal";


const UserProfile = async () => {
  const user = await getMe();

  if (!user?.success) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <h2 className="text-xl font-semibold">User Not Found</h2>
      </div>
    );
  }

  const profile = user.data;

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <Card className="overflow-hidden border shadow-lg">
        <div className="h-20 relative">
          <div className="absolute left-8 -bottom-12">
            <div className="h-28 w-28 rounded-full bg-[#66ACBF] shadow-xl flex items-center justify-center border-4 border-white">
              <User className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>

        <CardContent className="pt-16 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold">{profile.name}</h2>
              <p className="text-muted-foreground mt-1">{profile.email}</p>

              <div className="flex gap-3 mt-4">
                <Badge variant="default">{profile.role}</Badge>
                <Badge variant={profile.status === "ACTIVE" ? "default" : "destructive"}>
                  {profile.status}
                </Badge>
              </div>
            </div>

            <EditProfileModal
              profile={{
                name: profile.name,
                phone: profile.phone,
                address: profile.address,
                city: profile.city,
              }}
            />
          </div>

          {/* Information Cards — অপরিবর্তিত */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
            <Card className="shadow-sm">
              <CardContent className="flex gap-4 items-center p-5">
                <Mail className="text-cyan-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <h3 className="font-semibold break-all">{profile.email}</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="flex gap-4 items-center p-5">
                <Phone className="text-green-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <h3 className="font-semibold">{profile.phone || "N/A"}</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="flex gap-4 items-center p-5">
                <ShieldCheck className="text-indigo-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Role</p>
                  <h3 className="font-semibold">{profile.role}</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="flex gap-4 items-center p-5">
                <MapPin className="text-red-500" />
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <h3 className="font-semibold">{profile.address || "Not Added"}</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="flex gap-4 items-center p-5">
                <Building2 className="text-orange-500" />
                <div>
                  <p className="text-sm text-muted-foreground">City</p>
                  <h3 className="font-semibold">{profile.city || "Not Added"}</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="flex gap-4 items-center p-5">
                <CalendarDays className="text-violet-600" />
                <div>
                  <p className="text-sm text-muted-foreground">Joined</p>
                  <h3 className="font-semibold">
                    {new Date(profile.createdAt).toLocaleDateString()}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfile;