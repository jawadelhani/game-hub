import axios, { AxiosRequestConfig } from "axios";

export interface fetchResponse<T>{
    count: number;
    next?: string | null;
    results: T[];
}

//to encapsulate and avoid repetition of apiClient.get<fetchResponse<genre>>('/genres').then(res=>res.data),
const axiosInsctance= axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key:"2b360daa0733411d94ec8adbb7379c18"
    }
})

class apiClient<T>{
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (params?:AxiosRequestConfig) => {
        return axiosInsctance
            .get<fetchResponse<T>>(this.endpoint, params )
            .then(res => res.data);
    };
    get =(id:number | string)=>{
        return axiosInsctance
                .get<T>(this.endpoint + '/' + id )
                .then(res => res.data); 
    }
}

export default apiClient;