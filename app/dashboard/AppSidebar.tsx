/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  CalendarCheck,
  CreditCard,
  Star,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  // {
  //   title: "Dashboard",
  //   url: "/dashboard/customer",
  //   icon: LayoutDashboard,
  // },
  {
    title: "Bookings",
    url: "/dashboard/customer/bookings",
    icon: CalendarCheck,
  },
  {
    title: "Payments",
    url: "/dashboard/customer/payments",
    icon: CreditCard,
  },
  {
    title: "Reviews",
    url: "/dashboard/customer/reviews",
    icon: Star,
  },
  {
    title: "Profile",
    url: "/dashboard/customer/profile",
    icon: User,
  },
];

type AppSidebarProps = {
  user: any;
};

export function AppSidebar({ user }: AppSidebarProps) {
  console.log(user);
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>

          <SidebarGroupLabel className="flex bg-[#66ACBF] text-white items-center gap-2 text-base font-bold">
            <LayoutDashboard className="" />
            Dashboard
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                
                 key={item.title}>
                  <SidebarMenuButton
                   asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}