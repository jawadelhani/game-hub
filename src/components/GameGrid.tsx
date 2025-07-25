import {SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'; //infinite scroll
import useGameQueryStore from '../store';

// pass states from app to game grid with different variable, with gameQuery it's refactoring to one variable
// interface Props{
//   selectedGenre : Genre | null;
//   selectedPlatform : Platform | null;
// }



const GameGrid = () => {

  const gameQuery=useGameQueryStore(s=>s.gameQuery)

  const {data,error,isLoading,isFetchingNextPage,fetchNextPage,hasNextPage} = useGames();
  const skeletons=[1,2,3,4,5,6,7,8]
  if(error) return <Text>{error.message}</Text>

  const fetchedgamesCount=data?.pages.reduce((total,page)=> total + page.results.length,0) || 0;

  return (
    //nb of columns for different screens 
    // padding in box is to align button with games
    <InfiniteScroll dataLength={fetchedgamesCount} hasMore={!!hasNextPage} next={()=>fetchNextPage()} loader={<Spinner />}>
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
    </InfiniteScroll>
  )}

export default GameGrid
 