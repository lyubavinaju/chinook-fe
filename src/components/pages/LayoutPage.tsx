import { Box, HStack } from '@chakra-ui/react'
import AppBar from '../AppBar'
import { Outlet } from 'react-router-dom'
import { useUserData } from '../../state-management/auth-store'

const LayoutPage = () => {
  return (
    <>
    <AppBar/>
    <Box marginTop={"4vh"}>
      <Outlet></Outlet>
    </Box>
    </>
  )
}

export default LayoutPage
