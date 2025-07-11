import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'


const NavBar = () => {
  return (
    //horizontal stack/elements in a row  
    <HStack padding='10px' >
        <Image src={logo} boxSize='40px'/>
        <SearchInput />
        <ColorModeSwitch />

    </HStack>
  )
}

export default NavBar
