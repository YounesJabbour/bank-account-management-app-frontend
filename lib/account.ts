import { account_service_url } from '@/utils/constants';
import { Account } from '@/types/Account';

export default async function fetchAccounts(): Promise<Account[]> {
  'use server';
  const res = await fetch(`${account_service_url}/account`, {
    cache: 'no-cache',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch account');
  }
  return await res.json();
}
