import { Account } from '@/types/Account';

interface AccountListProps {
  accounts: Account[];
}

export default function AccountList({ accounts }: AccountListProps) {
  return (
    <ul>
      {accounts.map((account) => (
        <div key={account.accountId}>
          <div>{account.balance}</div>
          <div>{account.currency}</div>
          <div>{account.status}</div>
          <div>{account.type}</div>
        </div>
      ))}
    </ul>
  );
}
