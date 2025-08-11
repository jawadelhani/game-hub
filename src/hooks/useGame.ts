import { useQuery } from "@tanstack/react-query";
import  Game  from '../entities/Game';
import apiClient from "../services/api-client";

const APIClient = new apiClient<Game>('/games');

const useGame=(slug: string) => useQuery({
    queryKey: ['game', slug],
    queryFn:()=>APIClient.get(slug)
})

export default useGame;