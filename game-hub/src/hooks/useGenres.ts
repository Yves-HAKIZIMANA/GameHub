import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre{
    id:number;
    name:string;
}

interface FetchGenresResponse{
    count: number;
    results: Genre[];
}

const useGenres = () => {

    const [genres, setGenres] = useState<Genre[]>([]);
    const [errors, setErrors] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        const controller = new AbortController()
        apiClient.get<FetchGenresResponse>("/genres", {
            signal: controller.signal,
        }).then(res => {
            setGenres(res.data.results)
        setIsLoading(false)
        })
        .catch(err => {
            if (err instanceof CanceledError) return;
        setErrors(err.message);
        setIsLoading(false)
        })
         return () => controller.abort()
    })

    return { genres, errors, isLoading}

}

export default useGenres