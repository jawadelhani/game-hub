import { useQuery } from "@tanstack/react-query";
import { Trailer } from "../entities/Trailer";
import apiClient, { fetchResponse } from "../services/api-client";
import ms from "ms";

const useTrailers = (gameId: number) => {

  const apiTrailer = new apiClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery<fetchResponse<Trailer>, Error>({
    queryKey: ["gameTrailer", gameId],
    queryFn: apiTrailer.getAll,
    staleTime: ms("24h"),
    
  });
};
     

export default useTrailers;