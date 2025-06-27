import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'


const NavBar = () => {
  return (
    //horizontal stack/elements in a row
    <HStack>
        <Image src={logo} boxSize='40px'/>
        <Text>NavBar</Text>

    </HStack>
  )
}

export default NavBar
