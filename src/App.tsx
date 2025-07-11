import { Grid, grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";


//these filters are added in usegame // pass to gamegrid then usegame
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder :string;
  searchText:string;
}

function App() {
  //to share states between components we level it up to the closet parent ,here between gamegrid and genre it's app(usually)
  // const [selectedGenre,setSelectedGenre]=useState<Genre | null>(null)
  // const [selectedPlatform,setSelectedPlatform]=useState<Platform | null>(null)

  const [gameQuery, setgameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar Onsearch={(searchText)=>setgameQuery({ ...gameQuery, searchText })}/>
      </GridItem>

      <Show above="lg">
        {" "}
        {/* show component aside only on large screens */}
        <GridItem area="aside" paddingX={5}>
          <GenreList
            onSelectGenre={(genre) => setgameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />{" "}
          {/*pass a state from child to parent by this method */}
        </GridItem>
      </Show>

      <GridItem area="main">
        <HStack spacing={5} paddingLeft={2} marginBottom={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) =>setgameQuery({ ...gameQuery, platform })}/>
          <SortSelector selectedSortOrder={gameQuery.sortOrder} OnSelectSortOrder={(sortOrder)=>setgameQuery({...gameQuery,sortOrder})} />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
