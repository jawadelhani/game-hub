//this is called a custom hook, it is a function that starts with "use" and it contains logic that can be reused across components
//it's also called a module, it can be imported in any component 
import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient from '../services/api-client';
import { fetchResponse } from '../services/api-client';
import { Platform } from '../hooks/usePlatforms';

//these are the types of the data we get ,it's defined in the website /api documentation
export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic:number
}


//last argument is for dependencies not useffect only on first render , but whenever the genre change if not it's not working
//params is the parameter that filter data id of selected genre make the filter /url= "/games?genres=4"
//params type is AxiosRequestConfig 
const useGames=(gameQuery :GameQuery)=>
    useQuery<fetchResponse<Game>,Error>({
    queryKey:['games',gameQuery],
    queryFn:()=>
        apiClient
            .get<fetchResponse<Game>>('/games', {
                params:{
                    genres:gameQuery.genre?.id, 
                    parent_platforms:gameQuery.platform?.id, 
                    ordering:gameQuery.sortOrder,
                    search:gameQuery.searchText
                }
            })
            .then(res=>res.data),
    })


export default useGames