import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

//these are the types of the data we get ,it's defined in the website /api documentation
interface Game{
    id: number;
    name: string;
}
interface fetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(()=>{
        //we define type of response we get from the api/games
        apiClient.get<fetchGamesResponse>('/games')
            .then(res=>setGames(res.data.results))
            .catch(err => setError(err.message));
    })


  return (
    <>
        {error && <Text>{error}</Text>}
        <ul>
            {games.map(game=> <li key={game.id}> {game.name} </li>)}
                
        </ul>
    </>
    
  )
}

export default GameGrid
