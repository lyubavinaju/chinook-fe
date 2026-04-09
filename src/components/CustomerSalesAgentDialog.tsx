import type { FC } from 'react'
import DialogWrapper from './DialogWrapper'
import SaleAgent from './SaleAgent'

type Props = {
  employeeId: number
}

const CustomerSalesAgentDialog: FC<Props> = ({ employeeId }) => {
  return <DialogWrapper triggerLabel="Sales Agent" title="Sales Agent" body={<SaleAgent employeeId={employeeId} />} />
}

export default CustomerSalesAgentDialog
