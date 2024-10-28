import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users, Wallet } from 'lucide-react';
import Link from 'next/link';

export default async function Page() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Link href="/customers">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-2xl font-bold">Customers</CardTitle>
            <Users className="w-8 h-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Manage customer profiles, view customer details and edit customer
              information
            </p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/accounts">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-2xl font-bold">Accounts</CardTitle>
            <Wallet className="w-8 h-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              View and manage bank accounts, track balances and account statuses
            </p>
          </CardContent>
        </Card>
      </Link>

      <Link href="/">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-2xl font-bold">About</CardTitle>
            <Building2 className="w-8 h-8 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Bank accounts management system built with Next.js and Spring Boot
            </p>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
