import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.png'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

//just to pass this from app to down input via navbar
interface Props{
    Onsearch :(searchText:string)=>void;
}

const NavBar = ({Onsearch}:Props) => {
  return (
    //horizontal stack/elements in a row  
    <HStack padding='10px' >
        <Image src={logo} boxSize='40px'/>
        <SearchInput Onsearch={Onsearch}/>
        <ColorModeSwitch />

    </HStack>
  )
}

export default NavBar
