import AccountList from '@/components/AccountList';
import fetchAccounts from '@/lib/account';

export default async function Page() {
  const accounts = await fetchAccounts();

  return <AccountList accounts={accounts} />;
}
