import { account_service_url } from '@/utils/constants';
import { Account } from '@/types/Account';

export default async function fetchAccounts(
  page: number = 0,
  size: number = 10,
): Promise<any> {
  'use server';
  const res = await fetch(
    `${account_service_url}/account?page=${page}&size=${size}`,
    {
      cache: 'no-cache',
    },
  );
  if (!res.ok) {
    throw new Error('Failed to fetch accounts');
  }
  return await res.json();
}
