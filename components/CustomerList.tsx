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

interface CustomerListProps {
  customers: Customer[];
}

const oeprationItems = [
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
const PAGE_SIZE = 5;

export default function CustomerList({ customers }: CustomerListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(customers.length / PAGE_SIZE);

  // Get customers for the current page
  const currentCustomers = customers.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Table className="my-6 shadow-lg border border-gray-200">
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-[100px]">Id</TableHead>
            <TableHead>First name</TableHead>
            <TableHead>Last name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-center">Operations</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentCustomers.map((c) => (
            <TableRow key={c.id} className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-medium">{c.id}</TableCell>
              <TableCell>{c.firstName}</TableCell>
              <TableCell>{c.lastName}</TableCell>
              <TableCell>{c.email}</TableCell>
              <TableCell className="flex flex-row gap-2 flex-wrap justify-center">
                {oeprationItems.map((item) => (
                  <Button key={item.title} variant={item.variant} asChild>
                    <Link href={`${item.href}/${c.id}`}>{item.title}</Link>
                  </Button>
                ))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={5} className="text-center">
              {/* Pagination Controls */}
              <div className="flex justify-end gap-4 mt-4">
                <Button
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </Button>
                <span className="px-2 py-1">
                  Page {currentPage} of {totalPages}
                </span>
                <Button
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
