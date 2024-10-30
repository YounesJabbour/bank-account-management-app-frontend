'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Customer } from '@/types/Customer';
import { Button } from './ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

interface CustomerListProps {
  customers: Customer[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
}

const operationItems = [
  {
    label: 'Edit',
    action: (id: string) => `/customers/${id}/edit`,
    color: 'yellow',
    variant: 'outline' as
      | 'default'
      | 'destructive'
      | 'outline'
      | 'secondary'
      | 'ghost'
      | 'link'
      | null,
    link: '/edit',
  },
  {
    label: 'Delete',
    action: (id: string) => console.log('Delete customer', id),
    type: 'button',
    color: 'red',
    variant: 'outline' as
      | 'default'
      | 'destructive'
      | 'outline'
      | 'secondary'
      | 'ghost'
      | 'link'
      | null,
    link: '/delete',
  },
];

export default function CustomerList({
  customers,
  currentPage,
  totalPages,
  totalElements,
}: CustomerListProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/customers?page=${page}`);
  };

  return (
    <Card className="shadow-lg">
      <CardHeader className="border-b">
        <CardTitle className="text-2xl font-bold">Customers Overview</CardTitle>
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
              {customers.map((c) => (
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
                      <Button key={item.label} variant={item.variant} asChild>
                        <Link href={`${item.link}/${c.id}`}>{item.label}</Link>
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
            Showing {currentPage * 10 + 1} to{' '}
            {Math.min((currentPage + 1) * 10, totalElements)} of {totalElements}{' '}
            customers
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
              className="hover:bg-muted"
            >
              Previous
            </Button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handlePageChange(i)}
                  className={`h-8 w-8 ${
                    currentPage === i
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
              disabled={currentPage === totalPages - 1}
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
