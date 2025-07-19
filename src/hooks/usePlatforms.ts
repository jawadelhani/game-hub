import { fetchResponse } from '../services/api-client';
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

//principe of hooks
// define interface of data you are fetching ,then fetch it
//call it in it's component
//then component called in app


interface Platform{
    id:number
    name:string
    slug:string
}


const usePlatforms =()=>useQuery({
    queryKey:['platforms'],
    queryFn:()=>
        apiClient
          .get<fetchResponse<Platform>>('/platforms/lists/parents').then(res=>res.data),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData:{count:platforms.length, results: platforms} //initial
})

export default usePlatforms