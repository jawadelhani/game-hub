import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import ColorModeSwitch from './ColorModeSwitch'


const NavBar = () => {
  return (
    //horizontal stack/elements in a row  
    <HStack justifyContent={'space-between'} padding='10px' >
        <Image src={logo} boxSize='40px'/>
        <ColorModeSwitch />

    </HStack>
  )
}

export default NavBar
