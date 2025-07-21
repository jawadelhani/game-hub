import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

//principe of hooks
// define interface of data you are fetching ,then fetch it
//call it in it's component
//then component called in app


export interface Platform{
    id:number
    name:string
    slug:string
}

const apiPlatform= new apiClient<Platform>('/platforms/lists/parents');

const usePlatforms =()=>useQuery({
    queryKey:['platforms'],
    queryFn:apiPlatform.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData:{count:platforms.length, results: platforms} //initial
})

export default usePlatforms