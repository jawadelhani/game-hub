import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Game, Platform } from '../hooks/useGames';
import {Genre} from '../hooks/useGenres';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';


// pass states from app to game grid with different variable, with gameQuery it's refactoring to one variable
// interface Props{
//   selectedGenre : Genre | null;
//   selectedPlatform : Platform | null;
// }

interface Props{
  gameQuery:GameQuery;
}

const GameGrid = ({gameQuery}:Props) => {

    const {data,error,isLoading} = useGames(gameQuery);
    const skeletons=[1,2,3,4,5,6,7,8]

  return (
    //nb of columns for different screens 
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:3}} spacing={3} padding='10px'>  
            {isLoading && skeletons.map((skeleton) =>(
              <GameCardContainer key={skeleton} >
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
            {data.map((game)=>(
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
        </SimpleGrid>
    </> 
  )
}

export default GameGrid
