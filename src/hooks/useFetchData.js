import axios from "axios";
import { useQuery } from "react-query";

export const useFetchData = (queryKey, url, enabled) => {
  const { isLoading, isError, data, error, refetch } = useQuery(
    queryKey,
    () => {
      return axios.get(url);
    },
    {
      enabled,
    }
  );

  return {
    refetch,
    isLoading,
    isError,
    data,
    error,
  };
};
