'use client';
import { Account } from '@/types/Account';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface AccountListProps {
  accounts: Account[];
}

// Pagination settings
const PAGE_SIZE = 8;

const AccountList = ({ accounts }: AccountListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter accounts based on search
  const filteredAccounts = accounts.filter(
    (account) =>
      account.accountId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.status.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredAccounts.length / PAGE_SIZE);

  // Get accounts for current page
  const currentAccounts = filteredAccounts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Format currency with symbol
  const formatCurrency = (amount: number, currency: string) => {
    const currencyMap: { [key: string]: string } = {
      EURO: 'EUR',
      POUND: 'GBP',
      DOLLAR: 'USD',
    };

    const currencyCode = currencyMap[currency] || currency;

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Get account type styling
  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'SAVINGS':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors';
      case 'CHECKING':
        return 'bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors';
      case 'INVESTMENT':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 transition-colors';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors';
    }
  };

  // Get status styling
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'ACTIVATED':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'SUSPENDED':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'BLOCKED':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">
            Accounts Overview
          </CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search accounts..."
              className="pl-8"
              value={searchTerm}
              onChange={(e: any) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="rounded-lg border shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Account ID</TableHead>
                <TableHead className="font-semibold">Balance</TableHead>
                <TableHead className="font-semibold">Currency</TableHead>
                <TableHead className="font-semibold">Type</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentAccounts.map((account) => (
                <TableRow
                  key={account.accountId}
                  className="hover:bg-muted/50 transition-colors"
                >
                  <TableCell className="font-medium">
                    {account.accountId}
                  </TableCell>
                  <TableCell className="font-semibold">
                    {formatCurrency(account.balance, account.currency)}
                  </TableCell>
                  <TableCell>{account.currency}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={`${getTypeStyle(account.type)} px-3 py-1`}
                    >
                      {account.type.charAt(0) +
                        account.type.slice(1).toLowerCase()}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`${getStatusStyle(account.status)} px-3 py-1`}
                    >
                      {account.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 flex items-center justify-between px-2">
          <div className="text-sm text-muted-foreground">
            Showing {(currentPage - 1) * PAGE_SIZE + 1} to{' '}
            {Math.min(currentPage * PAGE_SIZE, filteredAccounts.length)} of{' '}
            {filteredAccounts.length} accounts
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="hover:bg-muted"
            >
              Previous
            </Button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handlePageChange(i + 1)}
                  className={`h-8 w-8 ${
                    currentPage === i + 1
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  }`}
                >
                  {i + 1}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="hover:bg-muted"
            >
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AccountList;
