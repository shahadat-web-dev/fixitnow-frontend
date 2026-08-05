import { Navbar } from "@/components/shared/navbar";
import { getMe } from "@/service/getMe";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getMe();

  return (
    <SidebarProvider>
      <AppSidebar user={user} />

      <SidebarInset>
        <Navbar user={user} />

        <main className="p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;