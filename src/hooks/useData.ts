import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface fetchResponse<T>{
    count: number;
    results: T[];
}

const useData=<T>(endpoint:string)=>{
        const [data, setData] = useState<T[]>([]);
            const [error, setError] = useState('');
            const [isLoading, setIsLoading] = useState(false);
        
            useEffect(()=>{
                const controller = new AbortController(); //to cancel the request if the user navigates away from the page
                setIsLoading(true);
                //we define type of response we get from the api/genres
                apiClient.get<fetchResponse<T>>(endpoint, {signal: controller.signal})
                    .then(res=> {setData(res.data.results), setIsLoading(false)})
                    .catch(err => {
                        if (err instanceof CanceledError) return; //to make the controller work instead of typing the erro
                        setError(err.message)
                        setIsLoading(false);
                    });
                return () => controller.abort(); //tells Axios:Cancel that request we don’t need it anymore./ It runs when the component will unmount (navigate away) or re render,
            },[]);  
        return {data, error,isLoading}
}

export default useData;