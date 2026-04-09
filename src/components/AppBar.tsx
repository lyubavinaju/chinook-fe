import { HStack } from '@chakra-ui/react'
import { ColorModeButton } from './ui/color-mode'
import { Navigate, NavLink } from 'react-router-dom'
import { useUserData } from '../state-management/auth-store'
import { ROUTES_BY_ROLES } from '../config/roles-config'

const NAV_ITEMS = [
  { to: '/customers', label: 'Customers' },
  { to: '/albums', label: 'Albums' },
  { to: '/playlists', label: 'Playlists' }
]

const AppBar = () => {
  const { username, role } = useUserData();
  const allowedRoutes = role ? ROUTES_BY_ROLES[role as keyof typeof ROUTES_BY_ROLES] ?? [] : [];

  return (
    <HStack justifyContent={"space-evenly"}>
      {!role && <Navigate to="/login" />}
      {NAV_ITEMS
        .filter(item => allowedRoutes.includes(item.to))
        .map(item => (
          <NavLink key={item.to} to={item.to}>{item.label}</NavLink>
        ))}
      {!!role && <NavLink to={"logout"}>{username}</NavLink>}
      <ColorModeButton />
    </HStack>
  )
}

export default AppBar
