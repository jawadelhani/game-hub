import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

//undefined :absence of a value
//null: intentional absence of a value



function App() {
  //to share states between components we level it up to the closet parent ,here between gamegrid and genre it's app(usually)
  // const [selectedGenre,setSelectedGenre]=useState<Genre | null>(null)
  // const [selectedPlatform,setSelectedPlatform]=useState<Platform | null>(null)


  return (
    //custome names for your area ,architecture of website,column rows like a table:grid

    <Grid
      templateAreas={{
        base: ` "nav" "main" `, //base for mobile screens
        lg: ` "nav nav" 
            "aside main" `, //lg for large screens 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <Show above="lg">
        {" "}
        {/* show component aside only on large screens */}
        <GridItem area="aside" paddingX={5}>
          <GenreList />
          {" "}
          {/*pass a state from child to parent by this method */}
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
  );
}

export default App;
