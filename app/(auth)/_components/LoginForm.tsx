"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { loginAction } from "../_actions/authActions";
import { useRouter } from "next/navigation";


const LoginForm = () => {
  const [state, action, pending] = useActionState(loginAction, null);

  const router = useRouter();
    useEffect(()=>{
    if(!state) return;

    if(state.success){
      toast.success(state.message || "Login Successfull");
      router.push("/dashboard")
    }

    if(!state.success){
      toast.error(state.message || "Login failed");
    }

  },);

  return (
    <div>
      <form action={action}  className="space-y-4">
         <Card className="p-5 space-y-4">

           {/* Email */}
          <Input name="email" type="email" placeholder="Enter Your Email" required/>

           {/* Password */}
          <Input name="password" type="password" placeholder="Enter Your Password" required/>

          {/* Login Button */}
        <Button type="submit">
          {pending? "Submitting..." : "Login"}
        </Button>
         </Card>
      </form>
    </div>
  );
};

export default LoginForm;