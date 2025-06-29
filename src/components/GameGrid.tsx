import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Game } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
    const {data,error,isLoading} = useGames();
    const skeletons=[1,2,3,4,5,6,7,8]
    
  return (
    //nb of columns for different screens 
    <>
        {error && <Text>{error}</Text>}
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:3}} spacing={3} padding='10px'>  
            {isLoading && skeletons.map((skeleton) =>(
              <GameCardContainer>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}
            {data.map((game)=>(
              <GameCardContainer>
                <GameCard key={game.id} game={game} />
              </GameCardContainer>
            ))}
        </SimpleGrid>
    </> 
  )
}

export default GameGrid
