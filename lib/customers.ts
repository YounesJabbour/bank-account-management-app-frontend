import { custumer_service_url } from '@/utils/constants';
import { Customer } from '@/types/Customer';
// Fetch customers from the API
export default async function fetchCustomers(
  page: number = 0,
  size: number = 10,
): Promise<any> {
  'use server';
  const res = await fetch(
    `${custumer_service_url}/customers?page=${page}&size=${size}`,
    {
      cache: 'no-cache',
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch customers');
  }

  return res.json();
}

export async function fetchCustomerById(id: string): Promise<Customer> {
  'use server';
  const res = await fetch(`${custumer_service_url}/customers/${id}`, {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch customer');
  }
  return await res.json();
}
