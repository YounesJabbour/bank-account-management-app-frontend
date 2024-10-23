import { custumer_service_url } from '@/utils/constants';
import { Customer } from '@/types/Customer';
// Fetch customers from the API
export default async function fetchCustomers(): Promise<Customer[]> {
  'use server';
  const res = await fetch(`${custumer_service_url}/customers`, {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch customers');
  }
  return await res.json();
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
