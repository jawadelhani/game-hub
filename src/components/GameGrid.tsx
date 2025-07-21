import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';
import React from 'react';

// pass states from app to game grid with different variable, with gameQuery it's refactoring to one variable
// interface Props{
//   selectedGenre : Genre | null;
//   selectedPlatform : Platform | null;
// }

interface Props{
  gameQuery:GameQuery;
}

const GameGrid = ({gameQuery}:Props) => {

    const {data,error,isLoading,isFetchingNextPage,fetchNextPage,hasNextPage} = useGames(gameQuery);
    const skeletons=[1,2,3,4,5,6,7,8]
    if(error) return <Text>{error.message}</Text>
  return (
    //nb of columns for different screens 
    // padding in box is to align button with games
     <Box padding='10px'>  
        <SimpleGrid columns={{sm:1,md:2,lg:3,xl:3}} spacing={6}>  
            {isLoading && skeletons.map((skeleton) =>(
              <GameCardContainer key={skeleton} >
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
            {data?.pages.map((page,index) =>
              <React.Fragment key={index}>

                {page?.results.map((game)=>(
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}

              </React.Fragment>
            )}
            
        </SimpleGrid>
        {hasNextPage && <Button onClick={()=>fetchNextPage()} marginY={5} >{isFetchingNextPage ? 'Loading...':'Load more'}</Button>}
    </Box> 
  )
}

export default GameGrid
 