import AccountList from '@/components/AccountList';
import fetchAccounts from '@/lib/account';

interface PageProps {
  searchParams: {
    page?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const currentPage = Number(searchParams.page) || 0;
  const pageSize = 10;

  const { content, totalElements, totalPages } = await fetchAccounts(
    currentPage,
    pageSize,
  );

  return (
    <AccountList
      accounts={content}
      currentPage={currentPage}
      totalPages={totalPages}
      totalElements={totalElements}
    />
  );
}
