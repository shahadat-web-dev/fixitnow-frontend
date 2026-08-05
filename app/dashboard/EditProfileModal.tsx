"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { updateProfileAction } from "@/service/updateProfile";

interface Props {
  profile: {
    name: string;
    phone: string | null;
    address: string | null;
    city: string | null;
  };
}

export default function EditProfileModal({ profile }: Props) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const result = await updateProfileAction(null, formData);

      if (result?.success) {
        toast.success(result.message || "Profile updated");
        setOpen(false); // 👈 এখন action resolve হওয়ার পরই সরাসরি কল হচ্ছে, effect এর মধ্যে না
      } else {
        toast.error(result?.message || "Update failed");
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button className="cursor-pointer" onClick={() => setOpen(true)}>
        <Pencil className="mr-2 h-4 w-4" />
        Edit Profile
      </Button>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>

        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" defaultValue={profile.name} required />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" defaultValue={profile.phone ?? ""} />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="address">Address</Label>
            <Input id="address" name="address" defaultValue={profile.address ?? ""} />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="city">City</Label>
            <Input id="city" name="city" defaultValue={profile.city ?? ""} />
          </div>

          <DialogFooter className="mt-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isPending}>
              {isPending ? "Saving..." : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}