import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react"
import GenreList from "../components/GenreList"
import GameHeading from "../components/GameHeading"
import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"
import GameGrid from "../components/GameGrid"

//undefined :absence of a value
//null: intentional absence of a value


const HomePage = () => {
    
  return (
    <Grid
      templateAreas={{
        base: `"main" `, //base for mobile screens
        lg: `"aside main" `, //lg for large screens 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      
        <Show above="lg">
        {/* show component aside only on large screens */}
            <GridItem area="aside" paddingX={5}>
                <GenreList />
            </GridItem>
        </Show>

        {/* box only for leftpadding so the elements be aligned  // flex like HStack */}
        <GridItem area="main">
            <Box paddingLeft={2}>
                <GameHeading />
                <Flex marginBottom={5}>
                <Box marginRight={5}>
                    <PlatformSelector />
                </Box>
                <SortSelector />
                </Flex>
            </Box>
            <GameGrid />
        </GridItem>
    </Grid>
  )
}

export default HomePage
