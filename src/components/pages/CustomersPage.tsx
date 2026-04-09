import apiClient from '../../services/ApiClientImpl'
import type { Customer } from '../../model/Customer'
import useData from '../../hooks/useData'
import { Spinner } from '@chakra-ui/react';
import { Table } from '@chakra-ui/react/table';
import CustomerInvoicesDialog from '../CustomerInvoicesDialog';
import CustomerSalesAgentDialog from '../CustomerSalesAgentDialog';

const CustomersPage = () => {
  const { data: customers, isLoading } = useData<Customer[]>(["customers"], () => apiClient.getCustomers())

  return (
    isLoading ? <Spinner /> :
      <Table.Root>
        <Table.Caption />
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>First Name</Table.ColumnHeader>
            <Table.ColumnHeader>Last Name</Table.ColumnHeader>
            <Table.ColumnHeader display={{ base: 'none', md: 'table-cell' }}>City</Table.ColumnHeader>
            <Table.ColumnHeader display={{ base: 'none', md: 'table-cell' }}>Country</Table.ColumnHeader>
            <Table.ColumnHeader display={{ base: 'none', md: 'table-cell' }}>Email</Table.ColumnHeader>
            <Table.ColumnHeader>Invoices</Table.ColumnHeader>
            <Table.ColumnHeader>Sales Agent</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {customers && customers.map(customer => (
            <Table.Row key={customer.customer_id}>
              <Table.Cell>{customer.first_name}</Table.Cell>
              <Table.Cell>{customer.last_name}</Table.Cell>
              <Table.Cell display={{ base: 'none', md: 'table-cell' }}>{customer.city}</Table.Cell>
              <Table.Cell display={{ base: 'none', md: 'table-cell' }}>{customer.country}</Table.Cell>
              <Table.Cell display={{ base: 'none', md: 'table-cell' }}>{customer.email}</Table.Cell>
              <Table.Cell>
                <CustomerInvoicesDialog customerId={customer.customer_id} />
              </Table.Cell>
              <Table.Cell>
                {customer.support_rep_id &&
                  <CustomerSalesAgentDialog employeeId={customer.support_rep_id} />
                }
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell />
          </Table.Row>
        </Table.Footer>
      </Table.Root>

  )
}

export default CustomersPage
