"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const RegisterForm = () => {
  return (
    <form className="space-y-4">
      <Card className="p-5 space-y-4">

         {/* Name */}
        <Input name="name" type="name" placeholder="Enter Your Name" required></Input>

         {/* Phone */}
        <Input name="phone" type="number" placeholder="Enter Your Phone" required></Input>

         {/* Email */}
        <Input name="email" type="email" placeholder="Enter Your Email" required></Input>

        {/* Password */}
        <Input name="password" type="password" placeholder="Enter Your Password" required></Input>

        {/* Login Button */}
        <Button type="submit">Register</Button>

      </Card>
    </form>
  );
};

export default RegisterForm;