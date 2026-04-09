import type { FC } from 'react'
import DialogWrapper from './DialogWrapper'
import Invoices from './Invoices'

type Props = {
  customerId: number
}

const CustomerInvoicesDialog: FC<Props> = ({ customerId }) => {
  return <DialogWrapper triggerLabel="Invoices" title="Invoices" body={<Invoices customer_id={customerId} />} />
}

export default CustomerInvoicesDialog
