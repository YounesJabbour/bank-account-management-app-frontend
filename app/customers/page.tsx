import CustomerList from '@/components/CustomerList';
import fetchCustomers from '@/lib/customers';

export default async function Page() {
  const customers = await fetchCustomers();

  return <CustomerList customers={customers} />;
}
