import { Box } from "@chakra-ui/react"

// for not repeating the style for cards and skeletons cards

interface Props{
    children: React.ReactNode;
}

const GameCardContainer = ({children}:Props) => {
  return (
    <Box  _hover={{transform:'scale(1.03)',transition:'transform .15s ease in'}}  borderRadius={10} overflow='hidden'>
        {children}
    </Box>
  )
}

export default GameCardContainer
