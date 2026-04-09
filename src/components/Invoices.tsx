import { Spinner, Table } from '@chakra-ui/react'
import type { FC } from 'react'
import useData from '../hooks/useData'
import type { Invoice } from '../model/Invoice'
import apiClient from '../services/ApiClientImpl'
import TracksDialog from './TracksDialog'

type Props = {
    customer_id: number
}

const Invoices: FC<Props> = ({ customer_id }) => {
    const { data: invoices, isLoading } = useData<Invoice[]>(["customers", "" + customer_id, "invoices"],
        () => apiClient.getInvoicesByCustomer(customer_id)
    );

    return (
        isLoading ? <Spinner /> :
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>Invoice Date</Table.ColumnHeader>
                <Table.ColumnHeader>Billing Address</Table.ColumnHeader>
                <Table.ColumnHeader>Billing City</Table.ColumnHeader>
                <Table.ColumnHeader>Billing State</Table.ColumnHeader>
                <Table.ColumnHeader>Billing Country</Table.ColumnHeader>
                <Table.ColumnHeader>Billing Postal Code</Table.ColumnHeader>
                <Table.ColumnHeader>Total</Table.ColumnHeader>
                <Table.ColumnHeader>Details</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {invoices && invoices.map(invoice => (
                <Table.Row key={invoice.invoice_id}>
                  <Table.Cell>{new Date(invoice.invoice_date).toLocaleDateString()}</Table.Cell>
                  <Table.Cell>{invoice.billing_address}</Table.Cell>
                  <Table.Cell>{invoice.billing_city}</Table.Cell>
                  <Table.Cell>{invoice.billing_state}</Table.Cell>
                  <Table.Cell>{invoice.billing_country}</Table.Cell>
                  <Table.Cell>{invoice.billing_postal_code}</Table.Cell>
                  <Table.Cell>{invoice.total}</Table.Cell>
                  <Table.Cell>
                    <TracksDialog invoice_id={invoice.invoice_id} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
    )
}

export default Invoices
