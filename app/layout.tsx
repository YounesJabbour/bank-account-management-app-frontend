import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Building2, Home, Users, Wallet } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bank Accounts Management',
  description:
    'Bank accounts management application based on Spring Boot and Next.js',
  viewport: 'width=device-width, initial-scale=1',
};

// Define menu items with icons
const menuItems: { title: string; href: string; icon: React.ReactNode }[] = [
  { title: 'Home', href: '/', icon: <Home className="w-4 h-4 mr-2" /> },
  {
    title: 'Customers',
    href: '/customers',
    icon: <Users className="w-4 h-4 mr-2" />,
  },
  {
    title: 'Accounts',
    href: '/accounts',
    icon: <Wallet className="w-4 h-4 mr-2" />,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex min-h-full flex-col`}>
        {/* Header */}
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center">
            <Link href="/">
              <div className="flex items-center gap-2 mr-8">
                <Building2 className="w-6 h-6" />
                <span className="hidden font-bold sm:inline-block cursor-pointer">
                  Bank Management
                </span>
              </div>
            </Link>
            {/* Navigation Menu */}
            <NavigationMenu className="mx-auto">
              <NavigationMenuList className="gap-1 md:gap-2">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link href={item.href} passHref legacyBehavior>
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()} flex items-center px-3 py-2 text-sm transition-colors hover:bg-accent`}
                        aria-label={item.title}
                      >
                        {item.icon}
                        <span className="hidden sm:inline-block">
                          {item.title}
                        </span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 container mx-auto p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>

        {/* Footer */}
        <footer className="border-t py-6 md:py-0">
          <div className="container flex h-14 items-center justify-between text-sm">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Bank Management. All rights reserved.
            </p>
            <nav className="flex items-center gap-4 text-muted-foreground">
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms
              </Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
