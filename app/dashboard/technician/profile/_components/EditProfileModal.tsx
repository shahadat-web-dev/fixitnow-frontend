"use client";

import {
  startTransition,
  useActionState,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { updateTechnicianProfile } from "../_actions/updateTechnicianProfile";

type Props = {
  profile: {
    bio: string;
    yearsOfExperience: number;
    experienceDescription: string;
    availabilityStatus: string;
  };
};

const initialState = {
  success: false,
  message: "",
};

export default function EditProfileModal({ profile }: Props) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [state, action, pending] = useActionState(
    updateTechnicianProfile,
    initialState
  );

  useEffect(() => {
    if (!state?.message) return;

    if (state.success) {
      toast.success(state.message || "Profile Updated");

      startTransition(() => {
        setOpen(false);
        router.refresh();
      });
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Technician Profile</DialogTitle>
        </DialogHeader>

        <form action={action} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Bio
            </label>

            <Textarea
              name="bio"
              defaultValue={profile.bio}
              rows={4}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Years Of Experience
            </label>

            <Input
              type="number"
              name="yearsOfExperience"
              defaultValue={profile.yearsOfExperience}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Experience Description
            </label>

            <Textarea
              name="experienceDescription"
              defaultValue={profile.experienceDescription}
              rows={4}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Availability Status
            </label>

            <select
              name="availabilityStatus"
              defaultValue={profile.availabilityStatus}
              className="w-full rounded-md border px-3 py-2"
            >
              <option value="ONLINE">ONLINE</option>
              <option value="OFFLINE">OFFLINE</option>
              <option value="BUSY">BUSY</option>
            </select>
          </div>

          <Button
            type="submit"
            disabled={pending}
            className="w-full"
          >
            {pending ? "Updating..." : "Update Profile"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}