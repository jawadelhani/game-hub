//this is called a custom hook, it is a function that starts with "use" and it contains logic that can be reused across components
//it's also called a module, it can be imported in any component 

import useData from './useData'; 

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



const useGames=()=> useData<Game>('/games');

export default useGames