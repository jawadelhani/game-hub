import { useQuery } from "@tanstack/react-query";
import { Screenshot } from "../entities/Screenshot";
import apiClient from "../services/api-client";



const useScreenshots = (gameID:number) =>{
    const apiScreenshots= new apiClient<Screenshot>(`/games/${gameID}/screenshots`);

    return useQuery({
        queryKey: ["gameScreenshots", gameID],
        queryFn:apiScreenshots.getAll 
    })
}
    
    
export default useScreenshots;