//this is called a custom hook, it is a function that starts with "use" and it contains logic that can be reused across components
//it's also called a module, it can be imported in any component 
import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import apiClient,{ fetchResponse } from '../services/api-client';
import useGameQueryStore from '../store';
import  Game  from '../entities/Game';

//last argument is for dependencies not useffect only on first render , but whenever the genre change if not it's not working
//params is the parameter that filter data id of selected genre make the filter /url= "/games?genres=4"
//params type is AxiosRequestConfig 

const apiGame= new apiClient<Game>('/games')


const useGames=()=>{

    const gameQuery=useGameQueryStore(s=>s.gameQuery);

    return useInfiniteQuery<fetchResponse<Game>,Error>({
    queryKey:['games',gameQuery],
    
    queryFn:({pageParam=1})=>
        apiGame.getAll({
                    params:{
                        genres:gameQuery.genreID, 
                        parent_platforms:gameQuery.platformID, 
                        ordering:gameQuery.sortOrder,
                        search:gameQuery.searchText,
                        page:pageParam
                    }
        }),

    getNextPageParam:(lastPage, allpages) => {
        return lastPage.next ? allpages.length + 1 : undefined;        
    },
    staleTime:ms("24h"),
    })
}


export default useGames