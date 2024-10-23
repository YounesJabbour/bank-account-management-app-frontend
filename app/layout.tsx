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

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bank Accounts Management',
  description:
    'Bank accounts management application based on Spring Boot and Next.js',
};

// Define menu items
const menuItems: { title: string; href: string }[] = [
  { title: 'Home', href: '/' },
  { title: 'Customers', href: '/customers' },
  { title: 'Accounts', href: '/accounts' },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation Menu */}
        <NavigationMenu className="mx-auto my-2 ">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem className="cursor-pointer" key={item.href}>
                <Link href={item.href} passHref legacyBehavior>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    aria-label={item.title} // Accessibility improvement
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Render page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
