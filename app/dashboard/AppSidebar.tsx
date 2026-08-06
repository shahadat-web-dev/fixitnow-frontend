/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  CalendarCheck,
  CreditCard,
  Star,
  User,
  Wrench,
  Users,
  FolderKanban,
  PlusCircle,
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

type AppSidebarProps = {
  user: any;
};

export function AppSidebar({ user }: AppSidebarProps) {
  const role = user?.data?.role;

  const customerMenu = [
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

  const technicianMenu = [
  
    {
      title: "Services",
      url: "/dashboard/technician/services",
      icon: Wrench,
    },
    {
      title: "Bookings",
      url: "/dashboard/technician/bookings",
      icon: CalendarCheck,
    },
   
    {
      title: "Profile",
      url: "/dashboard/technician/profile",
      icon: User,
    },
  ];

  const adminMenu = [
     {
      title: "Profile",
      url: "/dashboard/admin/profile",
      icon: User,
    },
    {
      title: "Users",
      url: "/dashboard/admin/users",
      icon: Users,
    },
   
    {
      title: "Categories",
      url: "/dashboard/admin/categories",
      icon: FolderKanban,
    },
    {
      title: "Bookings",
      url: "/dashboard/admin/bookings",
      icon: CalendarCheck,
    },
   
     {
      title: "Add Categories",
      url: "/dashboard/admin/add-categories",
      icon: PlusCircle,
    },
    {
      title: "Add Services",
      url: "/dashboard/admin/add-service",
      icon: PlusCircle,
    },
  ];

  let items = customerMenu;

  if (role === "TECHNICIAN") {
    items = technicianMenu;
  }

  if (role === "ADMIN") {
    items = adminMenu;
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 rounded-md bg-[#66ACBF] py-5 text-base font-bold text-white">
            <LayoutDashboard className="h-5 w-5" />
            Dashboard
          </SidebarGroupLabel>

          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className="flex items-center gap-3 rounded-md px-3 py-2 transition-all"
                    >
                      <item.icon className="h-5 w-5" />
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