import { Button } from '@chakra-ui/react'
import authService from '../../services/AuthServiceImpl'
import { useUserData } from '../../state-management/auth-store'

const LogoutPage = () => {
  const resetUserData = useUserData(s => s.resetUserData);
  return (
    <Button onClick={async () => {
      await authService.logout();
      resetUserData();
    }}>Logout</Button>
  )
}

export default LogoutPage
