import { HStack } from '@chakra-ui/react'
import { ColorModeButton } from './ui/color-mode'
import { NavLink } from 'react-router-dom'

const AppBar = () => {
  return (
    <HStack justifyContent={"space-evenly"}>
        <NavLink to={"customers"}>Customers</NavLink>
        <NavLink to={"albums"}>Albums</NavLink>
        <NavLink to={"playlists"}>Playlists</NavLink>
        <NavLink to={"logout"}>Logout</NavLink>
        <ColorModeButton/>
    </HStack>
  )
}

export default AppBar
