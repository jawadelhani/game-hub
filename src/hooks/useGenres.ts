import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genres from '../data/genres';
import apiClient from '../services/api-client';

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const apiGenre=new apiClient<Genre>('/genres');

const useGenres=()=>useQuery({
    queryKey:['genres'],
    queryFn: apiGenre.getAll,
    staleTime: ms("24h"),
    initialData:{count:genres.length, results: genres} //initial
})
 
export default useGenres;