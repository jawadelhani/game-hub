import { Box } from "@chakra-ui/react"

// for not repeating the style for cards and skeletons cards

interface Props{
    children: React.ReactNode;
}

const GameCardContainer = ({children}:Props) => {
  return (
    <Box width='250px' borderRadius={10} overflow='hidden'>
        {children}
    </Box>
  )
}

export default GameCardContainer
