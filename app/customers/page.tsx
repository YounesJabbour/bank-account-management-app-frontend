import CustomerList from '@/components/CustomerList';
import fetchCustomers from '@/lib/customers';

interface PageProps {
  searchParams: {
    page?: string;
  };
}

export default async function Page({ searchParams }: PageProps) {
  const currentPage = Number(searchParams.page) || 0;
  const pageSize = 10;

  const { content, totalElements, totalPages } = await fetchCustomers(
    currentPage,
    pageSize,
  );

  return (
    <CustomerList
      customers={content}
      currentPage={currentPage}
      totalPages={totalPages}
      totalElements={totalElements}
    />
  );
}
