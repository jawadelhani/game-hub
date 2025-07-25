import { create } from "zustand";

//these filters are added in usegame // pass to gamegrid then usegame
interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore{
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenreID: (genreID: number) => void;
    setPlatformID: (platformID: number) => void;
    setSortOrder: (sortOrder: string) => void;
}


//store means previous state =previous GameQueryStore
const useGameQueryStore = create<GameQueryStore>(set=>({
    gameQuery:{},
    setSearchText:(searchText)=>set(()=>({gameQuery:{searchText}})), //we clear other filters ,only search that's why no spread
    setGenreID:(genreID)=>set(store=>({gameQuery:{...store.gameQuery,genreID}})),
    setPlatformID:(platformID)=>set(store=>({gameQuery:{...store.gameQuery,platformID}})),
    setSortOrder:(sortOrder)=>set(store=>({gameQuery:{...store.gameQuery,sortOrder}}))

}))

export default useGameQueryStore;