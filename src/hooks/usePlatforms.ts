import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import apiClient from "../services/api-client";
import platforms from "../data/platforms";
import  Platform  from "../entities/Platform";

const apiPlatform= new apiClient<Platform>('/platforms/lists/parents');

const usePlatforms =()=>useQuery({
    queryKey:['platforms'],
    queryFn:apiPlatform.getAll, 
    staleTime: ms("24h"),
    initialData:{count:platforms.length, results: platforms} //initial
})

export default usePlatforms