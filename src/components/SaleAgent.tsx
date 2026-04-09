import { Grid, Spinner, Text } from '@chakra-ui/react'
import type { FC } from 'react'
import useData from '../hooks/useData'
import apiClient from '../services/ApiClientImpl'
import type { Employee } from '../model/SalesAgent'

type Props = {
  employeeId: number
}

const SaleAgent: FC<Props> = ({ employeeId }) => {
  const { data: employee, isLoading } = useData<Employee>(['employees', '' + employeeId], () =>
   apiClient.getEmployee(employeeId)
  )

  const formatDate = (value: string | null) => (value ? new Date(value).toLocaleDateString('en-GB') : '')
 
  return (
    isLoading ? <Spinner /> :
      <Grid templateColumns="repeat(2, minmax(0, 1fr))" gap={3}>
        <Text>First Name</Text>
        <Text>{employee!.first_name}</Text>
        <Text>Last Name</Text>
        <Text>{employee!.last_name}</Text>
        <Text>Birth Date</Text>
        <Text>{formatDate(employee!.birth_date)}</Text>
        <Text>Hire Date</Text>
        <Text>{formatDate(employee!.hire_date)}</Text>
        <Text>City</Text>
        <Text>{employee!.city}</Text>
        <Text>Country</Text>
        <Text>{employee!.country}</Text>
        <Text>Email</Text>
        <Text>{employee!.email}</Text>
      </Grid>
  ) 
}

export default SaleAgent
