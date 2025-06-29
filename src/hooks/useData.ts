import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

interface fetchResponse<T>{
    count: number;
    results: T[];
}

const useData=<T>(endpoint:string, requestConfig?:AxiosRequestConfig,deps?:any)=>{
            const [data, setData] = useState<T[]>([]);
            const [error, setError] = useState('');
            const [isLoading, setIsLoading] = useState(false);
        
            useEffect(()=>{
                const controller = new AbortController(); //to cancel the request if the user navigates away from the page
                setIsLoading(true);
                //we define type of response we get from the api/genres
                // (endpoint,{object of config})  we spread query string param
                //...requestConfig ==  {signal: controller.signal, params: { genres: 4 }}
                // only requestConfig == {signal: controller.signal, requestConfig: params: { genres: 4 }}

                //https://api.rawg.io/api/games?genres=4  id

                apiClient.get<fetchResponse<T>>(endpoint, {signal: controller.signal,...requestConfig})
                    .then(res=> {setData(res.data.results), setIsLoading(false)})
                    .catch(err => {
                        if (err instanceof CanceledError) return; //to make the controller work instead of typing the erro
                        setError(err.message)
                        setIsLoading(false);
                    });
                return () => controller.abort(); //tells Axios:Cancel that request we don’t need it anymore./ It runs when the component will unmount (navigate away) or re render,
            },deps? [...deps] : []);  
        return {data, error,isLoading}
}

export default useData;