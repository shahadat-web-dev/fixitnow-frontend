'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, LogOut, Settings, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { logout } from '@/service/logout';
import { toast } from 'sonner';

// Navigation items
const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

// User dropdown items
const USER_MENU_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '' },
  { label: 'Profile', icon: User, href: '/profile' },
  { label: 'Settings', icon: Settings, href: '/settings' },
];

type IUser = {
  success: boolean;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    phone: string;
    profileImage: string | null;
    address: string | null;
    city: string | null;
    latitude: string | null;
    longitude: string | null;
    status: string;
    emailVerifiedAt: string | null;
    phoneVerifiedAt: string | null;
    lastLoginAt: string | null;
    createdAt: string;
    updatedAt: string;
    role: string;
  };
};

type NavbarProps = {
  user?: IUser | null;
};

export function Navbar({ user }: NavbarProps) {
  console.log(user?.success, 'success');

  const pathname = usePathname();

  const handleUserMenuAction = async (action: string) => {
    if (action === 'logout') {
      await logout();
      toast.success('User Logged Out Successfully');
      window.location.href = '/login';
    }
  };

  // Active nav item
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Dashboard route by role
  const getDashboardRoute = () => {
    switch (user?.data?.role) {
      case 'CUSTOMER':
        return '/dashboard/customer';

      case 'TECHNICIAN':
        return '/dashboard/technician';

      case 'ADMIN':
        return '/dashboard/admin';

      default:
        return '/';
    }
  };

  return (
    <nav className="border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="h-8 w-8 rounded-md flex items-center justify-center text-primary-foreground">
              <Image
                alt="logo"
                src="/home.png"
                width={400}
                height={400}
              />
            </div>
            <span className="text-2xl">FixItNow</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xl font-bold transition-colors ${
                  active
                    ? 'text-green-600'
                    : 'text-foreground/70 hover:text-green-600'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* User */}
        {user?.data ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <div className="h-8 w-8 rounded-full cursor-pointer bg-primary/60 hover:bg-green-600 flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span>{user.data.name}</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    {user.data.email}
                  </span>
                </div>
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              {USER_MENU_ITEMS.map((item) => {
                const Icon = item.icon;

                const href =
                  item.label === 'Dashboard'
                    ? getDashboardRoute()
                    : item.href;

                return (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link href={href} className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                );
              })}

              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={async () => {
                  await handleUserMenuAction('logout');
                }}
                className="text-red-600"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-semibold text-foreground/70 hover:text-green-600"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}