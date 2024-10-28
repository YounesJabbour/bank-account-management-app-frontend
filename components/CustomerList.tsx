'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Customer } from '@/types/Customer';
import { Button } from './ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface CustomerListProps {
  customers: Customer[];
}

const operationItems = [
  {
    title: 'Edit',
    href: '/customers/edit',
    className: 'text-blue-500',
    variant: 'default' as 'default',
  },
  {
    title: 'Delete',
    href: '/customers/delete',
    className: 'text-red-500',
    variant: 'destructive' as 'destructive',
  },
];

// Pagination settings
const PAGE_SIZE = 8;

export default function CustomerList({ customers }: CustomerListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter customers based on search
  const filteredCustomers = customers.filter(
    (customer) =>
      customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredCustomers.length / PAGE_SIZE);

  // Get customers for the current page
  const currentCustomers = filteredCustomers.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">
            Customers Overview
          </CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search customers..."
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
                <TableHead className="font-semibold">Id</TableHead>
                <TableHead className="font-semibold">First name</TableHead>
                <TableHead className="font-semibold">Last name</TableHead>
                <TableHead className="font-semibold">Email</TableHead>
                <TableHead className="text-center font-semibold">
                  Operations
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentCustomers.map((c) => (
                <TableRow
                  key={c.id}
                  className="hover:bg-muted/50 transition-colors"
                >
                  <TableCell className="font-medium">{c.id}</TableCell>
                  <TableCell>{c.firstName}</TableCell>
                  <TableCell>{c.lastName}</TableCell>
                  <TableCell>{c.email}</TableCell>
                  <TableCell className="flex flex-row gap-2 flex-wrap justify-center">
                    {operationItems.map((item) => (
                      <Button key={item.title} variant={item.variant} asChild>
                        <Link href={`${item.href}/${c.id}`}>{item.title}</Link>
                      </Button>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 flex items-center justify-between px-2">
          <div className="text-sm text-muted-foreground">
            Showing {(currentPage - 1) * PAGE_SIZE + 1} to{' '}
            {Math.min(currentPage * PAGE_SIZE, filteredCustomers.length)} of{' '}
            {filteredCustomers.length} customers
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
}
