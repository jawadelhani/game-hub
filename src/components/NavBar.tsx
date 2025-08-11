import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    //horizontal stack/elements in a row  
    <HStack padding='10px' >
        <Link to="/">
          <Image src={logo} boxSize='40px' objectFit={'cover'}/>
        </Link>
        <SearchInput />
        <ColorModeSwitch />

    </HStack>
  )
}

export default NavBar
