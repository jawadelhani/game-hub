//this is called a custom hook, it is a function that starts with "use" and it contains logic that can be reused across components
//it's also called a module, it can be imported in any component 

import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Platform{
    id: number;
    name: string;
    slug: string;
}
//these are the types of the data we get ,it's defined in the website /api documentation
export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic:number
}

interface fetchGamesResponse {
    count: number;
    results: Game[];
}

const useGames=()=>{
        const [games, setGames] = useState<Game[]>([]);
        const [error, setError] = useState('');
        const [isLoading, setIsLoading] = useState(false);
    
        useEffect(()=>{
            const controller = new AbortController(); //to cancel the request if the user navigates away from the page
            setIsLoading(true);
            //we define type of response we get from the api/games
            apiClient.get<fetchGamesResponse>('/games', {signal: controller.signal})
                .then(res=> {setGames(res.data.results), setIsLoading(false)})
                .catch(err => {
                    if (err instanceof CanceledError) return; //to make the controller work instead of typing the erro
                    setError(err.message)
                    setIsLoading(false);
                });
            return () => controller.abort(); //tells Axios:Cancel that request we don’t need it anymore./ It runs when the component will unmount (navigate away) or re render,
        },[]);  
    return {games, error,isLoading}
}

export default useGames