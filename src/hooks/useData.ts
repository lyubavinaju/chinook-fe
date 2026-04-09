import { useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export default function useData<T>(queryKey: string[], queryFn: any): {data: T | undefined, isLoading: boolean} {
    const result = useQuery<T, AxiosError>({
        queryKey,
        queryFn,
        staleTime: 1000 * 60 * 60
    });
    if (result.error) {
        throw result.error;
    }

    return {data: result.data, isLoading: result.isLoading}
}
