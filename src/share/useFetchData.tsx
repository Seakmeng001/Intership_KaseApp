import axios, { AxiosHeaders } from "axios";
import { useState } from "react";

export default function useFetchData<T>(url: string, method: 'GET' | 'POST' = 'POST', headers?: AxiosHeaders) {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async (requestBody?: any) => {
        setIsLoading(true);
        try {
            const response = await axios({
                method,
                url,
                data: JSON.stringify(requestBody )|| null,
                headers: {
                    ...headers,
                    'Content-Type': 'application/json',
                     // Add Authorization header if authToken exists
                },
            });
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            setError(error as Error);
        } finally {
            setIsLoading(false);
        }
    };

    return { data, isLoading, error, fetchData };
}
