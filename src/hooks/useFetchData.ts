import axios from "axios";
import { useInfiniteQuery } from "react-query";

import { Character } from "store/types/character";

export interface FetchReturnType {
  data: Character[];
  nextPage: number;
}

export const fetchData = async (pageParam: number): Promise<FetchReturnType> => {
  const params = {
    page: pageParam,
    pageSize: 10,
  };
  const response = await axios
    .get(process.env.REACT_APP_BASE_URL as string, { params })
    .then((res) => res.data);
  return { data: response, nextPage: pageParam * 1 + 1 };
};

export const useFetchData = (page: string) => {
  const { data, status, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery(
    ["fetchData"],
    async ({ pageParam = page || 1 }) => {
      return await fetchData(pageParam);
    },
    {
      getNextPageParam: (lastPage: FetchReturnType) => {
        if (lastPage.data.length < 10) {
          return undefined;
        }
        return lastPage.nextPage;
      },
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );
  return { data: data?.pages, hasNextPage, fetchNextPage, status, isFetching };
};
