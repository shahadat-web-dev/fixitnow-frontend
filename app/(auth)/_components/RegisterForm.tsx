"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { registerAction } from "../_actions/authActions"; // আপনার রেজিস্টার অ্যাকশন ইমপোর্ট করুন
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  // initial state হিসেবে null ব্যবহার করা হয়েছে (টাইপ এরর এড়াতে)
  const [state, action, pending] = useActionState(registerAction, null);
  const router = useRouter();

  useEffect(() => {
    if (!state) return;

    if (state.success) {
      toast.success(state.message || "Registration Successful!");
      // রেজিস্ট্রেশন সফল হলে যদি Server Action রিডাইরেক্ট না করে, তবে এখান থেকে রিডাইরেক্ট হবে
      router.push("/login");
    } else {
      toast.error(state.message || "Registration failed");
    }
  }, [state, router]);

  return (
    <div>
      <form action={action} className="space-y-4">
        <Card className="p-5 space-y-4">

          {/* Name */}
          <Input 
            name="name" 
            type="text" 
            placeholder="Enter Your Name" 
          />

          {/* Phone */}
          <Input 
            name="phone" 
            type="tel" 
            placeholder="Enter Your Phone" 

          />

          {/* Email */}
          <Input 
            name="email" 
            type="email" 
            placeholder="Enter Your Email" 
            required 
          />

          {/* Password */}
          <Input 
            name="password" 
            type="password" 
            placeholder="Enter Your Password" 
            required 
          />

          {/* Role Dropdown */}
          <div>
            <select
              name="role"
              defaultValue=""
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              required
            >
              <option value="" disabled>
                Select Your Role
              </option>
              <option value="ADMIN">ADMIN</option>
              <option value="TECHNICIAN">TECHNICIAN</option>
              <option value="CUSTOMER">CUSTOMER</option>
            </select>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="cursor-pointer w-full" disabled={pending}>
            {pending ? "Submitting..." : "Register Now"}
          </Button>

          {/* ২. লগইন পেজে যাওয়ার লিংক */}
          <div className="text-center text-sm text-muted-foreground mt-2">
            Already have an account?{" "}
            <Link href="/login" className="text-primary underline font-medium hover:text-primary/80">
              Login here
            </Link>
          </div>

        </Card>
      </form>
    </div>
  );
};

export default RegisterForm;