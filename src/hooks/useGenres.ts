import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import genres from '../data/genres';

export interface Genre{
    id: number;
    name: string;
    image_background: string;
}

const apiGenre=new apiClient<Genre>('/genres');

const useGenres=()=>useQuery({
    queryKey:['genres'],
    queryFn: apiGenre.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData:{count:genres.length, results: genres} //initial
})
 
export default useGenres;