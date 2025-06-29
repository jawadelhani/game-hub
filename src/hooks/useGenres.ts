import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface Genre{
    id: number;
    name: string;
}

interface fetchGenresResponse{
    count: number;
    results: Genre[];
}

const useGenres=()=>{
        const [genres, setGenres] = useState<Genre[]>([]);
            const [error, setError] = useState('');
            const [isLoading, setIsLoading] = useState(false);
        
            useEffect(()=>{
                const controller = new AbortController(); //to cancel the request if the user navigates away from the page
                setIsLoading(true);
                //we define type of response we get from the api/genres
                apiClient.get<fetchGenresResponse>('/genres', {signal: controller.signal})
                    .then(res=> {setGenres(res.data.results), setIsLoading(false)})
                    .catch(err => {
                        if (err instanceof CanceledError) return; //to make the controller work instead of typing the erro
                        setError(err.message)
                        setIsLoading(false);
                    });
                return () => controller.abort(); //tells Axios:Cancel that request we don’t need it anymore./ It runs when the component will unmount (navigate away) or re render,
            },[]);  
        return {genres, error,isLoading}
}

export default useGenres;